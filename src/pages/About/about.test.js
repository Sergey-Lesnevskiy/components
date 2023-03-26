import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import About from './About';
import '@testing-library/jest-dom/extend-expect';
describe('Search component', () => {
  it('renders search component', () => {
    render(React.createElement(About, null));
    expect(
      screen.queryByText(/Hello, my name is Sergey. I am studying in rs-school/i)
    ).toBeInTheDocument();
  });
});
