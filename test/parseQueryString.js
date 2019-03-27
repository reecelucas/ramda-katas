const test = require('tape');
const nativeFn = require('../katas/parseQueryString/native');
const ramdaFn = require('../katas/parseQueryString/ramda');

test('native parseQueryString should return an empty object for invalid types', assert => {
  assert.deepEquals(nativeFn(undefined), {});
  assert.deepEquals(nativeFn(null), {});
  assert.deepEquals(nativeFn(NaN), {});
  assert.deepEquals(nativeFn(0), {});
  assert.deepEquals(nativeFn(123), {});
  assert.deepEquals(nativeFn(false), {});
  assert.deepEquals(nativeFn(true), {});
  assert.deepEquals(nativeFn({}), {});
  assert.deepEquals(nativeFn([]), {});
  assert.deepEquals(nativeFn([1, 2, 3]), {});
  assert.deepEquals(nativeFn(() => {}), {});
  assert.deepEquals(nativeFn(''), {});
  assert.deepEquals(nativeFn('?key:value'), {});
  assert.deepEquals(nativeFn('key=value&key=value'), {});
  assert.end();
});

test('ramda parseQueryString should return an empty object for invalid types', assert => {
  assert.deepEquals(ramdaFn(undefined), {});
  assert.deepEquals(ramdaFn(null), {});
  assert.deepEquals(ramdaFn(NaN), {});
  assert.deepEquals(ramdaFn(0), {});
  assert.deepEquals(ramdaFn(123), {});
  assert.deepEquals(ramdaFn(false), {});
  assert.deepEquals(ramdaFn(true), {});
  assert.deepEquals(ramdaFn({}), {});
  assert.deepEquals(ramdaFn([]), {});
  assert.deepEquals(ramdaFn([1, 2, 3]), {});
  assert.deepEquals(ramdaFn(() => {}), {});
  assert.deepEquals(ramdaFn(''), {});
  assert.deepEquals(ramdaFn('?key:value'), {});
  assert.deepEquals(ramdaFn('key=value&key=value'), {});
  assert.end();
});

test('native parseQueryString should return an object with string values', assert => {
  const qs = '?page=2&pageSize=10&total=203';
  const expected = {
    page: '2',
    pageSize: '10',
    total: '203'
  };
  const actual = nativeFn(qs);

  assert.deepEquals(actual, expected);
  assert.end();
});

test('ramda parseQueryString should return an object with string values', assert => {
  const qs = '?size=10&color=blue&price=200';
  const expected = {
    size: '10',
    color: 'blue',
    price: '200'
  };
  const actual = ramdaFn(qs);

  assert.deepEquals(actual, expected);
  assert.end();
});
