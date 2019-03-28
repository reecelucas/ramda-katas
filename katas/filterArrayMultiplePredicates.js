const R = require('ramda');
const isArrayOfType = require('../helpers/isArrayOfType');

/*******************************************
  RAMDA
 ******************************************/
const ramdaFn = (predicates, objects) => {
  if (
    !isArrayOfType('function', predicates) ||
    !isArrayOfType('object', objects)
  ) {
    return [];
  }

  return R.filter(R.allPass(predicates), objects);
};

/*******************************************
  NATIVE
 ******************************************/
const allPass = (predicates, item) =>
  predicates.every(predicate => predicate(item)) ? item : false;

const nativeFn = (predicates, objects) => {
  if (
    !isArrayOfType('function', predicates) ||
    !isArrayOfType('object', objects)
  ) {
    return [];
  }

  return objects.filter(item => allPass(predicates, item));
};

module.exports = {
  nativeFn,
  ramdaFn
};
