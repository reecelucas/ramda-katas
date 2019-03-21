const cars = [
  {
    name: 'suv',
    doors: 4,
    mpg: 19
  },
  {
    name: 'sedan',
    doors: 4,
    mpg: 30
  },
  {
    name: 'hybrid',
    doors: 4,
    mpg: 37
  },
  {
    name: 'compact',
    doors: 2,
    mpg: 32
  }
];

const goodMilage = car => car.mpg >= 30;
const fourDoors = car => car.doors === 4;
const allPass = (predicates, item) =>
  predicates.every(predicate => predicate(item)) ? item : false;

const result = cars.filter(car => allPass([goodMilage, fourDoors], car));
console.log(result);
