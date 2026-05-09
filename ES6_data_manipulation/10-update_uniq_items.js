/* eslint-disable linebreak-style */
const updateUniqueItems = (aMap) => {
  if (Object.getPrototypeOf(aMap) !== Map.prototype) throw Error('Cannot process');

  aMap.forEach((value, key) => {
    if (val === 1) {
      aMap.set(key, 100);
    }
  });

  return aMap;
};

export default updateUniqueItems;
