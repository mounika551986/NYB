//This Keyword refers to the execution context object of the current code block 



//Global Context When executed outside of any function block,
//  this evaluates to the environment's primary global object.
console.log(this); 

//Standalone Functions When calling a regular, unattached function,
//  its context depends strictly on JavaScript's execution mode.

function showContext() {
  console.log(this);
}

// 1. Non-strict mode
showContext(); // Logs the Window/global object

// 2. Strict mode
"use strict";
showContext(); // Logs undefined

//Object Methods (Implicit Binding) - When a function is called as a property of an object,
//  this points directly to the object to the left of the dot.
const user = {
  username: "Alex",
  greet() {
    console.log(`Hello, I am ${this.username}`);
  }
};

user.greet(); // Logs: "Hello, I am Alex"

// ⚠️ Pitfall: Losing Context
const looseGreet = user.greet;
looseGreet(); // Logs: "Hello, I am undefined" ( because 'this' defaults back to global/undefined )


//Arrow function name(params) {
    


let arr=()=>{
    console.log(this)
}
arr()

// 

// regular function 
function hello(a,b){
    return a-b;

}
hello()
console.log(hello(10,5))

// object method  

const smartPhone={
    brand:"apple", price: 999,

displayDetails:function() {
    return `this ${this.brand} cost is$${this.price}`
}
}
const details=smartPhone.displayDetails()
console.log(details);

//change this reference

const user1 = { name: 'Alice' };
const user2 = { name: 'Bob' };

function greet(greeting, punctuation) {
    console.log(`${greeting}, I am ${this.name}${punctuation}`);
}

// Using .call() -> Arguments passed individually
greet.call(user1, 'Hello', '!'); 
// Output: Hello, I am Alice!

// Using .apply() -> Arguments passed as an array
greet.apply(user2, ['Hi', '.']); 
// Output: Hi, I am Bob.

//bind()
const module = {
    x: 42,
    getX: function() { return this.x; }
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // undefined (called in global context)

// Create a new function with 'this' safely locked to 'module'
const boundGetX = module.getX.bind(module);
console.log(boundGetX()); // 42


