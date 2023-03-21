import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css';
class Header extends React.Component {
  state = {
    currentPage: '',
  };
  componentDidMount() {
    const path = location.pathname;
    if (path === '/') {
      this.setState({
        currentPage: 'Main Page',
      });
    } else if (path === '/about') {
      this.setState({
        currentPage: 'About Page',
      });
    } else {
      this.setState({
        currentPage: 'Error Page',
      });
    }
  }
  handclickToLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    this.setState({
      currentPage: e.currentTarget.innerHTML + ' Page',
    });
  };
  render() {
    return (
      <header>
        <div className="top-bar animat-dropdown"></div>
        <div className="main-header">
          <div className="conteiner">
            <h2 className="site-title">{this.state.currentPage}</h2>
          </div>
        </div>
        <ul className={style.navLink}>
          <li>
            <NavLink className={style.linkPage} onClick={this.handclickToLink} to="/">
              Main
            </NavLink>
          </li>
          <li>
            <NavLink className={style.linkPage} onClick={this.handclickToLink} to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className={style.linkPage} onClick={this.handclickToLink} to="/error">
              Error
            </NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
