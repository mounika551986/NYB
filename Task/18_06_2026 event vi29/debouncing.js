//Debouncing is a technique that delays the execution of a function until a certain amount 
// of time has passed since the last event occurred.
//"Wait until the user stops doing something, then run the function."

let timer;

document.getElementById("search").addEventListener("input", () => {
    clearTimeout(timer);

    timer = setTimeout(() => {
        console.log("Searching...");
    }, 1000);
});
let timer1;
document.getElementById("search1").addEventListener("input",()=> {
    clearTimeout(timer1);
    timer1=setTimeout(()=>{
        console.log("data uploaded")
    },2000)
})
