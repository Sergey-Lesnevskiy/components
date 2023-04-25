import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import WrappedApp from './WrapperApp/WrapperApp';
import { store } from './store';

import './index.css';

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store}>
    <WrappedApp />
  </Provider>
);
