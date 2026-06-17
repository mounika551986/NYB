let title=document.getElementById("main-title")
console.log(title.textContent)

//elementbyclass name
let messages=document.getElementsByClassName("firstline")
console.log(messages[0].textContent)
console.log(messages[1].textContent)
console.log(messages[2].textContent)

//element by tagname
let E=document.getElementsByTagName("h2")
console.log(E)

//querySelector
let q=document.querySelector(".firstline")
console.log(q.textContent)
//querySelectorAll
let qs=document.querySelectorAll(".nav-item")
console.log(qs);

//create a new element when the page is crated
var newdiv=document.createElement("p")
var addHere=document.getElementById("addHere");
addHere.appendChild(newdiv);

function changeContent(){
    document.getElementById("heading").innerHTML="HELLO JAVASCRIPT!"
    document.getElementById("message").innerHTML="inner content has been chnaged";
                document.getElementById("heading").style.color="red";
}


