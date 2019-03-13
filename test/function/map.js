import test from 'tape';
import map from '../../src/function/map';

test('Assertions with map.', (assert) => {
  const expected = [2, 4, 6];
  const actual = map([1, 2, 3], (item) => item * 2);

  assert.deepEqual(actual, expected, '[1, 2, 3] should map to [2, 4, 6]');

  assert.end();
});