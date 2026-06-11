// arrays
//Create practical examples using some() and every().
//some checks if at least one element in an array passes a test
//every checks if all elements pass a test. Both methods return a boolean (true or false)

var arr=[1,2,,3,4]

console.log(arr.some(i => i>3))
console.log(arr.every(i=>i>3))

const numbers = [1, 3, 5, 8];

// Is at least one number even?
const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (because of 8)

// Are all numbers even?
const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false (1, 3, and 5 are odd)

let array=[1,2,3,4]
for(let i=0;i<array.length;i++){
    console.log(`Index ${i}:${array[i]}`)
}
for(i of array){
    console.log(i)
}

for(i in array){
    console.log(i)
}
// join method The join() method combines all elements of an array into a single string. 
// You can specify an optional separator string.

const words=["javascript","is", "a","programming","language"]
const sentence=words.join(" ")
console.log(sentence)

//sort The sort() method sorts the elements of an array in place and returns the sorted array.
//syntax array.sort((a, b) => { /* comparison logic */ });

const fruits=["banana","cherry","apple","pineapple"]
fruits.sort()
console.log(fruits)

//The most modern and efficient way to flatten a nested array 
// in JavaScript is by using the native Array.prototype.flat() method.
//creates a new array with all sub-array elements concatenated 
// into it recursively up to a specified depth.
//One Level Deep: By default, it flattens only one level.
//Infinite Depth: Pass Infinity to completely flatten an array of any depth.

const nested = [1, [2, [3, 4], 5], 6];

// Flattens one level deep
console.log(nested.flat()); 
// Output: [1, 2, [3, 4], 5, 6]

// Flattens completely
console.log(nested.flat(Infinity)); 
// Output: [1, 2, 3, 4, 5, 6]
const shallowNested = [[1, 2], [3, 4], [5, 6]];

const flat = [].concat(...shallowNested);
console.log(flat); 
// Output: [1, 2, 3, 4, 5, 6]

// removing duplicates
//The fastest and most modern way to remove duplicate elements from a JavaScript 
// array is by using the Set object combined with the spread (...) operator

var m=[1,2,2,4,3,3,4,5,6,6,7,7]
console.log(...new Set(m))

// INDEXOF() AND lastIndexof() JavaScript, indexOf() searches from the beginning of an array 
// or string to find the first occurrence of an element, 
// while lastIndexOf() searches backward from the end to find the last occurrence

//const fruits = ['apple', 'banana', 'orange', 'apple', 'grape'];

// Find first occurrence
console.log(fruits.indexOf('apple')); // Output: 0

// Find first occurrence starting from index 1
console.log(fruits.indexOf('apple', 1)); // Output: 3

// Element missing
console.log(fruits.indexOf('mango')); // Output: -1

//const fruits = ['apple', 'banana', 'orange', 'apple', 'grape'];

// Find last occurrence
console.log(fruits.lastIndexOf('apple')); // Output: 3

// Search backward starting from index 2 ('orange')
console.log(fruits.lastIndexOf('apple', 2)); // Output: 0
const message = "Hello world, welcome to the world of JavaScript!";

console.log(message.indexOf("world")); // Output: 6
console.log(message.indexOf("World")); // Output: -1 (Case-sensitive)

// map filter reduce

//map
const number=[1,2,3,4,5]
const doubled=number.map(num=>num*2);
console.log(doubled)

//filter
const number1=[1,2,3,4,5]
const item=number1.filter(num=>num%2==0)
console.log(item)

const numbers2=[1,2,3,4]
const totalSum=numbers2.reduce((acc,current)=>acc +current,0)
console.log(totalSum);
