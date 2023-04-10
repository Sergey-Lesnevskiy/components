/// <reference types="vitest/globals" />
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetch, { Request, Response } from 'cross-fetch';

global.fetch = fetch;
global.Request = Request;
global.Response = Response;
