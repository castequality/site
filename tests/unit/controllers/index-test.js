import { test, moduleFor } from 'ember-qunit';

moduleFor('controller:index');

test('#product - selects a random active product', function(assert) {
  var controller = this.subject({
    products: [
      { id: 1, status: "active" },
      { id: 2, status: "inactive" }
    ]
  });
  assert.equal(controller.get('product.id'), 1);
});
