//functions:-
// It is a block of code to do some task and return some value

function hello() {      //parameters
console.log('hello')
}
hello() //function calling
//values that can be passed at the time of the function calling that are called areguments

function add (a,b) {
    
    return('hai')
    console.log(a+b)
}
let result = add(1,2)
console.log(result)
function otp(){
//function declaration syntax
}
//email verification
//mounika.katirevula@gmail.com
// mobile verificstion
//654388760 to get otp
//change password
//to change mobile number
//to change e mail id 

// function declaration
//function expression
//}
//function declaration
//function functionname(){
//}

function hello(a=1,b=10){//parameters
console.log(a+b)
}
hello(1,undefined)

//default parameter?
//Arguments will have high priority parameters

//varying in number of parameters and arguments

function varying(a=10,b,c,d,...f){
    console.log(a,b,c,d)
console.log(arguments)
console.log(f)
}
varying(1,2,3,4,5,6,7,8,9)

//function declaration
function functionname() {

}
functionname()

//function expression
// 3 ways

//var or let or const
//named

let a =function functionname(){
return
functionname()
}
a()
//annonmous
 
let b= function (){
return
}

//arrow function // E.S 6

let c=()=> a+b

//             var     // let     //const
// redeclare    yes        no        no  (Declaring the same variable)
// reassignment yes        yes       no   
//initilization  yes       yes       no    
//hoisting

var m= 10
console.log(m)
m=20
console.log(m)
var m=30
console.log(m)

//undefined

//not defined

let k=0
console.log(k)

const l =4
console.log(l)

//var a=10

let y

const x=10

// 2 phases
//memory creation
//code execution

let p=10
console.log(p)

//scope






