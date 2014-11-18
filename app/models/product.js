import Ember from "ember";
import DS from "ember-data";

var alias = Ember.computed.alias;
var attr = DS.attr;

export default DS.Model.extend({
  images: attr("object"),
  image: alias("images.firstObject.secure_url"),

  status: attr("string")
});
