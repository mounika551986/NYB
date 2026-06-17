
//Event Bubbling is a mechanism where an event triggered on a child element propagates 
// (bubbles up) through its parent elements up to the root (document).

document.getElementById("parent").addEventListener("click",()=>{
    console.log("parent clicked")
});
document.getElementById("child").addEventListener("click",()=>{
    console.log("Button clicked")
});


document.getElementById("grandparent").addEventListener("click",()=>{
    console.log("grand parent button clicked");
});
document.getElementById("parent1").addEventListener("click",()=>{
    console.log("parent button clicked")
});
document.getElementById("child1").addEventListener("click",()=>{
    console.log("child1 clicked")
});
//event bubbling travels from child to parent element

// Select elements
const parent2 = document.getElementById('parent2');
const child2 = document.getElementById('child2');

// Add capturing listener to parent (3rd argument is true)
parent2.addEventListener('click', () => {
  console.log('1. Parent2 Clicked (Capturing Phase)');
}, true);

// Add capturing listener to child (3rd argument is true)
child2.addEventListener('click', () => {
  console.log('2. Child2 Clicked (Target/Capturing Phase)');
}, true);
const grandparent1=document.getElementById("grandparent1")
const parent3=document.getElementById("parent3")
const child3 =document.getElementById("child3")
grandparent1.addEventListener("click",()=>{
    console.log("grandparent3 clicked")
},true)
parent3.addEventListener("click",()=>{
    console.log("parent3 clicked")
},true);
child3.addEventListener("click",()=>{
    console.log("child3 clicked")
},true);
// Watch the parent list container
const shoppingList = document.querySelector('#shopping-list');

shoppingList.addEventListener('click', function(event) {
  // Check if the clicked element is a delete button
  if (event.target.classList.contains('delete-btn')) {
    // Remove the parent <li> of that specific button
    event.target.parentElement.remove();
  }
});
console.log(document.body)

// event capturing travels from parent element to child element using capture true
//event delegation event will be added to the parent element 
// and event will be used by all the child elements
