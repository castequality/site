import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      videos: this.store.findAll("video"),
      visuals: this.store.findAll("visual")
    });
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      videos: model.videos,
      visuals: model.visuals,
    });
  },
});
