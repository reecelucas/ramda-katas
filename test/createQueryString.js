const test = require('tape');
const nativeFn = require('../katas/createQueryString/native');
const ramdaFn = require('../katas/createQueryString/ramda');

test('native createQueryString should return empty string for invalid types', assert => {
  assert.equals(nativeFn(undefined), '');
  assert.equals(nativeFn(null), '');
  assert.equals(nativeFn(NaN), '');
  assert.equals(nativeFn(0), '');
  assert.equals(nativeFn(123), '');
  assert.equals(nativeFn(false), '');
  assert.equals(nativeFn(true), '');
  assert.equals(nativeFn('string'), '');
  assert.equals(nativeFn([]), '');
  assert.equals(nativeFn([1, 2, 3]), '');
  assert.equals(nativeFn({}), '');
  assert.equals(nativeFn(() => {}), '');
  assert.end();
});

test('ramda createQueryString should return an empty string for invalid types', assert => {
  assert.equals(ramdaFn(undefined), '');
  assert.equals(ramdaFn(null), '');
  assert.equals(ramdaFn(NaN), '');
  assert.equals(ramdaFn(0), '');
  assert.equals(ramdaFn(123), '');
  assert.equals(ramdaFn(false), '');
  assert.equals(ramdaFn(true), '');
  assert.equals(ramdaFn('string'), '');
  assert.equals(ramdaFn([]), '');
  assert.equals(ramdaFn([1, 2, 3]), '');
  assert.equals(ramdaFn({}), '');
  assert.equals(ramdaFn(() => {}), '');
  assert.end();
});

test('native createQueryString should return a query string', assert => {
  const obj = {
    page: '2',
    pageSize: '10',
    total: '205'
  };
  const expected = '?page=2&pageSize=10&total=205';
  const actual = nativeFn(obj);

  assert.deepEquals(actual, expected);
  assert.end();
});

test('ramda createQueryString should return a query string', assert => {
  const obj = {
    size: '2',
    color: 'blue',
    price: '55'
  };
  const expected = '?size=2&color=blue&price=55';
  const actual = ramdaFn(obj);

  assert.deepEquals(actual, expected);
  assert.end();
});
