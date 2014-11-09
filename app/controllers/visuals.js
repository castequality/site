import Ember from "ember";

export default Ember.ObjectController.extend({
  queryParams: ["page", "video"],
  page: 0,
  video: 0,

  limit: function() {
    var page = this.get("page") + 1;

    return page * 30;
  }.property("page"),

  visuals: function() {
    var visuals = this.get("model.visuals");
    var limit = this.get("limit");

    return visuals.slice(0, limit);
  }.property("model.visuals.[]", "limit"),

  actions: {
    more: function() {
      this.incrementProperty("page");
    }
  }
});
