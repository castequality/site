import { test, moduleForModel } from 'ember-qunit';

moduleForModel('instagram');

test('#image returns the low resolution image', function(assert) {
  var model = this.subject({
    images: {
      low_resolution: { url: "instagram.jpg" }
    }
  });

  assert.equal(model.get('image'), 'instagram.jpg');
});
