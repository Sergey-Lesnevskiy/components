import { rest } from 'msw';
import { setupServer } from 'msw/node';
import items from '../assets/item.json';

const response = {
  items,
  status: 'ok',
  totalResults: 50478,
};

const handlers = [
  rest.get('https://dummyjson.com/products', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(response));
  }),
];

export const mockServer = setupServer(...handlers);
