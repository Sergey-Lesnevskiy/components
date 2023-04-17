import { act, fireEvent, render, screen, userEvent, waitFor } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Form from './FormPage';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { store } from '../../store';

describe('Form component', () => {
  it('render form', async () => {
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
    const element = await screen.findByTestId('react-form');
    expect(element).toBeInTheDocument();
  });

  it('Form input name work', async () => {
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
    const element = await screen.findByTestId('nameTest');
    userEvent.type(element, 'fgh');
    waitFor(() => {
      expect(screen.getByText(/fgh/i)).toBeInTheDocument();
    });
  });

  it('Form submit button', async () => {
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
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
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
    expect(screen.getByTestId('nameTest')).toBeInTheDocument();
    userEvent.type(screen.getByTestId('nameTest'), 'f');
    fireEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.queryByText(/The first name must contain only letters/i)).toBeInTheDocument();
    });
  });
  it('Form first name must be include only letter', () => {
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
    expect(screen.getByTestId('nameTest')).toBeInTheDocument();
    userEvent.type(screen.getByTestId('nameTest'), '34');
    fireEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.queryByText(/The first name must contain only letters/i)).toBeInTheDocument();
    });
  });
  it('Form checked approval', async () => {
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
    const element = await screen.findByTestId('approvalTest');
    expect(element).toBeInTheDocument();
    act(() => {
      fireEvent.click(element);
    });
    waitFor(() => {
      expect(screen.getByTestId('approvalTest')).toBeDisabled();
    });
    expect(screen.queryByRole('img')).toBeNull();
  });

  it('Form checked inputs', async () => {
    render(
      <Provider store={store}>
        <Form></Form>
      </Provider>
    );
    expect(screen.queryByRole('img')).toBeNull();
  });
});
