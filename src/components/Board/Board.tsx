import style from './board.module.css';
import React, { FC, useState } from 'react';
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
  const { data, isFetching, isError } = cardsAPI.useFetchAllPersonsQuery(value);
  const dispatch = useAppDispatch();

  if (!data?.articles.length && !value.trim()) {
    {
      dispatch(setSearchValue('Search'));
    }
  }
  return (
    <ul
      data-testid="board"
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
      {isFetching ? (
        <Loader></Loader>
      ) : isError ? (
        <h3>
          sorry but API newsapi.org do not use in production and I change this API to JSON
          Placeholder
        </h3>
      ) : !data?.articles.length ? (
        <p>We can not find anything</p>
      ) : (
        data?.articles.map((item, index) => <Card {...item} key={index} index={index}></Card>)
      )}
      {modalActive && (
        <Modal
          active={modalActive}
          setActive={setModalActive}
          item={data?.articles[dataAttribute]}
        ></Modal>
      )}
    </ul>
  );
};

export default Board;
