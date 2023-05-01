import { render, screen, fireEvent } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Search component', () => {
  it('renders search component', () => {
    render(
      <Provider store={store()}>
        <Search></Search>
      </Provider>
    );

    expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  it('render without text', () => {
    render(
      <Provider store={store()}>
        <Search></Search>
      </Provider>
    );
    expect(screen.queryByText('Search')).toBeNull();
  });

  it('onChange work', () => {
    render(
      <Provider store={store()}>
        <Search></Search>
      </Provider>
    );
    expect(screen.queryByRole('textbox')).toBeInTheDocument();

    fireEvent.input(screen.getByRole('textbox'), { target: { value: 'React' } });
  });
});
