import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import FormCard from './FormCard';
import '@testing-library/jest-dom/extend-expect';

describe('FormCard component', () => {
  it('render cardForm', async () => {
    render(
      <FormCard
        name="inputValueName"
        surName="NainputValueSurme"
        date="20.03.2020"
        file=" URL.createObjectURL(inputFile[0])"
        city="on"
        approval="on"
        male="man"
      ></FormCard>
    );
    const element = await screen.findByTestId('cardForm');
    expect(element).toBeInTheDocument();
  });

  it('Form input name work', async () => {
    render(
      <FormCard
        name="Sergey"
        surName="NainputValueSurme"
        date="20.03.2020"
        file=" URL.createObjectURL(inputFile[0])"
        city="on"
        approval="on"
        male="man"
      ></FormCard>
    );
    expect(screen.queryByText(/Sergey/i)).toBeInTheDocument();
  });
  it('Form input data work', async () => {
    render(
      <FormCard
        name="Sergey"
        surName="NainputValueSurme"
        date="20.03.2020"
        file=" URL.createObjectURL(inputFile[0])"
        city="on"
        approval="on"
        male="man"
      ></FormCard>
    );
    expect(screen.queryByText(/date/i)).toBeInTheDocument();
  });
});
