import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import FormCard from './FormCard';
import '@testing-library/jest-dom/extend-expect';
// firstName, lastName, birthDate, country, agree, gender, fileInput
describe('FormCard component', () => {
  it('render cardForm', async () => {
    render(
      <FormCard
        firstName="inputValueName"
        lastName="NainputValueSurme"
        birthDate="20.03.2020"
        fileInput=" URL.createObjectURL(inputFile[0])"
        country="on"
        agree={true}
        gender="man"
      ></FormCard>
    );
    const element = await screen.findByTestId('cardForm');
    expect(element).toBeInTheDocument();
  });

  it('Form input name work', async () => {
    render(
      <FormCard
        firstName="Sergey"
        lastName="NainputValueSurme"
        birthDate="20.03.2020"
        fileInput=" URL.createObjectURL(inputFile[0])"
        country="on"
        agree={true}
        gender="man"
      ></FormCard>
    );
    expect(screen.queryByText(/Sergey/i)).toBeInTheDocument();
  });
  it('Form input data work', async () => {
    render(
      <FormCard
        firstName="Sergey"
        lastName="NainputValueSurme"
        birthDate="20.03.2020"
        fileInput=" URL.createObjectURL(inputFile[0])"
        country="on"
        agree={true}
        gender="man"
      ></FormCard>
    );
    expect(screen.queryByText(/date/i)).toBeInTheDocument();
    expect(screen.queryByText(/file/i)).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
    expect(screen.getAllByRole('img')).toHaveLength(1);
  });
});
