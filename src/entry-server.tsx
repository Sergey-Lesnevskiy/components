import React from 'react';
import { RenderToPipeableStreamOptions } from 'react-dom/server';
import { Provider } from 'react-redux';
import App from './App/App';
import { store } from './store';
import { StaticRouter } from 'react-router-dom/server';
import { renderToPipeableStream } from 'react-dom/server';

import './index.css';

export const render = (url: string, context: RenderToPipeableStreamOptions) => {
  return renderToPipeableStream(
    <Provider store={store}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </Provider>,
    context
  );
};
