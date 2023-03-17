import style from './board.module.css';
import React from "react";
import Card from '../Card/Card';
class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { className: style.board }, this.props.cards.map((item) => React.createElement(Card, { ...item, key: item.id }))));
    }
}
export default Board;
