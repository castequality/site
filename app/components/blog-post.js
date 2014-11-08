import Ember from "ember";

export default Ember.Component.extend({
  classNameBindings: [":post"],
  tagName: "article",

  didInsertElement: function() {
    this.$().find("iframe").attr("width", 775).attr("height", 432);
  }
});
