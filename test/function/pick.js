import test from 'tape';
import pick from '../../src/function/pick';

test('Assertions with pick.', (assert) => {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  };

  assert.deepEqual(pick(obj, 'a', 'c'), { a: 1, c: 3 }, 'pick a, c from {a: 1, b: 2, c: 3}');

  assert.end();
});