import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Error from './Error';
import '@testing-library/jest-dom/extend-expect';
describe('Search component', () => {
    it('renders search component', () => {
        render(React.createElement(Error, { to: "/this page is not found/" }));
        expect(screen.queryByText(/this page is not found/i)).toBeInTheDocument();
    });
});
