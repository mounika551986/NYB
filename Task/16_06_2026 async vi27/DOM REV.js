// DOM REVISION
let heading=document.querySelector("h1");
console.log(heading.parentElement)
//2. children
//Gets all child elements.
let parent = document.getElementById("parent");

console.log(parent.children);
console.log(parent.children[0])
console.log(parent.children[1]);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);
let firstPara = document.querySelector("p1");
console.log(firstPara.nextElementSibling);
console.log(firstPara.previousElementSibling);

function addParagraph(){
let p=document.createElement('p');
p.textContent="this paragraph was created dynamically";
document.body.appendChild(p);
}
let btn = document.createElement("button");
btn.textContent = "Click Me";

document.getElementById("container").appendChild(btn);
let li = document.createElement("li");
li.textContent = "JavaScript";


document.getElementById("myList").appendChild(li);

let list=document.createElement("list")
list.textContent="HTML"
document.getElementById("myList").appendChild(list);
<img src="https://pngtree.com/so/dummy-image"></img>
