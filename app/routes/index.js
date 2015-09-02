import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      instagram: this.store.findRecord("instagram", "recent"),
      lookbooks: this.store.findAll("lookbook"),
      posts: this.store.findAll("post"),
      products: this.store.findAll("product")
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      instagram: model.instagram,
      lookbooks: model.lookbooks,
      posts: model.posts,
      products: model.products,
    });
  }
});
