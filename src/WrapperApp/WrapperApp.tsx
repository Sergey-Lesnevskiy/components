import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App/App';

export default class WrappedApp extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
