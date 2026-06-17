//Asynchronous JavaScript is a programming approach that allows your code to start a long-running task 
// and continue executing other tasks simultaneously, rather than waiting for that task to finish. 
// It prevents the browser or application from freezing (or "blocking") while waiting for operations 
// like fetching data from a server, loading files, or running timers.

//1. setTimeout() Executes a function once after a specified delay.
//Runs once after a delay
setTimeout (function (){
alert("Hello! This message apperars after 3 seconds")
},3000);

setTimeout(function(){
    document.getElementById("demo").innerHTML="TEXT CHANGED"
},2000);

//setInterval() -Runs repeatedly after every interval

//Executes a function repeatedly at specified intervals.

setInterval(function(){
    document.getElementById("clock").innerHTML=
    new Date().toLocaleTimeString();
},1000);

let count=0;
setInterval (function(){
    document.getElementById("count").innerHTML=
    count;
},1000)
// clear Interval Stops an interval
let timer = setInterval(function() {
    count++;
    document.getElementById("count").innerHTML = count;

    if (count === 10) {
        clearInterval(timer);
    }
}, 1000);
