import { render, screen, waitFor } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

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
