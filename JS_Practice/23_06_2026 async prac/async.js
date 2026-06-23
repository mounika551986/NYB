//async/await is a simpler way to work with Promises. 
// It makes asynchronous code look like normal synchronous code.
function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}

async function showData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

showData();
//Async/Await Style

function step1() {
  return Promise.resolve("Step 1 Done");
}

function step2() {
  return Promise.resolve("Step 2 Done");
}

async function runSteps() {
  const result1 = await step1();
  console.log(result1);
  

  const result2 = await step2();
  console.log(result2);
}

runSteps();

//Practice error handling with Async/Await.
//When using async/await, errors are handled using try...catch.
function getData() {
  return new Promise((resolve, reject) => {
    reject("Something went wrong!");
  });
}

async function fetchData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  }
}

fetchData();
//2. Success and Error Example
function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible to vote");
    } else {
      reject("Not eligible to vote");
    }
  });
}

async function verifyAge() {
  try {
    const result = await checkAge(16);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

verifyAge();
//syntax
async function myFunction() {
  try {
    const result = await somePromise();
    console.log(result);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Done");
  }
}
//try → Code that may fail.
//await → Waits for Promise result.
//catch → Handles errors.
//finally → Runs every time (success or error).

//This is the standard way to handle errors when working with Async/Await in JavaScript.

//Create examples using Object and Array Destructuring.
//Destructuring allows you to extract values from arrays
//  or properties from objects and store them in variables easily.
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);
//object destructing
const student = {
  name: "Mounika",
  age: 22,
  city: "Hyderabad"
};

const { name, age, city } = student;

console.log(name);
console.log(age);
console.log(city);
//Syntax
// Array
const [a, b] = [10, 20];

// Object
const { name1, age1 } = {
  name1: "Mounika",
  age1: 22
};
//Implement Iterators and understand iteration protocols.
//An Iterator is an object that lets you access elements one by one.
//An iterator has a next() method that returns:
//value → Current value
//done → false if more values exist, true if iteration is complete
const fruits = ["Apple", "Banana", "Mango"];

const iterator = fruits[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//4. Iteration Protocol
//For an object to be iterable:

//It must have a Symbol.iterator method.
//The method must return an iterator object.
//The iterator object must have a next() method.
const myObject = {
  data: ["A", "B", "C"],

  [Symbol.iterator]() {
    let index = 0;
    let items = this.data;

    return {
      next() {
        if (index < items.length) {
          return {
            value: items[index++],
            done: false
          };
        }

        return { done: true };
      }
    };
  }
};

for (let item of myObject) {
  console.log(item);
}
//Create Generator functions and compare them with normal functions.
//A Generator Function can pause and resume its execution using the yield keyword.
//It is declared using function*.
function greet() {
  console.log("Hello");
  console.log("Welcome");
  console.log("Good Bye");
}

greet();
function* greet() {
  yield "Hello";
  yield "Welcome";
  yield "Good Bye";
}

const gen = greet();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//3. Simple Number Generator
function* numbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen1 = numbers();

console.log(gen1.next().value);
console.log(gen1.next().value);
console.log(gen1.next().value);
//4. Using for...of with Generator
function* colors1() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

for (let color of colors1()) {
  console.log(color);
}
// real world examples
function* tasks() {
  yield "Study";
  yield "Practice JavaScript";
  yield "Complete Project";
}

const taskList = tasks();

console.log(taskList.next().value);
console.log(taskList.next().value);
console.log(taskList.next().value);

//Build small programs combining Async/Await and Destructuring concepts.

function getStudent(){
return new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve({
            name:"sharath",
            age:"22",
            city:"hyderabad"
        })
    },1000)
})
}
async function displayStudent(){
    const{name,age,city}=await getStudent();
    console.log(name);
    console.log(age);
    console.log(city);
}
displayStudent();
//3. Array Destructuring with Async/Await
function getColors() {
  return Promise.resolve(["Red", "Green", "Blue"]);
}

async function showColors() {
  const [first, second, third] = await getColors();

  console.log(first);
  console.log(second);
  console.log(third);
}

showColors();
function getUser() {
  return Promise.resolve({
    name: "Mounika",
    city: "Hyderabad"
  });
}

async function showUser() {
  try {
    const { name, city } = await getUser();

    console.log(name);
    console.log(city);
  } catch (error) {
    console.log(error);
  }
}

showUser();
