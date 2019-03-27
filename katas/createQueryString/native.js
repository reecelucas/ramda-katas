const isPlainObject = require('../../helpers/isPlainObject');

const createQueryString = obj => {
  if (!isPlainObject(obj) || Object.keys(obj).length === 0) {
    return '';
  }

  return Object.entries(obj)
    .map(entry => entry.join('='))
    .join('&')
    .replace(/^/, '?'); // Add '?' to the start of the string
};

module.exports = createQueryString;
