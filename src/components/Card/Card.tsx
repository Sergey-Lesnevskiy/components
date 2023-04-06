import style from './card.module.css';
import React from 'react';
// import { Article } from 'pages/Main/Main';

export interface Article {
  index: number;
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: { id: string; name: string };
  title: string;
  url: string;
  urlToImage: string;
}
const Card = function Card(props: Article) {
  return (
    <li className={style.wrapper_card} data-count={props.index}>
      <div className={style.wrapperImage}>
        <img className={style.image} src={props.urlToImage} alt="" />
      </div>
      <p className={style.title}>{props.title}</p>
    </li>
  );
};

export default Card;
