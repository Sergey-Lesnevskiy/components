import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import WrappedApp from '../WrapperApp/WrapperApp';
import React from 'react';

describe('App', () => {
  it('Renders <Main Page>', async () => {
    render(<WrappedApp />);
    const element = await screen.findByTestId('headerPage');
    expect(element).toBeInTheDocument();
  });
});
