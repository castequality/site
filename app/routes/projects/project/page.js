import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    var project = this.modelFor("projects.project");
    var photos = project.get("photos");
    var page = Number(params.page || 0);
    var videoPage = photos.get("length") + 1;

    if(page < 0) {
      this.transitionTo("projects.project.page", 0);
    } else if (page > videoPage) {
      this.transitionTo("projects.project.page", videoPage);
    }

    var video = Ember.Object.create({
      isVideo: true,
      url: project.get("videoUrl")
    });
    var model = photos.objectAt(page) || video;

    model.setProperties({
      next: page === videoPage ? 0 : page + 1,
      previous: page === 0 ? videoPage : page - 1
    });

    return model;
  }
});
