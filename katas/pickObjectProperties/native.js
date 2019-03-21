const products = [
  { name: 'Jeans', price: 80, category: 'clothes' },
  { name: 'Hoodie', price: 60, category: 'clothes' },
  { name: 'Jacket', price: 120, category: 'clothes' },
  { name: 'Cards', price: 35, category: 'games' },
  { name: 'iPhone', price: 649, category: 'electronics' },
  { name: 'Sauce Pan', price: 100, category: 'housewares' }
];

const pluck = (properties, object) =>
  Object.entries(object).reduce((acc, [key, value]) => {
    return {
      ...acc,
      ...(properties.includes(key) && { [key]: value })
    };
  }, {});

const project = (properties, objects) =>
  objects.map(object => pluck(properties, object));

const result = project(['name', 'price'], products);
console.log(result);
