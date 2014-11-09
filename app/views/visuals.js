import Ember from "ember";
import Scrollable from "../mixins/scrollable";

var scheduleOnce = Ember.run.scheduleOnce;

export default Ember.View.extend(Scrollable, {
  buffer: 300,

  didInsertElement: function() {
    this.scheduleMasonry();
  },

  scheduleMasonry: function() {
    scheduleOnce("afterRender", this, this.applyMasonry);
  }.observes("controller.visuals.length"),

  applyMasonry: function() {
    var container = this.$(".visuals");
    var masonry = container.data("masonry");

    if (masonry) {
      masonry.destroy();
    }

    container.masonry({
      gutter: 13,
      itemSelector: "article",
      transitionDuration: 0
    });

    container.imagesLoaded(function() {
      container.masonry("layout");
    });
  }
});
