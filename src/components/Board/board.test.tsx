import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import Board from './Board';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';
import * as router from 'react-router';

const mockNavigate = vi.fn();

beforeEach(() => {
  vi.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate);
});

describe('Main component', () => {
  it('MainPage', async () => {
    render(
      <Provider store={store}>
        <Board></Board>
      </Provider>
    );
    expect(screen.getByTestId('board')).toBeInTheDocument();
    expect(screen.getByTestId('modal')).toBeInTheDocument();
  });
});
