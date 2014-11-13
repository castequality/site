import Ember from "ember";

export default Ember.ObjectController.extend({
  queryParams: ["page"],
  page: 0
});
