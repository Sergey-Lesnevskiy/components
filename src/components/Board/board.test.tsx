import { render, screen } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Board from './Board';
import '@testing-library/jest-dom/extend-expect';

const data = [
  {
    author: 'string',
    content: 'string',
    description: 'string',
    publishedAt: 'string',
    source: { id: 'string', name: 'string' },
    title: 'string',
    url: 'string',
    urlToImage: 'string',
  },
  {
    author: 'string',
    content: 'string',
    description: 'string',
    publishedAt: 'string',
    source: { id: 'string', name: 'string' },
    title: 'string',
    url: 'string',
    urlToImage: 'string',
  },
];

describe('Board component', () => {
  it('the title is visible list', () => {
    render(
      <Board
        articles={data}
        setDataAttribute={function (value: React.SetStateAction<number>): void {
          console.log(value);
          throw new Error('Function not implemented.');
        }}
        setActive={function (value: React.SetStateAction<boolean>): void {
          console.log(value);
          throw new Error('Function not implemented.');
        }}
      />
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
