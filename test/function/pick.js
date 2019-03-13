import test from 'tape';
import pick from '../../src/function/pick';

test('Assertions with pick.', (assert) => {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  };

  assert.equal(pick(obj, 'a', 'c').toString(), ({ a: 1, c: 3 }).toString(), 'pick a, c from {a: 1, b: 2, c: 3}');

  assert.end();
});