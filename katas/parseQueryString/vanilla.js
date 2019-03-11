const queryString = '?page=2&pageSize=10&total=203';
const parseQueryString = qs => {
  const [_head, ...tail] = qs.split(''); // eslint-disable-line no-unused-vars

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

const result = parseQueryString(queryString);
console.log(result);
