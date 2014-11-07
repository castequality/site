import Ember from "ember";

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      splashes: this.store.find("splash"),
      visuals: this.store.find("visual")
    });
  }
});
