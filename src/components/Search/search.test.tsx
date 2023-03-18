import { render, screen, userEvent } from '../../../utils/test-utils';
import { describe, expect, it, vi } from 'vitest';
import React from 'react';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';

const handleClick = vi.fn();

describe('Search component', () => {
  it('renders search component', () => {
    render(
      <Search
        handleClick={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
        state={''}
      ></Search>
    );
    // screen.debug();

    expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  it('render without text', () => {
    render(
      <Search
        handleClick={function (event: React.ChangeEvent<HTMLInputElement>): void {
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
        handleClick={function (event: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
        state={''}
      ></Search>
    );
    expect(screen.queryByRole('textbox')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'React');
    // expect(handleClick).toHaveBeenCalledTimes(5);
    // expect(screen.getByText('React')).toBeInTheDocument();
  });
});
