import React from 'react';
import { PropsError } from '../../types/type';
import style from './error404.module.css';

const Error = function Error(props: PropsError) {
  return <div className={style.error}>{props.to}</div>;
};
export default Error;
