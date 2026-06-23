// async and await are JavaScript features that make working with asynchronous operations
//  (like API calls, database queries, or reading files) look and feel like normal synchronous code.
//JavaScript works similarly. It doesn't stop everything 
// while waiting for a slow task. This is called asynchronous programming.
//Before async/await, developers often used callbacks and Promises, 
// which could become harder to read.

//async

//When you put async before a function, that function automatically returns a Promise.
async function greet() {
  return "Hello";
}

greet().then(console.log); // Hello

//await

//await can only be used inside an async function.
//"Wait for this Promise to finish, then give me the result."
function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("John");
    }, 2000);
  });
}

async function getUser() {
  const user = await fetchUser();
  console.log(user);
}

getUser();
//Destructuring in JavaScript is a shortcut for extracting values 
// from arrays or objects and storing them in variables.
//1. Array Destructuring
const fruits=['apple','banana','orange']
const[first,third]=fruits
console.log(first)
console.log(third);
//Rest operator (...)
const numbers = [1, 2, 3, 4, 5];

const [first1, ...rest] = numbers;

console.log(first1); // 1
console.log(rest);  // [2, 3, 4, 5]1
//2. Object Destructuring
const user = {
  name: "John",
  age: 25,
  city: "New York"
};

const { name, age } = user;

console.log(name); // John
console.log(age);  // 25
//Rename variables
const user1 = {
  name: "John",
  age: 25
};

const { name: userName, age: userAge } = user;

console.log(userName); // John
console.log(userAge);  // 25
const user2 = {
  name: "John",
  address: {
    city: "Hyderabad",
    state: "Telangana"
  }
};

const {
  address: { city }
} = user2;

console.log(city); // Hyderabad
//iterators
//An Iterator is an object that lets you access elements of a collection one at a time.
const numbers1 = [10, 20, 30];

const iterator = numbers1[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
//Built-in Iterable Objects
//These already provide iterators:
//Arrays
//Strings
//Maps
//Sets
//String Example
const str = "Hello";

const iterator1 = str[Symbol.iterator]();

console.log(iterator1.next());
console.log(iterator1.next());
//Creating Your Own Iterator
const myNumbers = {
  start: 1,
  end: 8,

  [Symbol.iterator]() {
    let current = this.start;
    let end = this.end;

    return {
      next() {
        if (current <= end) {
          return {
            value: current++,
            done: false
          };
        }

        return {
          done: true
        };
      }
    };
  }
};

for (const num of myNumbers) {
  console.log(num);
}
//generators
//syntax Generator functions use function*.

function* numbers9() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = numbers9();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
//Step-by-Step Execution
function* demo() {
  console.log("Start");

  yield 1;

  console.log("Middle");

  yield 2;

  console.log("End");
}

const gen1 = demo();
gen1.next();
gen1.next();
gen1.next();
// A generator automatically returns an iterator.
function* colors() {
  yield "Red";
  yield "Green";
  yield "Blue";
}

for (const color of colors()) {
  console.log(color);
}
//Real-World Example: Custom ID Generator
function* idGenerator() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const ids = idGenerator();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);