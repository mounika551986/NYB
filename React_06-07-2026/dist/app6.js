"use strict";

var multiply = function multiply(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;
  return a * b;
};
console.log(multiply(10));