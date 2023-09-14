import { render, screen, waitFor } from '@testing-library/react';

import { describe, expect, it } from 'vitest';
import Loader from './Loader';

describe('Loader component', () => {
  it('renders Loader component', () => {
    render(<Loader></Loader>);
    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
  });
});
