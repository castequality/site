import Ember from "ember";

export default Ember.Component.extend({
  classNameBindings: [":links"],
  tagName: "aside",

  didInsertElement: function() {
    var container = this.$();

    container.waypoint(function(direction) {
      if (direction === "down") {
        container.addClass("fixed");
      } else {
        container.removeClass("fixed");
      }
    });
  }
});
