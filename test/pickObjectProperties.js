const test = require('tape');
const pickObjectProperties = require('../katas/pickObjectProperties/native');

test('pickObjectProperties should return an empty array for invalid types', assert => {
  const properties = ['name', 'price'];
  const objects = [{ name: 'Jeans', price: 80, category: 'clothes' }];

  assert.deepEquals(pickObjectProperties(), []);

  assert.deepEquals(pickObjectProperties(undefined, objects), []);
  assert.deepEquals(pickObjectProperties(0, objects), []);
  assert.deepEquals(pickObjectProperties(123, objects), []);
  assert.deepEquals(pickObjectProperties(false, objects), []);
  assert.deepEquals(pickObjectProperties(true, objects), []);
  assert.deepEquals(pickObjectProperties('string', objects), []);
  assert.deepEquals(pickObjectProperties([], objects), []);
  assert.deepEquals(pickObjectProperties([1, 2, 3], objects), []);
  assert.deepEquals(pickObjectProperties({}, objects), []);
  assert.deepEquals(pickObjectProperties(() => {}, objects), []);

  assert.deepEquals(pickObjectProperties(properties, undefined), []);
  assert.deepEquals(pickObjectProperties(properties, 0), []);
  assert.deepEquals(pickObjectProperties(properties, 123), []);
  assert.deepEquals(pickObjectProperties(properties, false), []);
  assert.deepEquals(pickObjectProperties(properties, true), []);
  assert.deepEquals(pickObjectProperties(properties, 'string'), []);
  assert.deepEquals(pickObjectProperties(properties, []), []);
  assert.deepEquals(pickObjectProperties(properties, [1, 2, 3]), []);
  assert.deepEquals(pickObjectProperties(properties, {}), []);
  assert.deepEquals(pickObjectProperties(properties, () => {}), []);
  assert.end();
});

test('pickObjectProperties should return an array of objects with the specified properties', assert => {
  const objects = [
    { name: 'Jeans', price: 80, category: 'clothes' },
    { name: 'Hoodie', price: 60, category: 'clothes' }
  ];
  const expected = [
    { name: 'Jeans', price: 80 },
    { name: 'Hoodie', price: 60 }
  ];
  const actual = pickObjectProperties(['name', 'price'], objects);

  assert.deepEquals(actual, expected);
  assert.end();
});
