// 1. setTimeout() - runs exactly once

// Logs a message after 2000 milliseconds (2 seconds)
setTimeout(() => {
  console.log("This message appears after 2 seconds!");
}, 2000);

setTimeout(()=>{
    console.log("hello!mounika")

},3000);
setTimeout(function(){
    alert("this message appear after 2 seconds ")
},2000);

//setInterval Repeats the target logic consistently every 1 second until the runtime environment stops.

const countId=setInterval(()=>{
    console.log("HeartBeat...")
},1000);

// The clearTimeout() method in JavaScript cancels a timer previously established by calling setTimeout(). 
// It stops the scheduled function or piece of code from executing.
// 1. Set a timer to run a function in 5 seconds
const timerId = setTimeout(() => {
  console.log("This will never print!");
}, 5000);

// 2. Stop the timer right away using its ID
clearTimeout(timerId);
console.log("Timer was cancelled successfully.");

//clearInterval() is a built-in JavaScript function 
// used to stop a repeating timer that was previously started by setInterval().

let count = 5;

// 1. Start the interval and save its ID to a variable
const myTimerId = setInterval(() => {
  console.log(`Counting down: ${count}`);
  count--;
  // 2. Define the condition to stop the loop
  if (count < 0) {
    clearInterval(myTimerId); // 3. Stop the execution
    console.log("Timer stopped!");
  }
}, 1000); // Runs every 1000 milliseconds (1 second)


//Document the difference between synchronous and asynchronous execution.

//synchronous - code execution line by line
//Synchronous execution processes tasks sequentially—one must finish before the next begins
// —which blocks the system.

//Asynchronous - Asynchronous execution initiates tasks independently,
//  allowing the program to continue running and handle other operations while waiting.

       // Start with 10 seconds
let seconds = 10;
        // Run the function every 1000 milliseconds (1 second)
        const countdown= setInterval(function(){
            seconds --;//subtract 1
            document.getElementById("timer").innerHTML=seconds;
            if(seconds===0){
                clearInterval(countdown);// stops the timer
                                document.getElementById("timer").innerHTML = "done!"
            }
        },2000);

        let seconds1=20;
        const countdown1=setInterval(function(){
            seconds1 --;
            document.getElementById("time").innerHTML=seconds1;
            if (seconds1===0){
                clearInterval(countdown1);
            document.getElementById("time").innerHTML="CODE RUNS DOWN!";
            }
        },1000);
//difference between clearTimeout() and clearinterval()
//In JavaScript, both methods stop timers, but they cancel different types of functions.
//  clearTimeout() cancels a one-time delay set by setTimeout(), 
// while clearInterval() stops a repeating loop set by setInterval().

