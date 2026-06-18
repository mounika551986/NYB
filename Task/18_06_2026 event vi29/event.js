// Normal event-A "normal" or native event in JavaScript is any standard browser
//  action or occurrence—such as a user clicking a button, pressing a key, or a webpage 
// finishing its loading process—that the system signals so your code can respond to it.

let button=document.getElementById("button")
let a=0;
let b=0; 
button.addEventListener("click",function(){
    
    a+=1
    console.log("value of a is:", a)
    console.log("button clicked")
});

// Throttling is a performance optimization technique in JavaScript 
// that limits the execution of a function
//  to at most once per specified time interval, regardless of how many times the event is triggered
let lastclick=0;
button.addEventListener("click",function(){
    let current= Date.now()
    if(current-lastclick>2000){
        b+=1;
        console.log("value of b is:",b)
        lastclick=current;
    }
    console.log("second button clicked")
})


//Debouncing is a technique that delays the execution of a function 
// until a certain amount of time has passed since the last event occurred.
    // It's commonly used for:

//Search input suggestions
//Window resize events
//Auto-save functionality
//API calls while typing
//Without Debouncing

// 1. The original function you want to slow down
function sayHello() {
  console.log("Hello! (Function finally executed)");
}

// 2. The simple debounce wrapper
function simpleDebounce(func, delay) {
  let timer; 
  
  return function() {
    clearTimeout(timer); // Reset the timer every single click
    timer = setTimeout(func, delay); // Start a brand new timer
  };
}

// 3. Create the debounced version (waits 2 seconds of silence)
const debouncedClick = simpleDebounce(sayHello, 2000);

// 4. Attach it to a button
document.getElementById("button").addEventListener("click", debouncedClick);

//call back -A callback function is a function passed as an argument to another function and executed later.
function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Mounika", sayBye);

// Calculator Using Callback
function calculate(a,b,operation){
    operation(a,b)
}
function add(x,y){
    console.log("sum=",x+y)
}
calculate(10,20,add)

function processUser(callback) {
    console.log("Processing User...");
    callback();
}
//Example 3: Using Anonymous Callback
processUser(function () {
    console.log("User Processed Successfully");
});
console.log("Start");
//Example 4: setTimeout with Callback
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);

console.log("End");