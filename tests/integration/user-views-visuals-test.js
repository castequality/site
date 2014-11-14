import startApp from "caste/tests/helpers/start-app";
import Ember from "ember";
/* global $ */

var App;

module("Integration - Views Visuals", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, "destroy");
  }
});

test("User views videos and visuals", function() {
  $.mockjax({
    type: "GET",
    url: "/api/videos",
    status: 200,
    dataType: "json",
    responseText: {
      videos: [{ id: 1, url: "video.mp4" }]
    }
  });

  $.mockjax({
    type: "GET",
    url: "/api/visuals",
    status: 200,
    dataType: "json",
    responseText: {
      visuals: [
        { id: 1, thumbnail: "thumb-1.jpg", photo: "1.jpg" },
        { id: 2, thumbnail: "thumb-2.jpg", photo: "2.jpg" }
      ]
    }
  });

  visit("/visuals").
  then(function() {
    equal(find(".videos iframe:first").attr("src"), "video.mp4");

    equal(find(".visuals img:first").attr("src"), "thumb-1.jpg");
    equal(find(".visuals img:last").attr("src"), "thumb-2.jpg");
  });
});
