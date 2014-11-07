import Ember from "ember";

export default Ember.Route.extend({
  redirect: function() {
    var projects = this.modelFor("projects");

    this.transitionTo("projects.project", projects.get("firstObject"));
  }
});
