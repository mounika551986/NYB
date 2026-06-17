
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

