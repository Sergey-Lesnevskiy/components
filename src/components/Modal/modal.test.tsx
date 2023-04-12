import { render, screen, waitFor } from '../../../utils/test-utils';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Modal from './Modal';
import '@testing-library/jest-dom/extend-expect';
const data = {
  author: 'author',
  content: 'content',
  description: 'description',
  publishedAt: 'publishedAt',
  source: { id: 'string', name: 'string' },
  title: 'title',
  url: 'url',
  urlToImage: 'urlToImage',
};
describe('Modal component', () => {
  it('renders Modal component', () => {
    render(
      <Modal
        active={true}
        setActive={function (): void {
          throw new Error('Function not implemented.');
        }}
        item={data}
      ></Modal>
    );
    waitFor(() => {
      expect(screen.queryByPlaceholderText(/author/i)).toBeInTheDocument();
    });
  });
});
