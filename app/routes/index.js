import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      instagram: this.store.find("instagram", "recent"),
      lookbooks: this.store.find("lookbook"),
      posts: this.store.find("post"),
      products: this.store.find("product")
    });
  }
});
