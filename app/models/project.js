import DS from "ember-data";

var attr = DS.attr;

export default DS.Model.extend({
  pages: attr("object"),
  numeral: attr("string"),
  slug: attr("string")
});
