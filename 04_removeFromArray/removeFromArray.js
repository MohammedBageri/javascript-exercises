const removeFromArray = function (array, ...arg) {
  let newArray = [];
  newArray = array.filter((e) => !(arg.includes(e)))
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
