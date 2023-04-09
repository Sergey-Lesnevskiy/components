import style from './board.module.css';
import React, { Dispatch, FC, SetStateAction } from 'react';
import Card from '../Card/Card';
import { Article } from 'pages/Main/Main';

const Board: FC<{
  articles: Article[];
  setDataAttribute: Dispatch<SetStateAction<number>>;
  setActive: Dispatch<SetStateAction<boolean>>;
}> = function Board({ articles, setDataAttribute, setActive }) {
  if (!articles.length) {
    return <ul className={style.board}></ul>;
  }

  return (
    <ul
      className={style.board}
      onClick={(event: React.MouseEvent<HTMLUListElement, MouseEvent>) => {
        if ((event.target as HTMLElement).closest('li')) {
          if ((event.target as HTMLElement).closest('li')?.dataset.count) {
            setDataAttribute(Number((event.target as HTMLElement).closest('li')?.dataset.count));
            setActive(true);
          }
        }
      }}
    >
      {articles.map((item, index) => (
        <Card {...item} key={index} index={index}></Card>
      ))}
    </ul>
  );
};

export default Board;
