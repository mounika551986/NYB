//Implement common browser events such as click, change, submit, and input.

//1. Click Event =Triggered when a user clicks an element.
let button=document.getElementById("button")
button.addEventListener("click",function(){
    console.log("button clicked!")
})

//2. Change Event Triggered when the value of an input, select, or textarea changes and loses focus.
document.getElementById("name").addEventListener("change", function(event) {
    console.log("New value:", event.target.value);
});

//3. Input Event Triggered every time the user types or changes the input value.

document.getElementById("search").addEventListener("input", function(event) {
    console.log("Typing:", event.target.value);
});

//4. Submit Event -Triggered when a form is submitted.
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted");
});

//Create practical examples of throttling and debouncing.
// Debouncing = "Wait until the user stops"

let timer;

document.getElementById("search1").addEventListener("input", () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        console.log("Searching...");
    }, 5000);
});

//Throttling Example Scenario: User clicks a button many times.

//You want to allow only one click every 2 seconds.

let canClick = true;

document.getElementById("button2").addEventListener("click", () => {
    if (!canClick) return;

    console.log("Button Clicked");

    canClick = false;

    setTimeout(() => {
        canClick = true;
    }, 2000);
});
document.getElementById("search3").addEventListener("input",()=>{
console.log("searching...")
});
//debounced event
let timer1;

document.getElementById("search3").addEventListener("input", () => {
    clearTimeout(timer1);

    timer1 = setTimeout(() => {
        console.log("debounce searching");
    }, 1000);
});
let canRun = true;

document.getElementById("search3").addEventListener("input", () => {
    if (!canRun) return;

    console.log("Throttling Searching...");

    canRun = false;

    setTimeout(() => {
        canRun = true;
    }, 3000);
});
// Document real-world use cases of callbacks, throttling, and debouncing.
//callback
function fetchData(callback) {
    console.log("Loading data...");

    setTimeout(() => {
        console.log("Data loaded");
        callback();
    }, 2000);
}

fetchData(() => {
    console.log("Display data on screen");
});
document.getElementById("button3")
    .addEventListener("click", function () {
        alert("Button Clicked");
    });
    //Debouncing

//Debouncing delays execution until the user stops performing an action
//throttling
let canShoot = true;

function shoot() {
    if (!canShoot) return;

    console.log("Bullet Fired");

    canShoot = false;

    setTimeout(() => {
        canShoot = true;
    }, 500);
}
//Document real-world use cases of callbacks, throttling, and debouncing.
//A callback is a function passed into another function as an argument, which is then executed after 
// some operation has been completed. They are the foundational building block for async JavaScript.

//Event Listeners: Executing a specific block of code only when a user clicks a button
//  (e.g., button.addEventListener('click', () => { ... })).

//Data Fetching: Processing an API response or database query 
// only after the data has successfully returned from the server.
//Timers: Executing a function after a specified delay via setTimeout or setInterval.

//2. Throttling
//Scroll Events:
//Window Resizing:
//Button Spam Prevention:

//3. Debouncing
//Search / Autocomplete Bars
//Autosave Features:
//Window Resizing (Final State)
