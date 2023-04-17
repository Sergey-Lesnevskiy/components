import { PersonCard } from '../../types/type';
import style from './formCard.module.css';
import React from 'react';

function FormCard(props: PersonCard) {
  const { firstName, birthDate, country, agree, gender, fileInput } = props;
  return (
    <ul className={style.wrapperFormCard} data-testid={'cardForm'}>
      <li>Name: &nbsp; {firstName}</li>
      <li>Date: &nbsp;{birthDate}</li>
      <li>
        File:&nbsp;&nbsp;
        <img className={style.img} src={fileInput} alt=""></img>
      </li>
      <li>City:&nbsp; {country}</li>
      <li>Agree:&nbsp; {agree}</li>
      <li>Male:&nbsp; {gender}</li>
    </ul>
  );
}

export default FormCard;
