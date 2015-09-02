import Ember from "ember";

var isEqual = Ember.isEqual;

export default Ember.Route.extend({
  model: function(params) {
    var id = params.project_id;
    var projects = this.modelFor("projects");
    var project = projects.find(function(project) {
      var projectId = project.get("id");
      var projectSlug = project.get("slug");

      return isEqual(id, projectId) || isEqual(id, projectSlug);
    });

    return project;
  },

  setupController(controller, model) {
    this._super(controller, model);

    controller.setProperties({
      project: model,
    });
  },

  serialize: function(value) {
    return { project_id: value.get("slug") };
  }
});
