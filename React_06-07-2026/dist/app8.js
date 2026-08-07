"use strict";

var total = function total() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  return numbers.reduce(function (sum, num) {
    return sum + num;
  }, 0);
};
console.log(total(10, 20, 30, 40));