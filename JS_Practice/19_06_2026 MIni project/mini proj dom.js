//Develop a mini project that includes:
//DOM Manipulation

const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {
    const li = document.createElement("li");
    li.textContent = input.value;

    list.appendChild(li);

    input.value = "";
});
//What is happening?
//createElement() → Creates a new <li>
//textContent → Adds text to it
//appendChild() → Adds it to the <ul>

//This is DOM Manipulation.

// Step 2: Event Handling
    button.addEventListener("click", () => {
    alert("Button Clicked!");
});

//Step 3: Timer Function

setTimeout(() => {
    alert("Task Added!");
}, 2000);

//Step 4: Callback Function
function showMessage(callback) {
    console.log("Task Added");

    callback();
}

showMessage(() => {
    console.log("Callback Executed");
});
//A function is passed to another function.
//That passed function is called later.

//This is a Callback Function.
// Step 5: Promise
const myPromise = new Promise((resolve) => {
    resolve("Task Saved");
});

myPromise.then((result) => {
    console.log(result);
});
//Step 6: Event Delegation

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
});

