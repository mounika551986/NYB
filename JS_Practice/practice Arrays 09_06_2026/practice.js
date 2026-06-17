//Create practical examples using some() and every().
//some if any one condition satisfies then the result will be true
//every ()if all the all condition should satisfies other wise the result will be false

var arr=[1,2,3,4]

console.log(arr.some(i => i>3))
console.log(arr.every(i=>i>3))
// Check if the array has at least one even number

const number=[1,3,4,6,8]
const hasEven=number.some(num=> num%2==0)
const hasOdd=number.every(num=> number%2==0)
console.log(hasEven);
console.log(hasOdd);


//check if all the numbers are positvie
const values=[4,7,2,9]
const allPositive=values.every(num=>num>0)
console.log(allPositive)

//Practice array iteration using different looping techniques.
let array=[1,2,3,4]
for(let i=0;i<array.length;i++){
    console.log(`Index${i}:${array[i]}`)
}

for(i of array){
    console.log(i)
}
for(i in array){
    console.log(i)
}

//ForEach 
array.forEach((value,index)=>{
    console.log(`Index${i}: ${values[i]}`)
});

const colors=["red","yellow","blue"]
for(i of colors){
    console.log(i)
}
for(i in colors){
    console.log(i)
}

colors.forEach((value,index)=>{
    console.log(`Index${i}: ${values[i]}`)
});

//Implement join() and sort() methods with various datasets.
//join combine the various data in 

const string=['html','is','a','object',"programing",'language']
console.log(string.join(" "))
const nums=[1,2,3,4]
console.log(nums.join("-"))
//sort is used to arrange the elements of an array in place and return the sorted array

const strings=["cherry","berry","apple"]
console.log(strings.sort())

//sorting numbers ascending order

let num = [42, 5, 12, 99, 1];
num.sort((a,b)=>a-b);
console.log(num)

num.sort((a,b)=>b-a);
console.log(num)

const users = [
  { name: "Eve", age: 26 },
  { name: "Adam", age: 25 }
];
users.sort((a, b) => a.age - b.age); // Sorts by age ascending
console.log(users.map(u => u.name).join(", "));

//Flatten nested arrays using different approaches.

const nested=[1,[2,3],[4,[5,6]]]
console.log(nested.flat());

console.log(nested.flat(Infinity)); 

function flattenWithReduce(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flattenWithReduce(val) : val);
  }, []);
}

const nested1 = [[1, 2], [3, [4, 5]]];
console.log(flattenWithReduce(nested1)); 
// Output: [1, 2, 3, 4, 5]

var m=[1,1,2,3,3,4,4,5,6,6,7]
console.log(...new Set(m))

const unique=[21,32,21,33,32,33,34,55]
const doubled=[...new Set(unique)]
console.log(doubled)
//Search elements using indexOf() and lastIndexOf().
let fruits=["apple","banana","cherry","apple"]
firstApple=fruits.indexOf("apple")
console.log(firstApple)

lastApple=fruits.lastIndexOf("apple")
console.log(lastApple)
console.log(fruits.lastIndexOf("mango"))

// Search backward starting from index 2 ('orange')
console.log(fruits.lastIndexOf('apple', 2)); // Output: 0
const message = "Hello world, welcome to the world of JavaScript!";

console.log(message.indexOf("world")); // Output: 6
console.log(message.indexOf("World")); // Output: -1 (Case-sensitive)

//map, filter and reduce
const numbers=[1,2,3,4,5]
const doubled1=numbers.map(num=>num*2);
console.log(doubled1)

//filter
const number1=[1,2,3,4,5]
const item=number1.filter(num=>num%2==0)
console.log(item)

const numbers2=[1,2,3,4]
const totalSum=numbers2.reduce((acc,current)=>acc +current,0)
console.log(totalSum);

