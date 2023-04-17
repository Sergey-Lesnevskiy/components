import { render, screen, waitFor } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import ShowSend from './ShowSend';
import '@testing-library/jest-dom/extend-expect';

describe('Search component', () => {
  it('renders search component', () => {
    render(<ShowSend text="I show message"></ShowSend>);
    waitFor(() => {
      expect(screen.getByText(/I show message/i)).toBeInTheDocument();
    });
  });
});
