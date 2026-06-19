//A Promise is an object that represents the eventual completion (or failure)
//  of an asynchronous operation and its resulting value.

//Promises help avoid callback hell and make asynchronous code easier to read and manage.

//Promise States

//A Promise can be in one of three states:

//Pending – Initial state, operation is still running.
//Fulfilled – Operation completed successfully.
//Rejected – Operation failed.

const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

  // Example: Simulating an API Call
  function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

fetchData()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
  // You can chain multiple .then() methods.
  Promise.resolve(5)
  .then(num => num * 2)
  .then(num => num + 10)
  .then(result => console.log(result));
  Promise.resolve("Hello")
  .then(data => console.log(data));
  //Creates a rejected promise.
  Promise.reject("Something went wrong")
  .catch(err => console.log(err));

  //Promise.all()

//Waits for all promises to succeed.
const p1 = Promise.resolve(10);
const p2 = Promise.resolve(20);
const p3 = Promise.resolve(30);

Promise.all([p1, p2, p3])
  .then(values => console.log(values));

  //Promise.race()

//Returns the first settled promise.
const p4= new Promise(res => setTimeout(() => res("First"), 1000));
const p5 = new Promise(res => setTimeout(() => res("Second"), 2000));

Promise.race([p4, p5])
  .then(result => console.log(result));
  //Promise.allSettled()

//Waits for all promises and returns their status.
Promise.allSettled([
  Promise.resolve("Success"),
  Promise.reject("Failed")
])
.then(results =>
     console.log(results));

     //Compare callbacks and Promises with examples.
//Using Callback
function add(a,b,callback){
    callback(a+b);
}
add(5,3,function(result){
    console.log(result)
});

//using promise

function add(a, b) {
  return new Promise((resolve) => {
    resolve(a + b);
  });
}

add(5, 3)
  .then(result => {
    console.log(result);
  });

//syntax - Callback Function passed as argument -(promise) Object representing future result


