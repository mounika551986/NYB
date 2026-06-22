//Create examples using Promise.all(), Promise.race(), Promise.allSettled(), and Promise.any().

function api1() {
  return new Promise(resolve =>
    setTimeout(() => resolve("Users API Success"), 1000)
  );
}

function api2() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("Posts API Failed"), 2000)
  );
}

function api3() {
  return new Promise(resolve =>
    setTimeout(() => resolve("Comments API Success"), 3000)
  );
}
//1. Promise.all()

//Waits for all promises to succeed.
Promise.all([
  api1(),
  api2(),
  api3()
])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.log("Error:", error); //Since api2() rejects, Promise.all() rejects immediately.
  });

  //2. Promise.race()

//Returns the first promise to settle (resolve or reject).
Promise.race([
  api1(),
  api2(),
  api3()
])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log("Error:", error);   //api1() finishes first, so it wins the race.
  });   

  //Race Example with Rejection First

  const fastError = new Promise((_, reject) =>
  setTimeout(() => reject("Server Down"), 500)
);

Promise.race([
  fastError,
  api1(),
  api3()
])
  .catch(error => console.log(error));

  //3. Promise.allSettled()
  //Waits for all promises and returns every result.
  Promise.allSettled([
  api1(),
  api2(),
  api3()
]).then(results => {
  console.log(results);   //Useful when you need both successes and failures.
});
//4. Promise.any()
//Returns the first fulfilled promise.
Promise.any([
  api1(),
  api2(),
  api3()
])
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error); //api2() fails, but Promise.any() ignores failures and waits for a success.
  });

  //Any Example Where All Fail

  Promise.any([
  Promise.reject("Error 1"),
  Promise.reject("Error 2")
])
.catch(error => {
  console.log(error.errors);
});
//Compare the behavior and use cases of each Promise method.

//1. Promise.all()
//Behavior
//Runs all promises concurrently.
//Resolves only when all promises succeed.
//Rejects immediately if any promise fails.

async function run() {
  const result = await Promise.all([
    Promise.resolve("A"),
    Promise.resolve("B")
  ]);

  console.log(result);
}

run();
//2. Promise.race()
//Behavior
//Returns the first promise that settles.
//The winner can be either fulfilled or rejected.
async function test(){
const result1 = await Promise.race([
  new Promise(resolve => setTimeout(() => resolve("A"), 1000)),
  new Promise(resolve => setTimeout(() => resolve("B"), 2000)),

]);

console.log(result1);
}
test();
//3. Promise.allSettled()
//Behavior
//Waits for every promise.
//Returns both successes and failures.
//Never rejects because one promise failed.
async function runs(){


const result = await Promise.allSettled([
  Promise.resolve("A"),
  Promise.reject("Error"),
  Promise.resolve("C")
]);

console.log(result)
}
runs()
//4. Promise.any()
//Behavior
//Returns the first fulfilled promise.
//Ignores rejected promises.
//Rejects only if all promises fail.
async function tests(){


const result = await Promise.any([
  Promise.reject("Server 1 Down"),
  Promise.resolve("Server 2 Success"),
  Promise.resolve("Server 3 Success")
]);

console.log(result);
}
tests();
//Understand Promise states and execution flow.

//A Promise is an object that represents the eventual result of an asynchronous operation.
//A Promise can be in one of three states: pending,fullfiled, rejected
//1. Pending -The operation is still running.
//2. Fulfilled (Resolved) - Operation completed successfully.
//3. Rejected- Operation failed.

//Execution Flow Example
console.log("Start");

const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve("Done");
  }, 1000);
});

promise.then(result => {
  console.log(result);
});

console.log("End");

