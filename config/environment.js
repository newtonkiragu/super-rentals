/* eslint-env node */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'super-rentals',

    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    firebase: {
      apiKey: "AIzaSyBKSdFqbxfSjdVH0I8CR5ng5UD798UQwCo",
      authDomain: "super-rentals-2d8da.firebaseapp.com",
      databaseURL: "https://super-rentals-2d8da.firebaseio.com",
      projectId: "super-rentals-2d8da",
      storageBucket: "super-rentals-2d8da.appspot.com",
      messagingSenderId: "1086170141542"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
