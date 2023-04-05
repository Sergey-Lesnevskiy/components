// /// <reference types="vitest" />
// /// <reference types="vite/client" />h
// import { defineConfig } from 'vitest/config';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     open: true,
//   },
//   build: {
//     outDir: 'build',
//     sourcemap: true,
//   },
//   test: {
//     globals: true,
//     environment: 'jsdom',
//     // setupFiles: 'src/setupTests',
//     mockReset: true,
//     coverage: {
//       provider: 'c8',

//       all: true,

//       skipFull: true,

//       reporter: 'text',

//       include: ['**/*.{jsx,tsx}'],
//     },
//   },
// });
/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    // setupFiles: './src/test/setup.ts',
    coverage: {
      all: true,
      include: ['src/**/*.tsx'],
      provider: 'c8',
    },
  },
});
