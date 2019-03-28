const isArray = arr => arr && Array.isArray(arr);

module.exports = (type, arr) =>
  isArray(arr) && arr.length && arr.every(item => typeof item === type);
