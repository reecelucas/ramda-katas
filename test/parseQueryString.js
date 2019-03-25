const test = require('tape');
const nativeFn = require('../katas/parseQueryString/native');
const ramdaFn = require('../katas/parseQueryString/ramda');

const getPrintFriendlyValue = val =>
  !val && typeof val === 'string' ? 'empty string' : val;

test('parseQueryString returns an empty object when passed an invalid query string', assert => {
  const invalidArgs = [
    undefined,
    null,
    NaN,
    0,
    false,
    '',
    'key=value&key=value',
    '?key:value'
  ];

  for (const arg of invalidArgs) {
    const actualNative = nativeFn(arg);
    const actualRamda = ramdaFn(arg);

    assert.deepEquals(
      actualNative,
      {},
      `Native function handles ${getPrintFriendlyValue(arg)} correctly`
    );
    assert.deepEquals(
      actualRamda,
      {},
      `Ramda function handles ${getPrintFriendlyValue(arg)} correctly`
    );
  }

  assert.end();
});

test('parseQueryString returns an object when passed a valid query string', assert => {
  const qs = '?page=2&pageSize=10&total=203';
  const expected = {
    page: '2',
    pageSize: '10',
    total: '203'
  };

  const actualNative = nativeFn(qs);
  const actualRamda = ramdaFn(qs);

  assert.deepEquals(
    actualNative,
    expected,
    'Native function returns the expected queries object'
  );
  assert.deepEquals(
    actualRamda,
    expected,
    'Ramda function returns the expected queries object'
  );
  assert.end();
});
