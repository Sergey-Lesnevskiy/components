import { render, screen, userEvent } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';

// const onchange = jest.fn();

describe('Search component', () => {
  it('renders search component', () => {
    render(<Search></Search>);
    // screen.debug();

    expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
  });
  it('render without text', () => {
    render(<Search></Search>);
    expect(screen.queryByText('Search')).toBeNull();
  });

  // it('onChnge work', () => {
  //   render(<Search></Search>);
  //   userEvent.type(screen.getByRole('textbox'), 'React');
  //   expect(onchange).toHaveBeenCalled();
  // });
});
