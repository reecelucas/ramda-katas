module.exports = qs => {
  if (typeof qs !== 'string') {
    return false;
  }

  return /^\?([\w-]+(=[\w-]*)?(&[\w-]+(=[\w-]*)?)*)?$/.test(qs);
};
