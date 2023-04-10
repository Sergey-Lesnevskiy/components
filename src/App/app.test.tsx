import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import WrappedApp from '../WrapperApp/WrapperApp';
import React from 'react';
import { prepareFetch } from 'vi-fetch';

describe('App', () => {
  beforeAll(() => {
    prepareFetch(global, 'fetch');
  });
  it('Renders <Main Page>', async () => {
    render(<WrappedApp />);
    const element = await screen.findByTestId('headerPage');
    expect(element).toBeInTheDocument();
  });
});
