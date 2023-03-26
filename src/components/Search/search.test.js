import { render, screen, userEvent } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Search from './Search';
import '@testing-library/jest-dom/extend-expect';
describe('Search component', () => {
    it('renders search component', () => {
        render(React.createElement(Search, { handleClick: function () {
                throw new Error('Function not implemented.');
            }, state: '' }));
        expect(screen.queryByPlaceholderText(/search/i)).toBeInTheDocument();
    });
    it('render without text', () => {
        render(React.createElement(Search, { handleClick: function () {
                throw new Error('Function not implemented.');
            }, state: '' }));
        expect(screen.queryByText('Search')).toBeNull();
    });
    it('onChnge work', () => {
        render(React.createElement(Search, { handleClick: function () {
                throw new Error('Function not implemented.');
            }, state: '' }));
        expect(screen.queryByRole('textbox')).toBeInTheDocument();
        userEvent.type(screen.getByRole('textbox'), 'React');
    });
});
