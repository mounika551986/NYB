//operators
//Arithmetic operators

var a=20
var b=10
console.log(a+b,typeof(a+b))
console.log(a-b,typeof(a-b))
console.log(a/b,typeof(a/b))
console.log(a%b,typeof(a%b))
console.log(a*b,typeof(a*b))
console.log(a**b)

//increment operator
//pre increment 
//post increment
console.log(a)
console.log(++a)
console.log(a++)
//decrement operator
var a =6
console.log(a)
console.log(a--)
console.log(--a)

//Assignment operators
var A =3
var B=5
console.log(B)
A+=B
B-=A
A/=B
A*=B
console.log(A)
console.log(B)
console.log(A/=B)
console.log(A*=B)
// comparision operator >,<,=>,=<
var a=2
var b=1
console.log(a<b)
console.log(a>b)
console.log(a<=b)
console.log(a>=b)
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)

//Logical operators
//and or not
console.log((2<4) && (1>4))
console.log((2<4) || (4>2))
console.log(!(2>1))

//ternary operator
//conditon? true: false:

let age=16
age>=18?console.log('eligible for vote'):console.log('not eligible')
var salary=4000
salary>=2000? console.log('apply for credit card') :console.log('not eligible')

//string operator

var first = 'mounika'
var last  ="rahul"
console.log(first+" "+last)

//Template ilateral  we use dollar symbol

console.log(`my name is ${first} ${last} and i am working as associate software engineer`)

//bitwise operators

// 0->0000
// 1->0001
// 2->0010
// 3->00011
console.log(1&2)
console.log(1|2)
1^2
0001
0010
0011
console.log(1^2)
~1
1110
console.log(~1)
1<<2
0001
0100
console.log(1<<2)
4>>2
0100
0001
console.log(4>>2)

//ternary operator multiple conditions home work
letnum=-5
letnum>=0?console.log('positive'): console.log("negative")

leta=10
leta>=0?console.log('even'): console.log("odd")
