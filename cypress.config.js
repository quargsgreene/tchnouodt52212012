const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8887',
    setupNodeEvents(on, config) {
    },
  },
});
