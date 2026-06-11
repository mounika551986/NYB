//conditonal statements
//if statement
//if else statement
//else if ststement
//switch 

//if statement
function checkeligibility(age){
    if(age>18){
        console.log("eligible for vote")
    }
}
let age=19
checkeligibility(age)

//truthy value falsy value
if(true){
    console.log('truthy value')
}
if(1){
    console.log('truthy value')
}
if ('hello'){
    console.log("truthy value")
}
if(0){
    console.log("falsy value")
}
if (null)
    console.log("falsy value")

//if else statement


if (true){
    console.log('true')
}
else{
    console.log("false")
}
    console.log('hai')

//else if statement

let a=10
if(a>0 && a%2==0){
    console.log('postive number','even number')
}
let marks = 70
if (marks>80){
    console.log('A GRADE')
}
else if (marks>70){
    console.log("grade B")
}
else if (marks>60){
    console.log('grade C')
}
else{

}
//switch statement


var grade =8
switch (grade) {
    case 10:
    console.log('excellent')
    break
    case 9:
        console.log('good')
        break
        case 8:
            console.log('AVERAGE')
}
var gradeA=9
console.log(gradeA)
var gradeB=8
console.log(gradeB)