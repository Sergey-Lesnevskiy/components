import Search from '../../components/Search/Search';
import React from 'react';
import style from './main.module.css';
import Board from '../../components/Board/Board';

export interface Article {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

const Main = function Main() {
  return (
    <div className={style.main} data-testid={'main'}>
      <div className={style.wrapperFind}>
        <Search />
      </div>
      <div>
        <Board />
      </div>
    </div>
  );
};

export default Main;
