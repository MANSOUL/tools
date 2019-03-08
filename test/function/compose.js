import test from 'tape';
import compose from '../../src/function/compose';

test('Assertions with compose.', (assert) => {
  const add = (a, b) => a + b;
  const multipy2 = (a) => a * 2;

  assert.equal(compose(multipy2, add)(1, 2), 6, 'compose add and multiply2, and pass 1, 2 should equal to 6.');

  assert.end();
});