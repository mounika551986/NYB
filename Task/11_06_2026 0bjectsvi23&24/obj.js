//Normal copy
//A normal copy does not create a new object. 
// It merely uses the assignment operator (=) object.
//  Both variables point to the exact same space in memory.
let original={name:"mounika",details:{age:25,}};
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

