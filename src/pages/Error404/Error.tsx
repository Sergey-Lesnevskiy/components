import React from 'react';
import { PropsError } from '../../types/type';
import style from './error404.module.css';

class Error extends React.Component<PropsError> {
  constructor(props: PropsError) {
    super(props);
  }
  PropsError: { to: string } = this.props;
  render(): React.ReactNode {
    return <div className={style.error}>This page is not found</div>;
  }
}
export default Error;
