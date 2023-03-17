import Nav from '../Nav/Nav';
import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="top-bar animat-dropdown"></div>
        <div className="main-header">
          <div className="conteiner">
            <h1 className="site-title">Components</h1>
          </div>
        </div>
        <Nav></Nav>
      </header>
    );
  }
}

export default Header;
