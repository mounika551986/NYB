//The Document Object Model (DOM) is a programming interface that translates
//  a static HTML document into a dynamic tree structure of JavaScript objects. 
// It acts as a bridge that allows JavaScript to read,
//  manipulate, and change the content, structure, and style of a webpage in real-time.

//The DOM Tree Structure
//When a web browser loads an HTML file, it parses the markup code and constructs a hierarchical tree 
// layout in memory. Every component of your webpage becomes a Node within this tree

    //window (global browser environment)
    //document  (the root webpage object)
    //html(root element)
    //head (title, meta tags)
    //body <header main> <h1,p,> <footer>

    //Core Node Types
    //Document Node: The global entry point to the webpage (window.document).
    //Element Node: The actual HTML tags (e.g., <body>, <div>, <p>).
    //Attribute Node: Metadata inside a tag (e.g., href="url", class="btn").
    //Text Node: The literal text written inside an HTML container element.
// Target a single specific element by its unique ID
//const mainHeading = document.getElementById("main-title");

// Target the very first element matching a standard CSS selector
//const subText = document.querySelector(".description");

// Target all matching elements (returns a static NodeList collection)
//const primaryButtons = document.querySelectorAll("button.btn-primary");

//2. Reading Properties with Dot Notation
//element.textContent: Reads all text inside the element (including hidden text).

//element.innerText: Reads the visible text rendered on the screen.

//element.innerHTML: Reads the HTML markup contained within the element.
// element.value: Reads the current value of input fields (like <input> or <textarea>).
//element.className: Reads the class assigned to the element.
//3. Reading Element Attributes
//element.getAttribute('attributeName'): Reads the exact string value of the specified HTML attribute.

//Reading Data AttributesData attributes (data-*) store extra information directly in your HTML. 
// You read them using the dataset property.

const button = document.querySelector('#userBtn');

// Access data attributes using camelCase
const userId = button.dataset.userId; 
const userRole = button.dataset.role;

console.log(userId); // Outputs: 9876
console.log(userRole); // Outputs: admin

const box=document.querySelector("#box")
const colorbtn=document.querySelector("#colorbtn")

//read the background color
const currentBg = window.getComputedStyle(box).backgroundColor;
console.log(currentBg); // Outputs the color (usually in rgb format)

// 2. Change the background color on click
colorBtn.addEventListener('click', () => {
  box.style.backgroundColor = 'blue';
});
const titleE1=document.getElementById("main-title")
console.log(titleE1.textContent)

//2. document.getElementsByClassName()
const messages = document.getElementsByClassName("status-msg");
console.log(messages[2].textContent); // Output: "System operational."

//3. document.querySelector()
// Selects the first paragraph with the class 'status-msg'
const firstMsg = document.querySelector(".status-msg"); 
console.log(firstMsg)
// Selects the nested element using CSS combinators
const alternativeTitle = document.querySelector("#dashboard h1"); 
console.log(alternativeTitle);

const allItems = document.querySelectorAll(".status-msg");

// Built-in iteration works directly out of the box
allItems.forEach(item => {
  item.style.color = "red";
});

