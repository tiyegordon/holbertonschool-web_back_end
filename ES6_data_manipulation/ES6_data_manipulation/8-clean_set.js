/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
const cleanSet = (aSet, startString) => {
  const arr = Array.from(aSet);
  const newArr = [];

  if (startString.length === 0) {
    return '';
  }

  for (const i of arr) {
    const str = i.slice(0, startString.length);

    if (str === startString) {
      newArr.push(i);
    }
  }

  return newArr.toString().split(',').join('-').split(startString)
    .toString()
    .split(',')
    .join('');
};
<<<<<<< HEAD:ES6_data_manipulation/8-clean_set.js
=======
export default cleanSet;
>>>>>>> 96c1743 (edited):8-clean_set.js
