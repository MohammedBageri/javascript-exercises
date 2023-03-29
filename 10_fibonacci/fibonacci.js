const fibonacci = function (index) {
  let fibon = [];
  if (index < 0) {
    return "OOPS";
  }

  for (let i = 0; i < +index; i++) {
    if (fibon.length == 0 || fibon.length == 1) {
      fibon.push(1);
      continue;
    }
    fibon.push(fibon[fibon.length - 1] + fibon[fibon.length - 2]);
  }
  return fibon[index - 1];
};

// Do not edit below this line
module.exports = fibonacci;
