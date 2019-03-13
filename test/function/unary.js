import test from 'tape';
import unary from '../../src/function/unary';

test('Assertions with unary.', (assert) => {
  const unaryParseInt = unary(parseInt);

  assert.deepEqual([1, 2, 3].map(unaryParseInt), [1, 2, 3], 'unary parseInt');

  assert.end();
});