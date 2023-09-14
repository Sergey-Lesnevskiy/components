import style from './card.module.css';
import React from 'react';

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
const Card = function Card({ index, urlToImage, title }: Article) {
  return (
    <li className={style.wrapper_card} data-count={index} data-testid="boardCard">
      <div className={style.wrapperImage}>
        <img className={style.image} src={urlToImage} alt="" />
      </div>
      <p className={style.title}>{title}</p>
    </li>
  );
};

export default Card;
