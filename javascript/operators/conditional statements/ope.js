//operators
//Arithmetic operators(+,-,*,/,%,**)
//


//arithmetic operators
let a=20;
let b=10;
console.log(a+b) //addition
console.log(a-b) //subtraction
console.log(a*b) //multiplication
console.log(a/b) //division
console.log(a%b) //modulus
console.log(a**b) //exponentiation
//increment operators
//pre increment
//post increment
console.log(a)
console.log(++a) //pre increment
console.log(a)
console.log(a++) //post increment
console.log(a)
//decrement operators
//pre decrement
//post decrement
console.log(b)
console.log(--b) //pre decrement
console.log(b)
console.log(b--) //post decrement
console.log(b)

var A=2
var B=3
console.log(A*B) //multiplication
console.log(A/B) //division
//assignment operators
//=,+=,-=,*=,/=,%=,**=

var A=2
var B=3
var C=A+B
console.log(B)
B+=A
B-=A
B*=A
B/=A
B%=A
B**=A
console.log(B)
console.log(B)
 console.log(B)
 console.log(B)
 console.log(B)
 console.log(B)

 //comparison operators
 //==,===,!=,!==,>,<,>=,<=
 var A=10
 var B=20
 console.log(a==b) //equal to
 console.log(a<b) //less than
 console.log(a> b) //greater than
 console.log(a<=b) //less than or equal to
    console.log(a>=b) //greater than or equal to
    var C=10
    var D="10"
    console.log("loose equality:", C==D) //equal to
    console.log("strict equality:", C===D) //strict equal to
    console.log("not equal:", C!=D) //not equal to
    console.log("strict not equal:", C!==D) //strict not equal to

    //logical operators
    //&&,||,!
    var A=2
    var B=3
    console.log(A>1 && B>2) //logical AND
    console.log(A>1 || B<2) //logical OR
    console.log(!(A>1)) //logical NOT

    //ternary operator
    //condition ? expression1 : expression2
    var age=18
    var result=age>=18 ? "adult" : "minor"
    console.log(result)

    //type of operator
    console.log(typeof(A))
    console.log(typeof(B))
    console.log(typeof(result))

    //tempate literals
    var name="mounika"
    var greeting=`hello, ${name}!`
    console.log(greeting)

    //string concatenation
    var firstName="mounika"
    var lastName="reddy"
    var fullName=firstName + " " + lastName
    console.log(fullName)

    //nullish coalescing operator
    var userInput=null
    var defaultValue="default"
    var result=userInput ?? defaultValue
    console.log(result)

    //bitwise operators
    //&,|,^,~,<<,>>,>>>
    var A=5 //0101
