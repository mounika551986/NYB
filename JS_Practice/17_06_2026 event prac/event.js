//event bubbling travels child element to parent element
document.getElementById("parent").addEventListener("click",()=>{
    console.log("parent clicked")
});
document.getElementById("child").addEventListener("click",()=>{
    console.log("child button clicked")
});

//event capturing travels parent element to chilld element
let grandparent=document.getElementById("grandparent")
let parent1=document.getElementById("parent1")
let child1=document.getElementById("child1")

grandparent.addEventListener("click",()=>{
    console.log("grand parent clicked")
},true);
parent1.addEventListener("click",()=>{
    console.log("parent1 button clicked");
},true);
child1.addEventListener("click",()=>{
    console.log("child1 button clicked")
},true);

//event delegating
let list=document.getElementById("list")
function listclick(){
    console.log("clicked")
}
list.addEventListener("click",function(e){
console.log(e.target)
});

  
const menu = document.getElementById('dynamic-menu');
const addItemBtn = document.getElementById('add-item-btn');
menu.addEventListener('click', (event) => {
  // Check if a delete button was clicked
  const deleteBtn = event.target.closest('.delete-btn');
  if (deleteBtn && menu.contains(deleteBtn)) {
    const listItem = deleteBtn.closest('.menu-item');
    listItem.remove(); // Safely deletes item from DOM
    return; // Stop execution early
  }
});
document.getElementById("add-item-btn").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "salary";
  li.dataset.page = "salary";

  menu.appendChild(li);
});


const menu1 = document.getElementById("menu1");

// Handle all menu clicks
menu1.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    console.log("Navigate to:", event.target.dataset.page);
  }
});

// Dynamically add menu item
document.getElementById("addlog").addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "log";
  li.dataset.page = "vlog";

  menu1.appendChild(li);
});






