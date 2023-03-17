import style from './card.module.css';
import React from 'react';
import image from '../../assets/img/frogs-5088767__340.jpg';
import svgLike from '../../assets/svg/like-svgrepo-com.svg';
import svgEye from '../../assets/svg/eye-svgrepo-com.svg';
import { CardInt } from 'components/Board/Board';

class Card extends React.Component<CardInt, never> {
  constructor(props: CardInt) {
    super(props);
  }
  render() {
    return (
      <li className={style.wrapper_card}>
        <img className={style.image} src={image} alt="" />
        <p className={style.title}>{this.props.title}</p>
        <p className={style.subTitle}>{this.props.subTitle}</p>
        <div>
          <div className={style.footer_card}>
            <img className={style.svg} src={svgLike} alt="" />
            <div className={style.countLike}>{this.props.like}</div>
            <img className={style.svg} src={svgEye} alt="" />
            <div className={style.countEye}>{this.props.countEye}</div>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
