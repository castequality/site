/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    fingerprint: {
      prepend: '//d1jpp4qqv4sc2h.cloudfront.net/'
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/jquery-mockjax/jquery.mockjax.js');
  app.import('bower_components/underscore/underscore.js');
  app.import('bower_components/masonry/dist/masonry.pkgd.js');
  app.import('bower_components/imagesloaded/imagesloaded.pkgd.js');
  app.import('bower_components/jquery-waypoints/waypoints.js');

  return app.toTree();
};
