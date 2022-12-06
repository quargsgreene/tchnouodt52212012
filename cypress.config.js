const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:8887',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);

      // add other tasks to be registered here

      // IMPORTANT to return the config object
      // with the any changed environment variables
      return config;
    },
  },
});
