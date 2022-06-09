import { module, test } from 'qunit';
import { setupTest } from 'frontend-demo-two/tests/helpers';

module('Unit | Model | mandaten', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('mandaten', {});
    assert.ok(model);
  });
});
