import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:3001',
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },
  video: false,
});
