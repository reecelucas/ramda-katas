const R = require('ramda');
const isValidQueryString = require('../helpers/isValidQueryString');

/*******************************************
  RAMDA
 ******************************************/
const isValidQs = R.curry(isValidQueryString);
const getDefault = R.always({});
const parseQs = R.pipe(
  R.tail, // Remove the '?'
  R.split('&'), // ['page=2', 'pageSize=10'...]
  R.map(R.split('=')), // [['page', '2'], ['pageSize', '10']...]
  R.fromPairs // final object
);

const ramdaFn = R.ifElse(isValidQs, parseQs, getDefault);

/*******************************************
  NATIVE
 ******************************************/
const nativeFn = qs => {
  if (!isValidQueryString(qs)) {
    return {};
  }

  const [_head, ...tail] = qs.split('');

  return tail
    .join('')
    .split('&')
    .reduce((obj, pair) => {
      const [key, val] = pair.split('=');
      return {
        ...obj,
        [key]: val
      };
    }, {});
};

module.exports = {
  nativeFn,
  // Create a named function from the ramda function
  ramdaFn: (...args) => ramdaFn(...args)
};
