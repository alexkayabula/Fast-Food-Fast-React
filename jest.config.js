module.exports = {
    clearMocks: true,
     setupFiles: ['<rootDir>/enzyme.config.js'],
     testEnvironment: 'jsdom',
     testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
     testURL: 'http://localhost',
     verbose: true,
  };