import { module, test } from "qunit";
import startApp from "caste/tests/helpers/start-app";
import Ember from "ember";
/* global $ */

var App;

module("Integration - Views Blog", {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, "destroy");
  }
});

test("User views blog", function(assert) {
  $.mockjax({
    type: "GET",
    url: "/api/posts",
    status: 200,
    dataType: "json",
    responseText: {
      posts: [{ id: 1, name: "Blog Post", body: "<p>Post Body</p>" }]
    }
  });

  $.mockjax({
    type: "GET",
    url: "/api/lookbooks",
    status: 200,
    dataType: "json",
    responseText: {
      lookbooks: [{ id: 1, pages: [{ url: "page-1.jpg" }] }]
    }
  });

  $.mockjax({
    type: "GET",
    url: /api.instagram.com/,
    status: 200,
    dataType: "jsonp",
    responseText: {
      data: [{
        id: 1,
        images: {
          low_resolution: { url: "instagram.jpg" }
        },
        link: "https://instagram.com/p/1"
      }]
    }
  });

  $.mockjax({
    type: "GET",
    url: /api.bigcartel.com\/castequality\/products/,
    status: 200,
    dataType: "json",
    responseText: [{
      id: 1,
      images: [{ secure_url: "product.jpg" }],
      status: "active",
      url: "/product"
    }]
  });

  visit("/");

  andThen(function() {
    assert.ok(find(".post:first .name").text().match(/Blog Post/));
    assert.ok(find(".post:first .body p").text().match(/Post Body/));

    assert.equal(find(".product-link img").attr("src"), "product.jpg");
    assert.equal(find(".product-link").attr("href"), "http://store.castequality.com");

    assert.equal(find(".instagram-link img").attr("src"), "instagram.jpg");
    assert.equal(find(".instagram-link").attr("href"), "https://instagram.com/p/1");

    assert.equal(find(".lookbook img:first").attr("src"), "page-1.jpg");
  });
});
