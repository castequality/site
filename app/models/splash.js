import DS from "ember-data";
import Ember from "ember";

var attr = DS.attr;
var alias = Ember.computed.alias;

export default DS.Model.extend({
  isVideo: true,
  url: alias("videoUrl"),
  videoUrl: attr("string")
});
