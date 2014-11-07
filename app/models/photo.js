import DS from "ember-data";

var attr = DS.attr;
var belongsTo = DS.belongsTo;

export default DS.Model.extend({
  project: belongsTo("project"),
  url: attr("string")
});
