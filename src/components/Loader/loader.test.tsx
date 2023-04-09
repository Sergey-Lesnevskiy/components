import { render, screen, waitFor } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Loader from './Loader';
import '@testing-library/jest-dom/extend-expect';
describe('Loader component', () => {
  it('renders Loader component', () => {
    render(<Loader></Loader>);
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
});
