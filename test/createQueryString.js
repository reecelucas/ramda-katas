const testAll = require('./shared/testAll');
const { nativeFn, ramdaFn } = require('../katas/createQueryString');

testAll(
  'createQueryString should return a query string',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    const input = {
      page: '2',
      pageSize: '10',
      total: '205'
    };
    const actual = fn(input);
    const expected = '?page=2&pageSize=10&total=205';

    assert.equals(actual, expected, `${name} returns expected result`);
  }
);

testAll(
  'createQueryString should return an empty string for invalid types',
  [nativeFn, ramdaFn],
  (fn, name, assert) => {
    assert.equals(fn(undefined), '', `${name} handles undefined`);
    assert.equals(fn(null), '', `${name} handles null`);
    assert.equals(fn(NaN), '', `${name} handles NaN`);
    assert.equals(fn(0), '', `${name} handles 0`);
    assert.equals(fn(123), '', `${name} handles 123`);
    assert.equals(fn(true), '', `${name} handles true`);
    assert.equals(fn('string'), '', `${name} handles string`);
    assert.equals(fn([]), '', `${name} handles []`);
    assert.equals(fn({}), '', `${name} handles {}`);
    assert.equals(fn(() => {}), '', `${name} handles function`);
  }
);
