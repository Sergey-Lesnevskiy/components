import React from 'react';
import { PropsError } from '../../types/type';
import style from './error404.module.css';

const Error = function Error(props: PropsError) {
  return (
    <div className={style.error}>
      <span>{props.to}</span>
    </div>
  );
};
export default Error;
