/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: "caste",
    environment: environment,
    baseURL: "/",
    locationType: "auto",
    contentSecurityPolicy: {
      "img-src": [
        "'self'",
        "*.media.tumblr.com",
        "s3.amazonaws.com",
          "bigcartel-images.a.ssl.fastly.net",
          "*.cdninstagram.com"
      ].join(" "),
      "connect-src": [
        "'self'",
        "api.bigcartel.com",
        "api.instagram.com"
      ].join(" "),
      "frame-src": "'self' player.vimeo.com",
      "script-src": "'self' https://api.instagram.com"
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      INSTAGRAM: {
        client_id: "d9a94e06adaa4f059f3b4595b365a69a",
        user: "259689659"

      }
    }
  };

  if (environment === "development") {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === "test") {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === "production") {
    ENV.googleAnalytics = {
      webPropertyId: "UA-38997413-1"
    };
  }

  return ENV;
};
