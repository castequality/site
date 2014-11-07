import Ember from "ember";

export default Ember.Component.extend({
  didInsertElement: function() {
    this.$().find("iframe").attr("width", 775).attr("height", 432);
  }
});
