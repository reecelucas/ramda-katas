const isArray = arr => arr && Array.isArray(arr);
const isArrayOfType = (arr, type) =>
  isArray(arr) && arr.length && arr.every(item => typeof item === type);

const pluck = (properties, object) =>
  Object.entries(object).reduce(
    (acc, [key, value]) => ({
      ...acc,
      ...(properties.includes(key) && { [key]: value })
    }),
    {}
  );

// This is equivalent to Ramda's `project` function
module.exports = (properties, objects) => {
  if (
    !isArrayOfType(properties, 'string') ||
    !isArrayOfType(objects, 'object')
  ) {
    return [];
  }

  return objects.map(object => pluck(properties, object));
};
