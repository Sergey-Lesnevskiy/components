/* eslint-disable react-hooks/exhaustive-deps */
import Search from '../../components/Search/Search';
import React, { useEffect, useState } from 'react';
import style from './main.module.css';
import Board from '../../components/Board/Board';
import fetch from 'cross-fetch';

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
  const [state, setState] = useState(window.localStorage.getItem('test') || 'apple');
  const [dataAttribute, setDataAttribute] = useState<number>(0);
  const [modalActive, setModalActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState<Article[]>([]);

  function dataRequest() {
    if (!state.trim()) {
      setArticles([]);
      setLoading(false);
    } else {
      fetch(`${urlNew}v2/everything?q=${state}&apiKey=${API_KEY}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return {
              item: {
                articles: [],
              },
            };
          }
        })
        .then((item) => {
          setArticles(item.articles);
          setLoading(false);
        });
    }
  }

  function handelSubmit() {
    setLoading(true);
    setArticles([]);
    dataRequest();
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      handelSubmit();
    }
  };

  function handleClick(event: React.ChangeEvent<HTMLInputElement>) {
    setState((event.target as HTMLInputElement).value);
  }
  useEffect(() => {
    dataRequest();
  }, []);
  useEffect(() => {
    localStorage.setItem('test', state);
  }, [state]);
  return (
    <div className={style.main} data-testid={'main'}>
      <div className={style.wrapperFind}>
        <Search handleKeyDown={handleKeyDown} handleClick={handleClick} state={state} />
        <button className={style.search} onClick={handelSubmit}>
          Submit
        </button>
      </div>
      {loading && <Loader></Loader>}
      {articles?.length !== 0 && (
        <div>
          <Board
            articles={articles}
            setDataAttribute={setDataAttribute}
            setActive={setModalActive}
          ></Board>

          <Modal
            active={modalActive}
            setActive={setModalActive}
            item={articles[dataAttribute]}
          ></Modal>
        </div>
      )}
    </div>
  );
};

export default Main;
