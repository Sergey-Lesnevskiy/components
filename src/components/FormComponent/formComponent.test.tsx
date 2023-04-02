import { render, screen, userEvent, waitFor } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import FormComponent from './FormComponent';
import '@testing-library/jest-dom/extend-expect';

describe('FormCard component', () => {
  it('render FormComponent', async () => {
    render(
      <FormComponent
        setFormValues={() => {
          return [
            {
              firstName: '',
              lastName: '',
              birthDate: '',
              fileInput: '',
              country: '',
              agree: true,
              gender: '',
            },
          ];
        }}
      ></FormComponent>
    );
    const element = await screen.findByTestId('react-form');
    const element2 = await screen.findByTestId('nameTest');
    const element3 = await screen.findByTestId('lastNameTest');
    const element4 = await screen.findByTestId('birthDate');
    const element5 = await screen.findByTestId('fileInput');
    const element6 = await screen.findByTestId('approvalTest');
    const element7 = await screen.findByTestId('genderManTest');
    const element8 = await screen.findByTestId('selectTest');
    expect(element).toBeInTheDocument();
    expect(element2).toBeInTheDocument();
    expect(element3).toBeInTheDocument();
    expect(element4).toBeInTheDocument();
    expect(element5).toBeInTheDocument();
    expect(element6).toBeInTheDocument();
    expect(element7).toBeInTheDocument();
    expect(element8).toBeInTheDocument();
  });
  it('show message after create card', async () => {
    render(
      <FormComponent
        setFormValues={() => {
          return [
            {
              firstName: '',
              lastName: '',
              birthDate: '',
              fileInput: '',
              country: '',
              agree: true,
              gender: '',
            },
          ];
        }}
      ></FormComponent>
    );
    const element2 = await screen.findByTestId('nameTest');
    const element3 = await screen.findByTestId('lastNameTest');
    const element4 = await screen.findByTestId('birthDate');
    const element5 = await screen.findByTestId('fileInput');
    const element6 = await screen.findByTestId('approvalTest');
    const element7 = await screen.findByTestId('genderManTest');
    const element8 = await screen.findByTestId('selectTest');
    userEvent.click(element6);
    userEvent.click(element7);
    userEvent.type(element2, 'fgh');
    userEvent.type(element3, 'fgh');
    userEvent.selectOptions(element8, 'Belarus');
    waitFor(() => {
      expect(screen.getByText(/belarus/i)).toBeInTheDocument();
    });
    userEvent.type(element4, '2023-03-22');
    waitFor(() => {
      expect(screen.getByText(/2023-03-22/i)).toBeInTheDocument();
    });
    userEvent.upload(element5, [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]);
    waitFor(() => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });
    userEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.findByTestId('cardForm')).toBeInTheDocument();
    });
  });

  it('showCard after create card', async () => {
    render(
      <FormComponent
        setFormValues={() => {
          return [
            {
              firstName: '',
              lastName: '',
              birthDate: '',
              fileInput: '',
              country: '',
              agree: true,
              gender: '',
            },
          ];
        }}
      ></FormComponent>
    );
    const element2 = await screen.findByTestId('nameTest');
    const element3 = await screen.findByTestId('lastNameTest');
    const element4 = await screen.findByTestId('birthDate');
    const element5 = await screen.findByTestId('fileInput');
    const element6 = await screen.findByTestId('approvalTest');
    const element7 = await screen.findByTestId('genderManTest');
    const element8 = await screen.findByTestId('selectTest');
    userEvent.click(element6);
    userEvent.click(element7);
    userEvent.type(element2, 'fgh');
    userEvent.type(element3, 'fgh');
    userEvent.selectOptions(element8, 'Belarus');
    waitFor(() => {
      expect(screen.getByText(/belarus/i)).toBeInTheDocument();
    });
    userEvent.type(element4, '2023-03-22');
    waitFor(() => {
      expect(screen.getByText(/2023-03-22/i)).toBeInTheDocument();
    });
    userEvent.upload(element5, [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })]);
    waitFor(() => {
      expect(screen.getByRole('button')).not.toBeDisabled();
    });
    userEvent.click(screen.getByRole('button'));
    waitFor(() => {
      expect(screen.getByText(/Your data is send/i)).toBeInTheDocument();
    });
  });
});
