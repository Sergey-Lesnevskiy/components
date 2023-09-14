import { describe, expect, it, vi } from 'vitest';

import { render, screen, fireEvent, waitFor, act } from '@testing-library/react';

import { Provider } from 'react-redux';
import { store } from '../../store';
import { MemoryRouter } from 'react-router-dom';
import App from '../../App/App';

const renderForm = () => {
  render(
    <Provider store={store()}>
      <MemoryRouter initialEntries={['/form']}>
        <App />
      </MemoryRouter>
    </Provider>
  );
};
describe('Form component', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('render form', async () => {
    await act(async () => {
      renderForm();
    });
    const element = await screen.findByTestId('react-form');
    expect(element).toBeInTheDocument();
  });

  it('Form input name work', async () => {
    await act(async () => {
      renderForm();
    });
    const element = await screen.findByTestId('nameTest');
    fireEvent.input(element, { target: { value: 'fgh' } });
    waitFor(() => {
      expect(screen.getByText(/fgh/i)).toBeInTheDocument();
    });
  });

  it('Form submit button', async () => {
    await act(async () => {
      renderForm();
    });
    const element = await screen.findByTestId('nameTest');

    fireEvent.input(element, { target: { value: 'fgh' } });
    waitFor(() => {
      expect(screen.getByText(/fgh/i)).toBeInTheDocument();
    });
    waitFor(() => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });
  });

  it('Form first name must be more then 1 letter', async () => {
    await act(async () => {
      renderForm();
    });
    expect(screen.getByTestId('nameTest')).toBeInTheDocument();
    fireEvent.input(screen.getByTestId('nameTest'), { target: { value: 'f' } });
    fireEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.queryByText(/The first name must contain only letters/i)).toBeInTheDocument();
    });
  });
  it('Form first name must be include only letter', async () => {
    await act(async () => {
      renderForm();
    });
    expect(screen.getByTestId('nameTest')).toBeInTheDocument();
    fireEvent.input(screen.getByTestId('nameTest'), { target: { value: '34' } });
    fireEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.queryByText(/The first name must contain only letters/i)).toBeInTheDocument();
    });
  });
  it('Form checked approval', async () => {
    await act(async () => {
      renderForm();
    });
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
    await act(async () => {
      renderForm();
    });
    expect(screen.queryByRole('img')).toBeNull();
  });
});
