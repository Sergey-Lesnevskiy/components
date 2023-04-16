import style from './board.module.css';
import React, { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';
import { useAppDispatch, useAppSelector } from '../../store/hooks/useTypedSelector';
import { cardsAPI } from '../../services/CardsService';
import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';
import { setSearchValue } from '../../store/Cards';

const Board: FC = function Board() {
  const [dataAttribute, setDataAttribute] = useState<number>(0);
  const [modalActive, setModalActive] = useState(false);

  const value = useAppSelector((state) => state.Card.searchValue);
  const { data, isLoading } = cardsAPI.useFetchAllPersonsQuery(value);
  const dispatch = useAppDispatch();

  if (!value.trim() && data?.articles.length) {
    return <ul className={style.board}>Input search</ul>;
  }
  if (!data?.articles.length && !value.trim()) {
    {
      dispatch(setSearchValue('green'));
    }
    return (
      <ul className={style.board}>
        <Loader></Loader>
      </ul>
    );
  }
  return (
    <ul
      // {...(data?.articles?.length === 0 && !isLoading && (
      //   <div className={style.main__empty}>Not found</div>
      // ))}
      // {...(isLoading ? <Loader></Loader> : '')}
      className={style.board}
      onClick={(event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        if ((event.target as HTMLElement).closest('li')) {
          if ((event.target as HTMLElement).closest('li')?.dataset.count) {
            setDataAttribute(Number((event.target as HTMLElement).closest('li')?.dataset.count));
            setModalActive(true);
          }
        }
      }}
    >
      {data?.articles.map((item, index) => (
        <Card {...item} key={index} index={index}></Card>
      ))}
      <Modal
        active={modalActive}
        setActive={setModalActive}
        item={data?.articles[dataAttribute]}
      ></Modal>
    </ul>
  );
};

export default Board;
