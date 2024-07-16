const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    
    
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      

      return config
    },
    defaultCommandTimeout: 10000,

    retries: {
      runMode: 3,
      openMode: 0
    }
    
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },


});


