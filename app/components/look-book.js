import Ember from "ember";

export default Ember.Component.extend({
  classNameBindings: [":lookbook"],
  page: 0,

  current: function() {
    var pages = this.get("pages");
    var page = this.get("page");

    return pages.objectAt(page);
  }.property("pages.[]", "page"),

  actions: {
    next: function() {
      var page = this.get("page");
      var lastPage = this.get("pages.length") - 1;
      var next = page === lastPage ? 0 : page + 1;

      this.set("page", next);
    },

    previous: function() {
      var page = this.get("page");
      var lastPage = this.get("pages.length") - 1;
      var previous = page === 0 ? lastPage : page - 1;

      this.set("page", previous);
    }
  }
});
