//Normal copy
//A normal copy does not create a new object. 
// It merely uses the assignment operator (=) object.
//  Both variables point to the exact same space in memory.
let original={name:"dolly",details:{age:25,}};
let normalCopy=original;
normalCopy.name="bob";
console.log(normalCopy.name);

//2. Shallow Copy 
//A shallow copy duplicates only the top-level properties into a brand-new object.
//  However, if the object contains nested objects or arrays, 
// the shallow copy only duplicates the references to those nested items.
let original1 = { name: "Alice", details: { age: 25 } };
let shallowCopy = { ...original1 };

// Safe: Changing top-level properties does not affect the original
shallowCopy.name = "Bob";
console.log(original1.name); 

// Unsafe: Changing nested objects mutates the original object
shallowCopy.details.age = 30;
console.log(original1.details.age); // 30 (Original changed!)

//3. Deep Copy
//A deep copy duplicates everything recursively. It cuts all ties to the 
//original object by generating completely separate memory allocations for every nested child structure.

let original2 = { name: "Alice", details: { age: 25 } };
let deepCopy = structuredClone(original2);

deepCopy.details.age = 30;
console.log(original2.details.age); // 25 (Original is safe!)
console.log(original2)

//for ...in loops with objects

const user = { name: "Alice", role: "Admin", active: true };

for (const key in user) {
  // 1. Get the property name (key)
  console.log(key); // Outputs: "name", "role", "active"
  
  // 2. Get the property value using bracket notation
  console.log(user[key]); // Outputs: "Alice", "Admin", true
}

const cart = { Apple: 1.50, Bread: 2.99, Milk: 3.49 };

console.log(cart)
for (const item in cart) {
  console.log(`${item}: $${cart[item]}`);
}
const salaries = { John: 4000, Sofia: 5500, Mike: 3000 };
let total = 0;

for (const employee in salaries) {
  total += salaries[employee];
}
console.log(total); // Output: 12500

//Create programs using JavaScript Date object (current date, formatting, etc.).
const now=new Date()
console.log(now)
const fromString=new Date("2026-06-11")
console.log(fromString)
const fromArgs= new Date(2026,5,11,14,5)
console.log(fromArgs)

const date = new Date();

console.log(date.toString());         // Full string: "Thu Jun 11 2026 14:48:00 GMT..."
console.log(date.toDateString());     // Date portion only: "Thu Jun 11 2026"
console.log(date.toTimeString());     // Time portion only: "14:48:00 GMT+0530"
console.log(date.toISOString());      // Standard API format: "2026-06-11T09:18:00.000Z"
console.log(date.toLocaleDateString()); // Locale specific (e.g., "6/11/2026")

//Implement template strings with dynamic values obj in js


function fillTemplate(templateStr, obj) {
  // Generates a function: function anonymous(obj) { const {name, role} = obj; return `...` }
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return new Function(...keys, `return \`${templateStr}\`;`)(...values);
}

const rawString = "Hello ${name}, your team is ${team}.";
const data = { name: "Charlie", team: "Alpha" };

console.log(fillTemplate(rawString, data));
// Output: Hello Charlie, your team is Alpha.

//Use Math object methods (round, floor, ceil, random).

//1. Math.round() Rounds a number to the nearest integer

console.log(Math.round(3.4)); // 3
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.8)); // 4

//2. Math.floor() Returns the largest integer less than or equal to a given number
//  (it effectively chops off the decimals for positive numbers).
console.log(Math.floor(5.99)); // 5
console.log(Math.floor(5.01)); // 5
console.log(Math.floor(-5.1)); // -6 (Rounds down to a lower value!)
//3. Math.ceil()
//Returns the smallest integer greater than or equal 
// to a given number (always moves up to the "ceiling").
console.log(Math.ceil(1.01)); // 2
console.log(Math.ceil(1.99)); // 2
console.log(Math.ceil(-1.99)); // -1 (Moves up toward 0)

//4. Math.random() Generates a floating-point, pseudo-random decimal number 
// ranging from 0 (inclusive) up to, but not including, 1 (exclusive).
console.log(Math.random()); // Example output: 0.4719283749

//Practice string object methods (length, slice, substring, replace, etc.).
//1. .length Returns the total character count, including spaces and punctuation. 
// It is a property, not a function, so it does not use parentheses.
const inputstring= "javaScript"
console.log(inputstring.length);
//2. .slice(start, end)Extracts a section of a string from the start index up to,
//  but not including, the end index.

let phrase ="javaScript"
console.log(phrase.slice(0,4))
console.log(phrase.slice(4))
console.log(phrase.slice(0))
//3. .substring(start, end)
//Similar to .slice(), but handles unusual inputs differently:Negative indices are treated as 0.
//If start is greater than end, it automatically swaps the two positions.

let phrases="javascript"
console.log(phrases.substring(4,0)) //Swaps indices to 0, 4)
console.log(phrases.substring(-3,4)); //(treat negative as zero)
console.log(phrases.substring(0));

//4. .replace(searchValue, newValue)
//Swaps a specific piece of text or a pattern with a new string. By default, 
//it only replaces the first occurrence. 
//To replace all occurrences, use a Regular Expression with the /g (global) flag, or use .replaceAll().
let text = "Cats are cool. Cats are clean.";
console.log(text.replace("Cats", "Dogs"));   // Output: "Dogs are cool. Cats are clean."
console.log(text.replace(/Cats/g, "Dogs")); // Output: "Dogs are cool. Dogs are clean."
