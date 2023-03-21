/// <reference types="vitest" />
/// <reference types="vite/client" />h
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true,
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: 'src/setupTests',
    mockReset: true,
    coverage: {
      provider: 'c8',

      all: true,

      skipFull: true,

      reporter: 'text',

      include: ['**/*.{jsx,tsx}'],
    },
  },
});
