/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetch, { Request, Response } from 'cross-fetch';
// import { mockServer } from './utils/test-utils';

global.fetch = fetch;
global.Request = Request;
global.Response = Response;

// beforeAll(() => mockServer.listen());
// afterEach(() => mockServer.resetHandlers());
// afterAll(() => mockServer.close());
