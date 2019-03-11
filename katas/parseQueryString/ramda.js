const R = require('ramda');

const queryString = '?page=2&pageSize=10&total=203';
const parseQueryString = R.pipe(
  R.tail,
  R.split('&'),
  R.map(R.split('=')),
  R.fromPairs
);

const result = parseQueryString(queryString);
console.log(result);
