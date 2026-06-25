//1. window.alert()
window.alert("Welcome to JavaScript!");

//2. window.prompt()
let name = prompt("Enter your name:");
console.log(name);

//3. window.confirm()
let result = confirm("Do you want to continue?");
console.log(result);

//4. window.open()
window.open("https://www.google.com");

//5. window.close()
window.close();

//6. location Object
console.log(location.href);
location.reload();
location.href = "https://www.google.com";

//7. navigator Object
console.log(navigator.userAgent);

//8. screen Object
console.log(screen.width);
console.log(screen.height);

//9. history Object
history.back();
history.forward();
//Simple BOM Practice Program

function showInfo() {
    let name = prompt("Enter your name:");

    if (confirm("Submit your name?")) {
        alert("Hello " + name);
        console.log("Current URL:", location.href);
        console.log("Browser:", navigator.userAgent);
        console.log("Screen Width:", screen.width);
    }
}

