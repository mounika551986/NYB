//Throttling is a technique that limits how often a function can run.
// "Allow a function to execute only once in a specified time interval."
//without throttling
button.addEventListener("click", () => {
    console.log("Clicked");
});

//with throttling
let canRun = true;

document.getElementById("button").addEventListener("click", () => {
    if (!canRun) return;

    console.log("throttling Clicked");

    canRun = false;

    setTimeout(() => {
        canRun = true;
    }, 2000);
});
