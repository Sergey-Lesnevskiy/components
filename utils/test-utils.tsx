import { cleanup, render } from '@testing-library/react';
import { afterEach } from 'vitest';
// import { rest } from 'msw';
// import { setupServer } from 'msw/node';
const products = [
  {
    id: 1,
    title: 'iPhone 9',
    description: 'An apple mobile which is nothing like apple',
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: 'Apple',
    category: 'smartphones',
    thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
    images: [
      'https://i.dummyjson.com/data/products/1/1.jpg',
      'https://i.dummyjson.com/data/products/1/3.jpg',
      'https://i.dummyjson.com/data/products/1/4.jpg',
    ],
  },
];
afterEach(() => {
  cleanup();
});

const iphone = products[0];
const response = {
  products,
  skip: 0,
};

// const handlers = [
//   rest.get('https://dummyjson.com/products', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(response));
//   }),
//   rest.get('https://dummyjson.com/products/1', (req, res, ctx) => {
//     return res(ctx.status(200), ctx.json(iphone));
//   }),
// ];

// export const mockServer = setupServer(...handlers);

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  });

export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
// override render export
export { customRender as render };
