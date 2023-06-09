const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "3pc19y",
    baseUrl: "http://qamid.tmweb.ru",
    retries: {
      openMode: 0,
    },
    env: {
      viewportWidth: 1680,
      viewportHeight: 1050,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
