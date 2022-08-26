const { defaults } = require('jest-config');

module.exports = {
  ...defaults,
  setupFiles: ['./tests/globalMocks.js'],
  testEnvironment: 'jsdom',
};
