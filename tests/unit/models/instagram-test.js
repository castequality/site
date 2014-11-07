import {
  moduleForModel,
  test
} from "ember-qunit";

moduleForModel("instagram", "Instagram", {
});

test("#image returns the low resolution image", function() {
  var model = this.subject({
    images: {
      low_resolution: { url: "instagram.jpg" }
    }
  });

  equal(model.get("image"), "instagram.jpg");
});
