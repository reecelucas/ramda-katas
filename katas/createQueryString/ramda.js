const R = require('ramda');
const isPlainObject = require('../../helpers/isPlainObject');

const isValidArg = arg => isPlainObject(arg) && R.not(R.isEmpty(arg));
const getDefault = R.always('');
const createQs = R.compose(
  R.concat('?'),
  R.join('&'),
  R.map(R.join('=')),
  R.toPairs
);

const createQueryString = R.ifElse(isValidArg, createQs, getDefault);

module.exports = createQueryString;
