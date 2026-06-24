//Web Storage allows you to store data in the browser so it can be used later.

//There are two types:

//localStorage → Stores data permanently (until manually deleted).
//sessionStorage → Stores data only until the browser tab is closed.

//local storage
function saveName() {
    let name = document.getElementById("username").value;

    localStorage.setItem("username", name);

    alert("Name Saved!");
}
sessionStorage.setItem("city", "Hyderabad");
console.log(sessionStorage.getItem("city"));
sessionStorage.setItem("user", "Mounika");

console.log(sessionStorage.getItem("user"));
let user = {
    name: "Myra",
    age: 22
};

localStorage.setItem("user", JSON.stringify(user));
let data = JSON.parse(localStorage.getItem("user"));

console.log(data.name);
console.log(data.age);
// Login
sessionStorage.setItem("loggedInUser", "Mounika");

// Later, get logged-in user
console.log("Welcome", sessionStorage.getItem("loggedInUser"));
//try, catch, finally, and throw in JavaScript
//These are used for error handling.

//try → Code that may cause an error.
//catch → Handles the error.
//finally → Always runs, whether there is an error or not.
//throw → Creates a custom error.
try {
    let result = 10 / 0;
    console.log(result);
} catch (error) {
    console.log("An error occurred");
}
try {
    console.log("Try Block");
} catch (error) {
    console.log("Catch Block");
} finally {
    console.log("Finally Block");
}
//3. throw Statement
//Use throw to create your own error.
let age = 15;

try {
    if (age < 18) {
        throw "You must be 18 or older";
    }

    console.log("Access Granted");
} catch (error) {
    console.log(error);
}
//4. try + throw + catch + finally
let marks = 30;

try {
    if (marks < 35) {
        throw "Failed";
    }

    console.log("Passed");
} catch (error) {
    console.log("Result:", error);
} finally {
    console.log("Exam Completed");
}
//Real-World Example: ATM Withdrawal
let balance = 1000;
let withdraw = 1500;

try {
    if (withdraw > balance) {
        throw "Insufficient Balance";
    }

    console.log("Withdrawal Successful");
} catch (error) {
    console.log("Error:", error);
} finally {
    console.log("Transaction Finished");
}

