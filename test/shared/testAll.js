const test = require('tape');

module.exports = (desc, fns, callback) => {
  test(desc, assert => {
    for (const fn of fns) {
      callback(fn, fn.name, assert);
    }

    assert.end();
  });
};
