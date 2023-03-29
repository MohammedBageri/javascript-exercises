const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arrayOfNo) {
  let sum = 0;
  for (let i = 0; i < arrayOfNo.length; i++) {
    sum += arrayOfNo[i];
  }
  return sum;
};

const multiply = function (arrayOfNo) {
  let mul = 1;
  for (let i = 0; i < arrayOfNo.length; i++) {
    mul *= arrayOfNo[i];
  }
  return mul;
};

const power = function (num, power) {
  let mul = 1;
  for (let i = 0; i < power; i++) {
    mul *= num;
  }
  return mul;
};

const factorial = function (num) {
  if (num == 0) {
    return 1;
  }
  let mul = 1;
  for (let i = 1; i <= num; i++) {
    mul *= i;
  }
  return mul;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
