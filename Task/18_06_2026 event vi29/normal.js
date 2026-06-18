//Normal event
document.getElementById("button").addEventListener("click",function(){
    console.log('normal event occurs')
});

//2. Change Event
document.getElementById("course").addEventListener("change", (event) => {
    
     console.log  ( "changes: " + event.target.value);
});
//input event
document.getElementById("name").addEventListener("input",(event)=>{
    console.log( "You typed: " + event.target.value);

})
//submit event
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted");
});

