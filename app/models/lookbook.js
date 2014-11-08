import DS from "ember-data";
/* global _ */

var attr = DS.attr;

var Lookbook = DS.Model.extend({
  isVideo: attr("boolean"),
  pages: attr("object")
});

function loadPages(season, numPages) {
  return _.times(numPages, function(index) {
    var page = index + 1;
    var pageUrl = "/lookbooks/" + season + "/" + page + ".jpg";
    return { url: pageUrl };
  });
}

Lookbook.reopenClass({
  FIXTURES: [{
    id: "fall2014",
    pages: loadPages("fall2014", 5)
  }]
});

export default Lookbook;
