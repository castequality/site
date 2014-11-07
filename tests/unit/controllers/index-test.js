import {
  moduleFor,
  test
} from "ember-qunit";

moduleFor("controller:index", "IndexController", {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test("#product - selects a random active product", function() {
  var controller = this.subject({
    products: [
      { id: 1, status: "active" },
      { id: 2, status: "inactive" }
    ]
  });
  equal(controller.get("product.id"), 1);
});
