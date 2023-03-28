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
        <li>Name: &nbsp; {name}</li>
        <li>Last name: &nbsp;{surName}</li>
        <li>Date: &nbsp;{date}</li>
        <li>
          File:&nbsp;
          <img className={style.img} src={file} alt=""></img>
        </li>
        <li>City:&nbsp; {city}</li>
        <li>Yes:&nbsp; {approval}</li>
        <li>Male:&nbsp; {male}</li>
      </ul>
    );
  }
}

export default FormCard;
