import Ember from "ember";

export default Ember.Route.extend({
  redirect: function() {
    this.transitionTo("visuals.video", 0);
  }
});
