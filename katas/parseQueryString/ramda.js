const R = require('ramda');

const queryString = '?page=2&pageSize=10&total=203';
const parseQueryString = R.pipe(
  R.tail, // Remove the '?'
  R.split('&'), // ['page=2', 'pageSize=10'...]
  R.map(R.split('=')), // [['page', '2'], ['pageSize', '10']...]
  R.fromPairs // final object
);

const result = parseQueryString(queryString);
console.log(result);
