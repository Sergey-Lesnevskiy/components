import React from 'react';
import { Link } from 'react-router-dom';
import style from './nav.module.css';

class Nav extends React.Component {
  render() {
    return (
      <ul className={style.navLink}>
        <li>
          <Link className={style.linkPage} to="/">
            Main
          </Link>
        </li>
        <li>
          <Link className={style.linkPage} to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={style.linkPage} to="/error">
            Error
          </Link>
        </li>
      </ul>
    );
  }
}

export default Nav;
