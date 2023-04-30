import { defineConfig } from 'cypress';
import coverage from '@cypress/code-coverage/task';

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: 'cypress/**/*.*',
    },
  },
  e2e: {
    baseUrl: 'http://localhost:5173',
    setupNodeEvents(on, config) {
      coverage(on, config);
      return config;
    },
  },
  video: false,
});
// Cypress:        12.11.0                                                                        │
// │ Browser:        Electron 106 (headless)                                                        │
// │ Node Version:   v16.13.2 (C:\Program Files\nodejs\node.exe)                                    │
// │ Specs:          4 found (about.cy.ts, error.cy.ts, form.cy.ts, main.cy.ts)                     │
// │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
