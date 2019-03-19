import test from 'tape';
import flat from '../../src/function/flat';

test('Assertions with flat.', (assert) => {
  const arr = [1, [2, [3, [4, [5, [6, 7]]]]]];

  assert.deepEqual(flat(arr), [1, 2, 3, 4, 5, 6, 7], 'flat array.');

  assert.end();
});