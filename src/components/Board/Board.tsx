import style from './board.module.css';
import React from 'react';
import Card from '../Card/Card';
import { CardListProps } from '../../types/type';

class Board extends React.Component<CardListProps, unknown> {
  constructor(props: CardListProps) {
    super(props);
  }

  render() {
    if (!this.props.cards.length) {
      return null;
    }
    return (
      <ul className={style.board}>
        {this.props.cards.map((item) => (
          <Card {...item} key={item.id}></Card>
        ))}
      </ul>
    );
  }
}

export default Board;
