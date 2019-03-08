import test from 'tape';
import unary from '../../src/function/unary';

test('Assertions with unary.', (assert) => {
  const unaryParseInt = unary(parseInt);

  assert.equal([1, 2, 3].map(unaryParseInt).toString(), [1, 2, 3].toString(), 'unary parseInt');

  assert.end();
});