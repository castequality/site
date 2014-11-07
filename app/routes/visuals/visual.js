import Ember from "ember";

export default Ember.Route.extend({
  model: function(params) {
    var visuals = this.modelFor("visuals").visuals;

    return visuals.findBy("id", params.visual_id);
  },

  renderTemplate: function() {
    this.render({ outlet: "visual" });
  }
});
