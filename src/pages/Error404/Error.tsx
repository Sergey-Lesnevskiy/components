import React from 'react';
import style from './error404.module.css';
class Error extends React.Component {
  render(): React.ReactNode {
    return <div className={style.error}>this page is not found</div>;
  }
}
export default Error;
