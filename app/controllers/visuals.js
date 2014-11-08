import Ember from "ember";

export default Ember.ObjectController.extend({
  queryParams: ["video"],
  video: 0,

  visualsBySource: function() {
    var results = [];
    var visuals = this.get("visuals");

    visuals.forEach(function(visual) {
      var source = visual.get("source");
      var group = results.findBy("source", source);

      if(!group) {
        group = Ember.Object.create({
          source: source,
          content: []
        });
        results.pushObject(group);
      }

      group.get("content").pushObject(visual);
    });

    return results;
  }.property("model.visuals.@each.source")
});
