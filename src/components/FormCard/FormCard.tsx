import style from './formCard.module.css';
import React from 'react';
import { PersonCard } from '../../types/type';

class FormCard extends React.Component<PersonCard> {
  constructor(props: PersonCard) {
    super(props);
  }
  render() {
    const { name, surName, date, file, city, approval, male } = this.props;
    return (
      <ul className={style.wrapperFormCard} data-testid={'cardForm'}>
        <li>Name: {name}</li>
        <li>Last name: {surName}</li>
        <li>Date: {date}</li>
        <li>
          File:
          <img className={style.img} src={file} alt=""></img>
        </li>
        <li>City: {city}</li>
        <li>Yes: {approval}</li>
        <li>Male: {male}</li>
      </ul>
    );
  }
}

export default FormCard;
