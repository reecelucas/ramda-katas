const testAll = require('./shared/testAll');
const { nativeFn, ramdaFn } = require('../katas/filterArrayMultiplePredicates');

testAll(
  'filterArrayMultiplePredicates should return an array of items that satisify all predicates',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    const goodMilage = item => item.mpg >= 30;
    const fourDoors = item => item.doors === 4;

    const input = [
      {
        doors: 4,
        mpg: 19
      },
      {
        doors: 4,
        mpg: 30
      }
    ];
    const actual = fn([goodMilage, fourDoors], input);
    const expected = [{ doors: 4, mpg: 30 }];

    assert.deepEquals(actual, expected, `${name} returns expected result`);
  }
);

testAll(
  'filterArrayMultiplePredicates should return an empty array for invalid types',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    const predicates = [() => {}];
    const objects = [{ name: 'suv', doors: 4 }];

    assert.deepEquals(fn(), []);
    assert.deepEquals(
      fn(predicates, predicates),
      [],
      `${name} handles invalid arrays`
    );
    assert.deepEquals(fn(undefined, objects), [], `${name} handles undefined`);
    assert.deepEquals(fn(predicates, null), [], `${name} handles null`);
    assert.deepEquals(fn(1, objects), [], `${name} handles 1`);
    assert.deepEquals(fn(false, objects), [], `${name} handles false`);
    assert.deepEquals(fn(predicates, true), [], `${name} handles true`);
    assert.deepEquals(fn(predicates, {}), [], `${name} handles object`);
    assert.deepEquals(fn([], objects), [], `${name} handles empty array`);
    assert.deepEquals(
      fn([1, 2, 3], objects),
      [],
      `${name} handles number array`
    );
    assert.deepEquals(fn(() => {}, objects), [], `${name} handles function`);
    assert.deepEquals(fn('string', objects), [], `${name} handles string`);
    assert.deepEquals(
      fn(predicates, [[{ a: 'a' }]]),
      [],
      `${name} handles multidimensional array`
    );
  }
);
