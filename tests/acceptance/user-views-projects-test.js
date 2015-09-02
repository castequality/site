import { module, test } from "qunit";
import startApp from "caste/tests/helpers/start-app";
import Ember from "ember";
/* global $ */

var App;

module("Integration - Views Projects", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, "destroy");
  }
});

test("User views projects", assert => {
  $.mockjax({
    type: "GET",
    url: "/api/projects",
    status: 200,
    dataType: "json",
    responseText: {
      projects: [{
        id: 1,
        slug: "project-name",
        pages: [{ url: "cover.jpg"}, { url: "video.mp4", video: true }]
      }],
    }
  });

  visit("/projects");

  andThen(() => {
    assert.equal(find(".project img:first").attr("src"), "cover.jpg");
  });

  click(".next");

  andThen(() => {
    assert.equal(find(".project iframe:first").attr("src"), "video.mp4");
  });
});
