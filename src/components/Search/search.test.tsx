import { render, screen, userEvent } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';

describe('Search component', () => {
  it('renders search component', () => {
    render(
      <Search
        handleClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        state={''}
      ></Search>
    );

    expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  it('render without text', () => {
    render(
      <Search
        handleClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        state={''}
      ></Search>
    );
    expect(screen.queryByText('Search')).toBeNull();
  });

  it('onChnge work', () => {
    render(
      <Search
        handleClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        state={''}
      ></Search>
    );
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'React');
  });
});
