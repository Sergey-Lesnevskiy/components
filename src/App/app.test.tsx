import 'whatwg-fetch';
import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';

import App from './App';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App', () => {
  it('Renders <Main Page>', async () => {
    render(
      <Provider store={store()}>
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(screen.getByTestId('headerPage')).toBeInTheDocument();
    waitFor(() => expect(screen.getByTestId('board')).toBeInTheDocument());
  });
  it('Renders <Error Page>', async () => {
    render(
      <Provider store={store()}>
        <MemoryRouter initialEntries={['/error']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    waitFor(() => expect(screen.queryByText(/this page is not found/i)).toBeInTheDocument());
  });
  it('Renders <About Page>', async () => {
    render(
      <Provider store={store()}>
        <MemoryRouter initialEntries={['/about']}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    waitFor(() =>
      expect(
        screen.queryByText(/Hello, my name is Sergey. I am studying in rs-school/i)
      ).toBeInTheDocument()
    );
  });
});
