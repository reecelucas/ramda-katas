const R = require('ramda');
const isValidQueryString = require('../../helpers/isValidQueryString');

const isValidQs = R.curry(isValidQueryString);
const getDefault = R.always({});
const parseQs = R.pipe(
  R.tail, // Remove the '?'
  R.split('&'), // ['page=2', 'pageSize=10'...]
  R.map(R.split('=')), // [['page', '2'], ['pageSize', '10']...]
  R.fromPairs // final object
);

const parseQueryString = R.ifElse(isValidQs, parseQs, getDefault);

module.exports = parseQueryString;
