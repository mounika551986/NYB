//function
    
function add(a,b){
    console.log(a+b)
    return "ready"
}
console.log(add(1,2))
let result=add(1,2)
console.log(result)

//2 ways
//function declaration
//function expression //named function //anonymous // arrow function

// function name()
 function hello(a=2, b=undefined){
    console.log(a,b)
 }
 hello(undefined,10)

 function varying(a,b){
    console.log(a,b)
 }
 varying(1,3,4)

 //rest parameter

 function varying(a,b,c,...f){
    console.log(a,b,c)
    console.log(arguments)
    console.log(f)
 }
 varying(undefined,3,4,5,6,7,8,9)

 //function expression

 //named

 let a =function functionname(){

 }
 a()

 //recursive function  //let var const
 var m=10    //var redeclaration avtundi
 console.log(m)
 m=20
 console.log(m)
 var m=30
 console.log(m)

 //undefined
 var s
console.log(s)

let k= 10     //let redeclaration avvadu)
console.log(k)
let f=20
console.log(f)

const b=1   // const redeclaration avvadu)
console.log(b)
const e=2
console.log(e)