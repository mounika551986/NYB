// conditional statements

// if statement
//if else statement 
//else if statement
//switch statement

// ternary
//if
//syntax

// if(condition) {

//}

function checkEligibility(age) {
    if (age >= 18) {
        console.log("You are eligible to vote.")

    }
}
let age = 19
checkEligibility(age)
//truthy and falsy values
//falsy values: false,0,"",null,undefined,NaN
//truthy values: all values that are not falsy

if (true) {
    console.log("This is a truthy value.")
}
if (0) {
    console.log("this is a truthy value.")
}
if (1) {
    console.log("this is a truthy value.")
}
if ("hello") {
    console.log("this is a truthy value.")
}
if ("") {
    console.log("this is a falsy value.")
}

if (false) {
    console.log("this is a falsy value.")
}
if (null) {
    console.log("this is a falsy value.")
}
if (undefined) {
    console.log("this is a falsy value.")
}
if (NaN) {
    console.log("this is a falsy value.")
}
//if else statement
//syntax
//if(condition) {
//    //code to be executed if condition is true
//} else {
//    //code to be executed if condition is false
//}
{
    let a = 10
    if (a > 0 && a % 2 == 0)
        console.log("postive number & even")
}

{

    let a = 10
    if (a < 10 && a % 2 == 0)
        console.log("postive number & Even")
}
let marks= 92
if(marks>90){
    console.log("A grade")
}
else if(marks>80){
     console.log("Grade b")
}

var a= null
console.log(a)

//switch statements
var grade=8
switch (grade){
    case 10:
        console.log("excellent")
        break;
        case 9:
            console.log("good")
            break;
            case 8:
                console.log("average")

}
var day=7
switch (day){
    case 7:
        console.log("it is a weekend sunday")
        break;
        case 6:
            console.log('it a weekday saturday')
}

