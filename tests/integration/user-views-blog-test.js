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

test("User views blog", function() {
  $.mockjax({
    type: "GET",
    url: "/posts",
    status: 200,
    dataType: "json",
    responseText: {
      posts: [{ id: 1, name: "Blog Post", body: "<p>Post Body</p>" }]
    }
  });

  $.mockjax({
    type: "GET",
    url: "http://api.bigcartel.com/castequality/products",
    status: 200,
    dataType: "json",
    responseText: {
      products: [{
        id: 1,
        images: [{ secure_url: "product.jpg" }],
        status: "active",
        url: "/product"
      }]
    }
  });

  visit("/");

  andThen(function() {
    ok(find(".post:first .name").text().match(/Blog Post/));
    ok(find(".post:first .body p").text().match(/Post Body/));

    equal(find(".product-link img").attr("src"), "product.jpg");
    equal(find(".product-link").attr("href"), "http://store.castequality.com/product");
  });
});
