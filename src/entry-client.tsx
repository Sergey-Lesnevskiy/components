import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import WrappedApp from './WrapperApp/WrapperApp';
import { RootState, store } from './store';

import './index.css';

type CustomWindowInstanse = Window & typeof globalThis & { __PRELOADED_STATE__?: RootState };

const store1 = store((window as CustomWindowInstanse).__PRELOADED_STATE__);
delete (window as CustomWindowInstanse).__PRELOADED_STATE__;

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <Provider store={store1}>
    <WrappedApp />
  </Provider>
);
