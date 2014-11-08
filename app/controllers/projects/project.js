import Ember from "ember";

export default Ember.ObjectController.extend({
  queryParams: ["page"],
  page: 0,

  pages: function() {
    var photos = this.get("model.photos");
    var videoUrl = this.get("model.videoUrl");

    var pages = photos.map(function(photo) {
      return photo;
    });

    pages.pushObject({
      isVideo: true,
      url: videoUrl
    });

    return pages;
  }.property("model.photos.[]", "model.videoUrl")
});
