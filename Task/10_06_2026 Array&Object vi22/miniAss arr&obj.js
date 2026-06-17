//Array creation
let arr1 = [1, 2, 3, 4, 5]; // Literal syntax
let arr2 = new Array(6, 7, 8); // Constructor syntax
let arr3 = Array.from("hello"); // From iterable
let arr4 = Array(5).fill(0); // Pre-filled array

console.log("Initial Arrays:", arr1, arr2, arr3, arr4);

// 2. Adding Elements
arr1.push(6); // Add to end
arr1.unshift(0); // Add to start
console.log("After push & unshift:", arr1);

// 3. Removing Elements
arr1.pop(); // Remove from end
arr1.shift(); // Remove from start
console.log("After pop & shift:", arr1);
// 4. Splice (Add/Remove at specific index)
arr1.splice(2, 1, 99); // Remove 1 element at index 2, insert 99
console.log("After splice:", arr1);

// 5. Slice (Copy portion without modifying original)
let sliced = arr1.slice(1, 3);
console.log("Sliced portion:", sliced);
// 6. Searching
console.log("Index of 99:", arr1.indexOf(99));
console.log("Includes 4?:", arr1.includes(4));

// 7. Iteration
arr1.forEach((val, idx) => console.log(`Index ${idx}: ${val}`));

// 8. Transformations
let doubled = arr1.map(num => num * 2);
console.log("Doubled array:", doubled);

// 9. Filtering
let evens = arr1.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);
// 10. Reducing (Sum)
let sum = arr1.reduce((acc, num) => acc + num, 0);
console.log("Sum of elements:", sum);

// 11. Sorting
let nums = [5, 1, 10, 2];
nums.sort((a, b) => a - b); // Ascending
console.log("Sorted ascending:", nums);
nums.sort((a, b) => b - a); // Descending
console.log("Sorted descending:", nums);

// 12. Reversing
nums.reverse();
console.log("Reversed:", nums);

// 13. Flattening
let nested = [1, [2, [3, 4]]];
let flat1 = nested.flat(); // One level
let flat2 = nested.flat(Infinity); // Deep flatten
console.log("Flat 1 level:", flat1);
console.log("Flat deep:", flat2);

// 14. Combining Arrays
let combined = arr1.concat(nums);
console.log("Concatenated:", combined);

// 15. Spread Operator
let spreadCombined = [...arr1, ...nums];
console.log("Spread combined:", spreadCombined);

// 16. Destructuring
let [first, second, ...rest] = arr1;
console.log("First:", first, "Second:", second, "Rest:", rest);

// 17. Removing Duplicates
let withDupes = [1, 2, 2, 3, 3, 4];
let unique = [...new Set(withDupes)];
console.log("Unique values:", unique);

// 18. Safe Access (Optional Chaining)
console.log("Safe access:", arr1?.[10] ?? "Not Found");

// 19. Checking Array Type
console.log("Is arr1 an array?", Array.isArray(arr1));

// 20. Emptying an Array
arr1.length = 0;
console.log("Array emptied:", arr1);
//for each
let fruits=["banana" , "apple", "cherry"]
fruits.forEach(fruits =>{
    console.log(fruits)
})

//Array Searching Techniques
const fruits1 = ['apple', 'banana', 'orange'];
console.log(fruits1.includes('banana')); // true

const numbers = [10, 20, 30, 20];
console.log(numbers.indexOf(20)); // 1

console.log(numbers.lastIndexOf(20)); // 3
//map()Purpose: Transforms every element in an array using a callback function.
const numbers1 = [1, 2, 3];
const doubled1 = numbers.map(num => num * 2); // [2, 4, 6]
console.log(numbers1)
//filter()Purpose: Selects subset items that satisfy a specific logical condition.
const scores = [10, 25, 5];
const highScores = scores.filter(score => score > 9); // [10, 25]
console.log(scores)
//flatMap()Purpose: Maps each element 
//using a transformation function and then flattens the result by one level.
const words = ["hello", "world"];
const characters = words.flatMap(word => word.split(''));
 console.log(words)
//concat()Purpose: Merges two or more arrays together.
const combined1 = [1, 2].concat([3, 4]); // [1, 2, 3, 4]
console.log(combined1)

//Array Iteration Methods

var arry=[1,2,3,4]
for (let i=0; i<arry.length; i++){
    console.log(`Index $[i]:${arry[i]}`)
}
for(i of arry){
    console.log(i)
}
for(i in arry){
    console.log(i)
}
// Sorting Strings (Works perfectly by default)
const fruits2 = ["Banana", "Apple", "Cherry"];
fruits2.sort(); 
console.log(fruits2); // ['Apple', 'Banana', 'Cherry']

// Sorting Numbers (Requires a comparison function)
const numbers2 = [40, 100, 1, 5, 25];
numbers2.sort((a, b) => a - b); // Ascending order
console.log(numbers2); // [1, 5, 25, 40, 100]

numbers2.sort((a, b) => b - a); // Descending order
console.log(numbers2); // [100, 40, 25, 5, 1]
//Object Creation and Manipulation

// 1 Using Object Literal (Most Common & Simple)
const person1 = {
    name: "Alice",
    age: 25,
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
person1.greet();

// 2 Using 'new Object()' Constructor
const person2 = new Object();
person2.name = "Bob";
person2.age = 30;
person2.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};
person2.greet();

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function () {
        console.log(`Hello, my name is ${this.name}`);
    };
}
const person3 = new Person("Charlie", 28);
person3.greet();
// 4 Using ES6 Class
class PersonClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
}
const person4 = new PersonClass("Diana", 22);
person4.greet();

