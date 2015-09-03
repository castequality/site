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
    assert.ok(text('.post:first .name').match(/Blog Post/));
    assert.ok(text('.post:first .body p').match(/Post Body/));

    assert.equal(src('.product-link img'), 'product.jpg');
    assert.equal(href('.product-link'), 'http://store.castequality.com');

    assert.equal(src('.instagram-link img'), 'instagram.jpg');
    assert.equal(href('.instagram-link'), 'https://instagram.com/p/1');

    assert.equal(src('.lookbook img:first'), 'page-1.jpg');
  });
});

function text(selector) {
  return findWithAssert(selector).text().trim();
}

function src(selector) {
  return findWithAssert(selector).attr('src');
}

function href(selector) {
  return findWithAssert(selector).attr('href');
}
