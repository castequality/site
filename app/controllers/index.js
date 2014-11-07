import Ember from "ember";
/* global _ */

export default Ember.ObjectController.extend({
  activeProducts: Ember.computed.filterBy("products", "status", "active"),
  product: function() {
    return _.sample(this.get("activeProducts"));
  }.property("activeProducts.[]")
});
