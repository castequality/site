import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      videos: this.store.find("video"),
      visuals: this.store.find("visual")
    });
  }
});
