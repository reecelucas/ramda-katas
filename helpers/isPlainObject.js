module.exports = val =>
  val && typeof val === 'object' && val.constructor === Object;
