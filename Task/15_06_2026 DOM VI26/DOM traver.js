//DOM Traversing in JavaScript means moving through the HTML elements
//  (parent, child, and sibling elements).

let heading = document.querySelector("h2");

console.log(heading.parentElement);

//2. children
//Gets all child elements.
let parent = document.getElementById("parent");

console.log(parent.children);
console.log(parent.children[0]); // h2
console.log(parent.children[1]); // Paragraph 1

let parent1 = document.getElementById("parent");

console.log(parent1.firstElementChild);
console.log(parent1.lastElementChild);
let firstPara = document.querySelector("p");

console.log(firstPara.nextElementSibling);

let secondPara = document.querySelectorAll("p")[1];

console.log(secondPara.previousElementSibling);
// Create a new paragraph
let para = document.createElement("p");

// Add text
para.textContent = "Hello, this paragraph was created dynamically!";

// Add it to the div
document.getElementById("container").appendChild(para);

let btn = document.createElement("button");

btn.textContent = "Click Me";

document.body.appendChild(btn);
let li = document.createElement("li");

li.textContent = "JavaScript";
