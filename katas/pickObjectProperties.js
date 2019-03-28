const R = require('ramda');
const isArrayOfType = require('../helpers/isArrayOfType');

/*******************************************
  RAMDA
 ******************************************/
const ramdaFn = (properties, objects) => {
  if (
    !isArrayOfType('string', properties) ||
    !isArrayOfType('object', objects)
  ) {
    return [];
  }

  return R.project(properties, objects);
};

/*******************************************
  NATIVE
 ******************************************/
const pluck = (properties, object) =>
  Object.entries(object).reduce(
    (acc, [key, value]) => ({
      ...acc,
      ...(properties.includes(key) && { [key]: value })
    }),
    {}
  );

// This is equivalent to Ramda's `project` function
const nativeFn = (properties, objects) => {
  if (
    !isArrayOfType('string', properties) ||
    !isArrayOfType('object', objects)
  ) {
    return [];
  }

  return objects.map(object => pluck(properties, object));
};

module.exports = {
  ramdaFn,
  nativeFn
};
