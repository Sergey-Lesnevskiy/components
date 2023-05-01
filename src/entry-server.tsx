import React from 'react';
import { RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from './App/App';
import { store } from './store';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';

import './index.css';
import cardsAPI from './services/CardsService';

export const render = async (url: string, context: RenderToPipeableStreamOptions) => {
  const store1 = store();
  await store1.dispatch(cardsAPI.endpoints.fetchAllPersons.initiate(''));

  const preloadedState = store1.getState();
  const transformPreload = JSON.stringify(preloadedState).replace(/</g, '\\u003c');
  const injectPreload = () => `<script>window.__PRELOADED_STATE__ = ${transformPreload}</script>`;

  const stream = renderToPipeableStream(
    <Provider store={store1}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    context
  );
  return { stream, injectPreload };
};
