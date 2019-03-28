const testAll = require('./shared/testAll');
const { nativeFn, ramdaFn } = require('../katas/pickObjectProperties');

testAll(
  'pickObjectProperties should return an array of objects with the specified properties',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    const objects = [
      { name: 'Jeans', price: 80, category: 'clothes' },
      { name: 'Hoodie', price: 60, category: 'clothes' }
    ];
    const actual = fn(['name', 'price'], objects);
    const expected = [
      { name: 'Jeans', price: 80 },
      { name: 'Hoodie', price: 60 }
    ];

    assert.deepEquals(actual, expected, `${name} returns expected result`);
  }
);

testAll(
  'pickObjectProperties should return an empty array for invalid types',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    const properties = ['name', 'price'];
    const objects = [{ name: 'Jeans', price: 80, category: 'clothes' }];

    assert.deepEquals(fn(), [], `${name} handles no args`);
    assert.deepEquals(
      fn(properties, properties),
      [],
      `${name} handles string array`
    );
    assert.deepEquals(
      fn(properties, undefined),
      [],
      `${name} handles undefined`
    );
    assert.deepEquals(fn(NaN, objects), [], `${name} handles NaN`);
    assert.deepEquals(fn(0, objects), [], `${name} handles 0`);
    assert.deepEquals(fn(123, objects), [], `${name} handles 123`);
    assert.deepEquals(fn(true, objects), [], `${name} handles true`);
    assert.deepEquals(fn(properties, 'string'), [], `${name} handles string`);
    assert.deepEquals(fn([], objects), [], `${name} handles empty array`);
    assert.deepEquals(fn(properties, [1, 2, 3]), [], `${name} handles`);
    assert.deepEquals(fn({}, objects), [], `${name} handles object`);
    assert.deepEquals(fn(() => {}, objects), [], `${name} handles function`);
  }
);
