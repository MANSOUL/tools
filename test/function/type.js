import test from 'tape';
import type from '../../src/function/type';

test('Assertions with type.', (assert) => {

  assert.equal(type({}, 'object'), true, '{} is object.');
  assert.equal(type([], 'array'), true, '[] is array.');
  assert.equal(type(1, 'number'), true, '{} is array.');
  assert.equal(type('', 'string'), true, '"" is string.');
  assert.equal(type(null, 'null'), true, 'null is null.');
  assert.equal(type(undefined, 'undefined'), true, 'undefined is undefined.');

  assert.end();
});