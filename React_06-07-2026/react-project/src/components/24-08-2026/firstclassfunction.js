
const greet = function () {
  console.log("Hello");
};

greet();
function execute(callback) {
  callback();
}

execute(function () {
  console.log("Running callback");
});
function outer() {
  return function () {
    console.log("Inner function");
  };
}

const result = outer();

result();