import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import About from './About';
import '@testing-library/jest-dom/extend-expect';

describe('Search component', () => {
  it('renders search component', () => {
    render(<About></About>);

    expect(
      screen.queryByText(/Helllo, my name is Sergey . I am studying in rs-school/i)
    ).toBeInTheDocument();
  });
});
