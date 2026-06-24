//local storage
//1. Store Data
    localStorage.setItem("username", "Ravi");
    console.log("Data stored successfully");
//2. Retrieve Data
    let username = localStorage.getItem("username");

    console.log(username);
function saveData() {
    localStorage.setItem("message", "Hello Local Storage!");
    console.log("Saved");
}

function loadData() {
    let data = localStorage.getItem("message");
    console.log(data);
}
//session storage
    sessionStorage.setItem("name", "John");
    sessionStorage.setItem("city", "Hyderabad");

    console.log(sessionStorage.getItem("name"));
    console.log(sessionStorage.getItem("city"));

    //error handling
    
function checkAge() {
    try {
        let age = prompt("Enter your age:");

        if (!age) {
            throw new Error("Age is required");
        }

        age = Number(age);

        if (isNaN(age)) {
            throw new Error("Please enter a valid number");
        }

        if (age < 18) {
            throw new Error("You must be 18 or older");
        }

        console.log("Access granted ✔");

    } catch (error) {
        console.log("Error:", error.message);
    } finally {
        console.log("Check completed");
    }
}


