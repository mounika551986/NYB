//data types
//primitive datatypes
//non primitive data types

//primitive data types

//strings
var string="hello"
console.log(string,typeof(string))
var k= 'hai'
console.log(k,typeof(k))
var m= `how are you!`
console.log(m,typeof(m))
var katirevula_mounika= "mounika"
console.log(katirevula_mounika)
var k
console.log(k)

//number
var_9=90
console.log(9,typeof(9))
//boolean true or false
var a=true
console.log(true,typeof(true))
var b=false
console.log(false,typeof(false))

//undefined
var Ab
console.log(Ab,typeof(Ab))

//null
var N=null
console.log(N,typeof(N))

//big int
var n= 999999999n
console.log(n,typeof(n))

//non primitive data types multiple values in single memory

//object

var obj={name:"mounika",role:"software",city:"hyd",salary:'20000'}
console.log(obj)

//array
var arr=[1,2,3,4,"hello",'hai','how are you',[1,2,234555]]
console.log(arr)

//function 
    
function hello(){
    console.log('hai')

}
hello()
//calculation of salary on monthly basis
function salary (name,days){
    var perday =2000
    console.log("monthly salary of",name ,"is", perday*days)
}
salary('mounika',22)
salary('rahul',22)
salary("myra",10)
salary("nirvi",25)
console.log("all the salaries are calculated")

//date

let today=new Date
console.log(today)

let birthday ="11-05-1993" 
console.log(birthday)

// ES6 (map,weak map,set,weak set)

//map
var map=new Map()
map.set("name","mounika")
map.set("age",24)
map.set("city","hyderabad")
console.log(map)
console.log(map.get("name"))
console.log(map.has("age"))
map.delete("city")
console.log(map)

var set=new Set()
set.add(1)
set.add(2)
set.add(3)
set.add(1) //duplicate value will not be added
console.log(set)
console.log(set.has(2))
set.delete(3)
console.log(set)

