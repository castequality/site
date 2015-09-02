import Ember from "ember";
/* global moment */

export function date([ value ]) {
  var formatted = moment(value).format("LL");
  return new Ember.Handlebars.SafeString("<time>" + formatted + "</time>");
}

export default Ember.Helper.helper(date);
