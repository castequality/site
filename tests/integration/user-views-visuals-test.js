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

test("User views splashes and visuals grouped by source", function() {
  $.mockjax({
    type: "GET",
    url: "/api/splashes",
    status: 200,
    dataType: "json",
    responseText: {
      splashes: [{ id: 1, video_url: "video.mp4" }]
    }
  });

  $.mockjax({
    type: "GET",
    url: "/api/visuals",
    status: 200,
    dataType: "json",
    responseText: {
      visuals: [
        { id: 1, thumbnail: "thumb-1.jpg", photo: "1.jpg", source: "hern" },
        { id: 2, thumbnail: "thumb-2.jpg", photo: "2.jpg", source: "walt" }
      ]
    }
  });

  visit("/visuals").
  then(function() {
    equal(find(".splashes iframe:first").attr("src"), "video.mp4");

    equal(visualWithSource("hern").attr("src"), "thumb-1.jpg");
    equal(visualWithSource("walt").attr("src"), "thumb-2.jpg");
  }).
  click("[data-source=hern] .visual:first a").
  then(function() {
    equal(find(".modal img").attr("src"), "1.jpg");
  });
});

function visualWithSource(source) {
  return find("[data-source=" + source + "] img:first");
}
