import { render, screen, userEvent } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Form from './FormPage';
import '@testing-library/jest-dom/extend-expect';
describe('Form component', () => {
    it('render form', () => {
        render(React.createElement(Form, null));
        expect(screen.queryByTestId('react-form')).toBeInTheDocument();
    });
    it('Form submit button', () => {
        render(React.createElement(Form, null));
        expect(screen.getByRole('button')).toBeDisabled();
        userEvent.type(screen.getByTestId('nameTest'), 'fgh');
        expect(screen.getByRole('button')).toBeDisabled();
    });
});
