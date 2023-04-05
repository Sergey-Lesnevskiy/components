import Search from '../../components/Search/Search';
import React, { useEffect, useState } from 'react';
import style from './main.module.css';
import Board from '../../components/Board/Board';
import { cardItems } from '../../data/bd';

const Main = function Main() {
  const [state, setState] = useState(window.localStorage.getItem('test') || '');

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    setState((event.target as HTMLInputElement).value);
  }
  useEffect(() => {
    localStorage.setItem('test', state);
  }, [state]);
  return (
    <div className={style.main}>
      <Search handleClick={handleClick} state={state} />
      <Board cards={cardItems.filter((item) => item.subTitle.includes(state))} />
    </div>
  );
};

export default Main;
