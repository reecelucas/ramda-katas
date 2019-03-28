const testAll = require('./shared/testAll');
const { nativeFn, ramdaFn } = require('../katas/parseQueryString');

testAll(
  'parseQueryString should return an object with string values',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    const qs = '?page=2&pageSize=10&total=203';
    const actual = fn(qs);
    const expected = {
      page: '2',
      pageSize: '10',
      total: '203'
    };

    assert.deepEquals(actual, expected, `${name} returns expected result`);
  }
);

testAll(
  'parseQueryString should return an empty object for invalid types',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    assert.deepEquals(fn(undefined), {}, `${name} handles undefined`);
    assert.deepEquals(fn(null), {}, `${name} handles null`);
    assert.deepEquals(fn(NaN), {}, `${name} handles NaN`);
    assert.deepEquals(fn(0), {}, `${name} handles 0`);
    assert.deepEquals(fn(123), {}, `${name} handles 123`);
    assert.deepEquals(fn(true), {}, `${name} handles true`);
    assert.deepEquals(fn({}), {}, `${name} handles {}`);
    assert.deepEquals(fn([]), {}, `${name} handles []`);
    assert.deepEquals(fn(() => {}), {}, `${name} handles function`);
    assert.deepEquals(fn('?key:value'), {}, `${name} handles "?key:value"`);
  }
);
