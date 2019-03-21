const qsObj = {
  page: '2',
  pageSize: '10',
  total: '205'
};

const createQueryString = obj =>
  Object.entries(obj)
    .map(entry => entry.join('='))
    .join('&')
    .replace(/^/, '?'); // Add '?' to the start of the string

const result = createQueryString(qsObj);
console.log(result);
