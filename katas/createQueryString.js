const R = require('ramda');
const isPlainObject = require('../helpers/isPlainObject');

/*******************************************
  RAMDA
 ******************************************/
const isValidArg = arg => isPlainObject(arg) && R.not(R.isEmpty(arg));
const getDefault = R.always('');
const createQs = R.compose(
  R.concat('?'),
  R.join('&'),
  R.map(R.join('=')),
  R.toPairs
);

const ramdaFn = R.ifElse(isValidArg, createQs, getDefault);

/*******************************************
  NATIVE
 ******************************************/
const nativeFn = obj => {
  if (!isPlainObject(obj) || Object.keys(obj).length === 0) {
    return '';
  }

  return Object.entries(obj)
    .map(entry => entry.join('='))
    .join('&')
    .replace(/^/, '?'); // Add '?' to the start of the string
};

module.exports = {
  nativeFn,
  // Create a named function from the ramda function
  ramdaFn: (...args) => ramdaFn(...args)
};
