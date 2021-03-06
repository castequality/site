import Ember from "ember";
/* global _ */

var computed = Ember.computed;

export default Ember.Controller.extend({
  queryParams: ["limit", "page"],
  limit: 5,
  page: 0,

  activeProducts: computed.filterBy("products", "status", "active"),

  hasMorePosts: function() {
    var limit = this.get("limit");
    var postsCount = this.get("postsCount");

    return limit < postsCount;
  }.property("postsCount", "limit"),

  lookbook: computed.alias("model.lookbooks.lastObject"),

  postsCount: computed.alias("model.posts.length"),

  posts: function() {
    var limit = this.get("limit");
    var posts = this.get("model.posts");
    var postsCount = posts.get("length");

    if (limit < postsCount) {
      return posts.slice(0, limit);
    } else {
      return posts;
    }
  }.property("model.posts.[]", "limit"),

  product: function() {
    return _.sample(this.get("activeProducts"));
  }.property("activeProducts.[]"),

  actions: {
    more: function() {
      var hasMorePosts = this.get("hasMorePosts");

      if (hasMorePosts) {
        this.incrementProperty("limit", 5);
      }
    }
  }
});
