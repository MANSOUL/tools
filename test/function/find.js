import test from 'tape';
import find from '../../src/function/find';

test('Assertions with find.', (assert) => {
  const o1 = { a: 1, b: 2 };
  const o2 = { a: 3, b: 4 };
  const o3 = { a: 5, b: 6 };
  const arr = [o1, o2, o3];

  assert.equal(find(arr, { a: 1, b: 2 }), o1, 'find object from an array.');

  assert.end();
});