const isValidQueryString = qs => {
  if (typeof qs !== 'string') {
    return false;
  }

  return /^\?([\w-]+(=[\w-]*)?(&[\w-]+(=[\w-]*)?)*)?$/.test(qs);
};

module.exports = {
  isValidQueryString
};
