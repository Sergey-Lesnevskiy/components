import Search from '../../components/Search/Search';
import React from 'react';
import style from './main.module.css';
import Board from '../../components/Board/Board';
export const cardItems = [
    {
        id: 1,
        title: 'foto',
        subTitle: 'home',
        like: 2,
        countEye: 6
    },
    {
        id: 2,
        title: 'picture',
        subTitle: 'forest',
        like: 2,
        countEye: 8
    },
    {
        id: 3,
        title: 'art',
        subTitle: 'human',
        like: 2,
        countEye: 7
    },
    {
        id: 4,
        title: 'foto',
        subTitle: 'animals',
        like: 5,
        countEye: 6
    },
    {
        id: 5,
        title: 'foto',
        subTitle: 'field',
        like: 4,
        countEye: 6
    },
    {
        id: 6,
        title: 'foto',
        subTitle: 'yard',
        like: 2,
        countEye: 16
    }
];
class Main extends React.Component {
    render() {
        return (React.createElement("div", { className: style.main },
            React.createElement(Search, null),
            React.createElement(Board, { cards: cardItems })));
    }
}
export default Main;
