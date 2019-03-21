const R = require('ramda');

const qsObj = {
  page: '2',
  pageSize: '10',
  total: '205'
};

const createQueryString = R.compose(
  R.concat('?'),
  R.join('&'),
  R.map(R.join('=')),
  R.toPairs
);

const result = createQueryString(qsObj);
console.log(result);
