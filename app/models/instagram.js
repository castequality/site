import DS from "ember-data";
import Ember from "ember";

var alias = Ember.computed.alias;
var attr = DS.attr;

export default DS.Model.extend({
  images: attr("object"),
  image: alias("images.low_resolution.url"),
  link: attr("string")
});
