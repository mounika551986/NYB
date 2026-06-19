let p=document.querySelector("h1")
console.log(p.parentElement);

let parent=document.getElementById("parent")
console.log(parent.children);
console.log(parent.children[1]);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

const button=document.getElementById("btn")
button.addEventListener("click",function(){
    // create paragraph
    const p=document.createElement("p")
    p.textContent="this paragraph was created"
    document.body.appendChild(p)
    console.log("paragraph added")
});
let addBtn = document.getElementById("addBtn");
let list = document.getElementById("list");

addBtn.addEventListener("click", function () {
    let newItem = document.createElement("li");
    newItem.textContent = "David";

    list.appendChild(newItem);
});
let removeBtn = document.getElementById("removeBtn");

removeBtn.addEventListener("click", function () {
    let lastItem = list.lastElementChild;

    if (lastItem) {
        list.removeChild(lastItem);
    }
});
// Button Click Event
let btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    console.log("Button Clicked!");
});

// Input Event
let nameInput = document.getElementById("name");
let inputResult = document.getElementById("inputResult");

nameInput.addEventListener("input", function () {
    inputResult.textContent = "You typed: " + nameInput.value;
});

// Mouse Events
let box = document.getElementById("box");
let mouseResult = document.getElementById("mouseResult");

box.addEventListener("mouseover", function () {
    mouseResult.textContent = "Mouse Entered the Box";
});

box.addEventListener("mouseout", function () {
    mouseResult.textContent = "Mouse Left the Box";
});