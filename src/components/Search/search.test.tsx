import 'whatwg-fetch';
import { render, screen, fireEvent, act } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';

const renderPage = () => {
  render(
    <Provider store={store()}>
      <Search></Search>
    </Provider>
  );
};

describe('Search component', () => {
  it('renders search component', async () => {
    await act(async () => {
      renderPage();
    });

    expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  it('render without text', async () => {
    await act(async () => {
      renderPage();
    });
    expect(screen.queryByText('Search')).toBeNull();
  });

  it('onChange work', async () => {
    await act(async () => {
      renderPage();
    });
    expect(screen.queryByRole('textbox')).toBeInTheDocument();

    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'React' } });
  });
});
