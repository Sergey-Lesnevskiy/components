import style from './board.module.css';
import React from 'react';
import Card from '../Card/Card';
import { CardListProps } from '../../types/type';

const Board = function Board(props: CardListProps) {
  if (!props.cards.length) {
    return null;
  }
  return (
    <ul className={style.board}>
      {props.cards.map((item) => (
        <Card {...item} key={item.id}></Card>
      ))}
    </ul>
  );
};

export default Board;
