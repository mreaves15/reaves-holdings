import '@testing-library/jest-dom';
import { ReadableStream } from 'stream/web';
const { TextEncoder, TextDecoder } = require('util');

// Polyfill Web Streams API for jsdom test environment
Object.assign(global, {
  ReadableStream,
  TextEncoder,
  TextDecoder,
});

// jsdom doesn't implement scrollIntoView
window.HTMLElement.prototype.scrollIntoView = jest.fn();
