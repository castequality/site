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

test("User views splashes adn visuals grouped by source", function() {
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
        { id: 1, thumbnail: "chrismulhern.jpg", source: "chrismulhern" },
        { id: 2, thumbnail: "zandertaketomo.jpg", source: "zandertaketomo" }
      ]
    }
  });

  visit("/visuals");

  andThen(function() {
    equal(find(".splashes iframe:first").attr("src"), "video.mp4");

    equal(visualWithSource("chrismulhern").attr("src"), "chrismulhern.jpg");
    equal(visualWithSource("zandertaketomo").attr("src"), "zandertaketomo.jpg");
  });
});

function visualWithSource(source) {
  return find("[data-source=" + source + "] img:first");
}
