/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setupTests.ts'],
    coverage: {
      all: true,
      reporter: 'text',
      include: ['**/*.{jsx,tsx}'],
      exclude: ['src/main.tsx'],
      provider: 'c8',
    },
  },
});
