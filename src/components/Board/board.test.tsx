import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Board from './Board';
import '@testing-library/jest-dom/extend-expect';

const data = [
  {
    id: 1,
    title: 'foto',
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

describe('Bord comtonent', () => {
  it('the title is visible', () => {
    render(<Board cards={data} />);

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('forest')).toBeInTheDocument();
  });
  it('List renders without data', () => {
    render(<Board cards={[]} />);
    expect(screen.queryByRole('list')).toBeNull();
  });
  // it('List snapshot', () => {
  //   const list = render(<Board cards={data} />);

  //   expect(list).toMatchSnapshot();
  // });
});
