import Search from '../../components/Search/Search';
import React, { useEffect, useState } from 'react';
import style from './main.module.css';
import Board from '../../components/Board/Board';

import Loader from '../../components/Loader/Loader';
import Modal from '../../components/Modal/Modal';

const urlNew = 'https://newsapi.org/';
const API_KEY = 'c2e5e6b5c91c4304912a4cb5ca0dc328';

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
  const [state, setState] = useState(window.localStorage.getItem('test') || '');
  const [dataAttribute, setDataAttribute] = useState<number>(0);
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  function handelSubmit() {
    // console.log('i here');
  }

  enum API {
    characters = 'https://rickandmortyapi.com/api/character?page=2',
    locations = 'https://rickandmortyapi.com/api/location',
    episodes = 'https://rickandmortyapi.com/api/episode',
    http = 'https://jsonplaceholder.typicode.com/todos',
    limit = '_limit=',
  }

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    setState((event.target as HTMLInputElement).value);
  }
  useEffect(() => {
    fetch(`${urlNew}v2/everything?q=${state}&apiKey=${API_KEY}`)
      // fetch(API.characters)
      .then((response) => response.json())
      .then((item) => {
        setTimeout(() => {
          setArticles(item.articles);
          // setCardItems(item);
          setLoading(false);
          console.log(item);
        }, 1000);
      });
  }, []);
  useEffect(() => {
    localStorage.setItem('test', state);
  }, [state]);
  return (
    <div className={style.main}>
      <div className={style.wrapperFind}>
        <Search handleClick={handleClick} state={state} />
        <button className={style.search} onClick={handelSubmit}>
          Submit
        </button>
      </div>
      {loading && <Loader></Loader>}
      {/* <Board cards={cardItems.filter((item) => item)} /> */}
      <Board
        articles={articles}
        dataAttribute={dataAttribute}
        setDataAttribute={setDataAttribute}
        setActive={setModalActive}
      ></Board>
      <Modal active={modalActive} setActive={setModalActive} item={articles[dataAttribute]}></Modal>
    </div>
  );
};

export default Main;
