import Ember from "ember";

export default Ember.ObjectController.extend({
  queryParams: ["limit", "video"],
  limit: 20,
  video: 0,

  visuals: function() {
    var visuals = this.get("model.visuals");
    var limit = this.get("limit");

    return visuals.slice(0, limit);
  }.property("model.visuals.[]", "limit"),

  actions: {
    more: function() {
      this.incrementProperty("limit", 20);
    }
  }
});
