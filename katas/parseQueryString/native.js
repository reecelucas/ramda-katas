const isValidQueryString = require('../../helpers/isValidQueryString');

const parseQueryString = qs => {
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

module.exports = parseQueryString;
