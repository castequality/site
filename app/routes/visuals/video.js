import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    var page = Number(params.page || 0);
    var videos = this.modelFor("visuals").splashes;
    var lastPage = videos.get("length") - 1;

    if (page < 0) {
      this.transitionTo("visuals.video", 0);
    } else if (page > lastPage) {
      this.transitionTo("visuals.video", lastPage);
    } else {
      var video = videos.objectAt(page);

      video.setProperties({
        next: page === lastPage ? 0 : page + 1,
        previous: page === 0 ? lastPage : page - 1
      });

      return video;
    }
  },

  renderTemplate: function() {
    this.render({ outlet: "video" });
  }
});
