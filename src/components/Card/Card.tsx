import style from './card.module.css';
import React from 'react';
import image from '../../assets/img/frogs-5088767__340.jpg';
import svgLike from '../../assets/svg/like-svgrepo-com.svg';
import svgEye from '../../assets/svg/eye-svgrepo-com.svg';
import { CardInt } from '../../types/type';

const Card = function Card(props: CardInt) {
  return (
    <li className={style.wrapper_card}>
      <img className={style.image} src={image} alt="" />
      <p className={style.title}>{props.title}</p>
      <p className={style.subTitle}>{props.subTitle}</p>
      <div>
        <div className={style.footer_card}>
          <img className={style.svg} src={svgLike} alt="" />
          <div className={style.countLike}>{props.like}</div>
          <img className={style.svg} src={svgEye} alt="" />
          <div className={style.countEye}>{props.countEye}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
