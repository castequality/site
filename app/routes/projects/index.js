import Ember from "ember";

export default Ember.Route.extend({
  redirect: function() {
    var projects = this.modelFor("projects");
    var project = projects.get("firstObject");

    this.transitionTo("projects.project", project);
  }
});
