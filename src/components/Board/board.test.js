import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Board from './Board';
import '@testing-library/jest-dom/extend-expect';
const data = [
    {
        id: 1,
        title: 'photo',
        subTitle: 'home',
        like: 2,
        countEye: 6,
    },
    {
        id: 2,
        title: 'picture',
        subTitle: 'forest',
        like: 2,
        countEye: 8,
    },
];
describe('Board component', () => {
    it('the title is visible list', () => {
        render(React.createElement(Board, { cards: data }));
        expect(screen.getByRole('list')).toBeInTheDocument();
    });
    it('the title is visible text', () => {
        render(React.createElement(Board, { cards: data }));
        expect(screen.getByText('forest')).toBeInTheDocument();
    });
    it('List renders without data', () => {
        render(React.createElement(Board, { cards: [] }));
        expect(screen.queryByRole('list')).toBeNull();
    });
});
