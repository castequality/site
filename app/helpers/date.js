import Ember from "ember";
/* global moment */

export default function(date) {
  var formatted = moment(date).format("LL");
  return new Ember.Handlebars.SafeString("<time>" + formatted + "</time>");
}
