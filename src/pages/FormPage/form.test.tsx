import { fireEvent, render, screen, userEvent, waitFor } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Form from './FormPage';
import '@testing-library/jest-dom/extend-expect';

describe('Form component', () => {
  it('render form', async () => {
    render(<Form></Form>);
    const element = await screen.findByTestId('react-form');
    expect(element).toBeInTheDocument();
  });

  it('Form input name work', async () => {
    render(<Form></Form>);
    expect(screen.getByRole('button')).toBeDisabled();
    const element = await screen.findByTestId('nameTest');
    userEvent.type(element, 'fgh');
    waitFor(() => {
      expect(screen.getByText(/fgh/i)).toBeInTheDocument();
    });
  });
  it('Form submit button', async () => {
    render(<Form></Form>);
    expect(screen.getByRole('button')).toBeDisabled();
    const element = await screen.findByTestId('nameTest');
    userEvent.type(element, 'fgh');
    waitFor(() => {
      expect(screen.getByText(/fgh/i)).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });

  it('Form first name must be more then 1 letter', () => {
    render(<Form></Form>);
    expect(screen.getByTestId('nameTest')).toBeInTheDocument();
    userEvent.type(screen.getByTestId('nameTest'), 'f');
    fireEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.queryByText(/The first name must contain only letters/i)).toBeInTheDocument();
    });
  });
});
