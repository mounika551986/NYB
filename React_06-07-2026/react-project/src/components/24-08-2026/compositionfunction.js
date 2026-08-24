function compose(first, second) {
  return function (value) {
    return second(first(value));
  };
}

function double(number) {
  return number * 2;
}

function addTen(number) {
  return number + 10;
}

const combined = compose(double, addTen);

console.log(combined(5));