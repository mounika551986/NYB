//The addEventListener method in JavaScript is used to attach an event handler
//  to a specified element. This method allows you to add multiple event handlers 
// to a single element without overwriting existing ones.

//Example 1: Create a Paragraph


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
let list1=document.createElement("list")
list.textContent="css"
document.getElementById("mylist").appendChild(list)
let img = document.createElement("img");

img.src = "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";
img.alt = "Sample Image";

document.getElementById("imageContainer").appendChild(img);
    let m = document.createElement("m");
    m.textContent = "Hello, JavaScript DOM!";

    document.getElementById("container").appendChild(m);
    let p = document.createElement("p");
    p.textContent = "First Paragraph";

    document.getElementById("box").prepend(p);
    let element = document.getElementById("demo");
    element.remove();

console.log(m)
    let parent = document.getElementById("list");
    let child = document.getElementById("css");

    parent.removeChild(child);

    //Event listeners allow JavaScript to respond to user actions
    //  such as clicking buttons, typing in input fields, or moving the mouse.
let button=document.getElementById("myBtn")
button.addEventListener("click",function(){
    alert("button clicked")
});

let input = document.getElementById("name");

input.addEventListener("input", function() {
    document.getElementById("output").textContent =
        "You typed: " + input.value;
});

let text = document.getElementById("text");

text.addEventListener("mouseover", function() {
    text.textContent = "Mouse is Over!";
});
let taxt = document.getElementById("text");

taxt.addEventListener("mouseout", function() {
    text.textContent = "Mouse Left!";
});
let btn2 = document.getElementById("btn2");

btn2.addEventListener("mouseover", function() {
    btn2.textContent = "Hello!";
});

btn2.addEventListener("mouseout", function() {
    btn2.textContent = "Hai";
});

