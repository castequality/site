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

test("User views projects", function() {
  $.mockjax({
    type: "GET",
    url: "/api/projects",
    status: 200,
    dataType: "json",
    responseText: {
      projects: [{ id: 1, photo_ids: [1], video_url: "video.mp4" }],
      photos: [{ id: 1, url: "cover.jpg" }],
    }
  });

  visit("/projects");

  andThen(function() {
    equal(find(".slides li:first img").attr("src"), "cover.jpg");
    equal(find(".slides li:last iframe").attr("src"), "video.mp4");
  });
});
