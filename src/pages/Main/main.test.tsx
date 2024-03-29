import 'whatwg-fetch';
import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Main from './Main';
import '@testing-library/jest-dom/extend-expect';
import * as router from 'react-router';
import { Provider } from 'react-redux';
import { store } from '../../store';

const mockNavigate = vi.fn();

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate);
});

describe('Main component', () => {
  it('MainPage', async () => {
    render(
      <Provider store={store()}>
        <Main></Main>
      </Provider>
    );
    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(screen.getByTestId('board')).toBeInTheDocument();
  });
});
