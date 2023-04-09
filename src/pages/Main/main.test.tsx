import { render, screen, waitFor } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Main from './Main';
import '@testing-library/jest-dom/extend-expect';
import { prepareFetch } from 'vi-fetch';
import fetch from 'node-fetch';

const fakeUser = [
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

const fetchData = async () => {
  try {
    const cardJSON = await fetch(
      `https://newsapi.org/v2/everything?q=apple&apiKey=c2e5e6b5c91c4304912a4cb5ca0dc328`
    );
    const card = await cardJSON.json();
    return card;
  } catch (error) {
    console.log(error);
  }
};

describe('Main component', () => {
  beforeAll(() => {
    prepareFetch(global, 'fetch');
  });
  test('the data is peanut butter', async () => {
    const data = await fetchData();
    expect(data).toBeDefined();
  });

  it('doesnt really fetch', async () => {
    render(<Main />);
    waitFor(() => {
      expect(screen.getByTestId('main')).toBeInTheDocument();
    });
  });
});
