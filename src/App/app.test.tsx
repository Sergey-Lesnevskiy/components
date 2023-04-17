import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import WrappedApp from '../WrapperApp/WrapperApp';
import React from 'react';
import { prepareFetch } from 'vi-fetch';
import { Provider } from 'react-redux';
import { store } from '../store';

describe('App', () => {
  beforeAll(() => {
    prepareFetch(global, 'fetch');
  });
  it('Renders <Main Page>', async () => {
    render(
      <Provider store={store}>
        <WrappedApp />
      </Provider>
    );
    const element = await screen.findByTestId('headerPage');
    expect(element).toBeInTheDocument();
  });
});
