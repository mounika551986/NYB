//Create examples demonstrating normal object copying 

//normal object copy
const original={
    name:"mounika",city:"hyd"
}
const normalcopy=original;
normalcopy.name="sam"
console.log(original)
console.log(normalcopy.name);
let orginal={email:"mounika" ,
    details:{age:25}
}
normalCopy=orginal
normalCopy.age=30
console.log(orginal)



//Implement shallow copy using spread operator and Object.assign().
//If an object only contains primitive values
//  like strings, numbers, or booleans, a shallow copy creates a fully independent duplicate.

const user ={name:"alice",age:25}
//copying using the spread operator
const userCopy={...user}
userCopy.age=30;
console.log(user.age)
console.log(userCopy);

//The built-in Object.assign() method 
// achieves the same result by copying properties into a fresh, empty target object literal.


const car={ brand:"Toyata",model:"corolla"};
const carCopy= Object.assign({},car);
carCopy.model= "camry";
console.log(car.model);
console.log(carCopy.model);
carCopy.brand="exo"
console.log(carCopy.brand)
//Implement deep copy using JSON methods and alternative approaches in js
//To perform a deep copy in JavaScript, you can use the traditional
//  JSON.parse(JSON.stringify(obj)) method or modern native alternatives like structuredClone().
const original1 = { name: "Alice", details: { age: 30 } };

// Deep copy
const clone = JSON.parse(JSON.stringify(original1));

clone.details.age = 40; 
console.log(original1.details.age); // Output: 30 (Original is unaffected)

//The structuredClone() global function is the recommended native standard for deep copying.
//  It handles nested levels, preserves structural types, and handles cyclic data natively.

const userProfile = {
  name: "Bob",
  joined: new Date(),
  preferences: new Set(["dark_mode", "notifications","bometric"]),
};

// True deep copy
const nativeClone = structuredClone(userProfile);

console.log(nativeClone.joined instanceof Date); // true
console.log(nativeClone.preferences.has("dark_mode")); // true
console.log(nativeClone)

//comparing differences between shallow copy and deep copy behaviour

//A shallow copy creates a new outer container, 
// but nested structures still point to the original reference location.
const original2 = { name: "Alice", details: { age: 25 } };

// Creating a shallow copy using the spread operator
const shallowCopy = { ...original2 };

// 1. Modifying a top-level primitive property
shallowCopy.name = "Bob";
console.log(original2.name); // "Alice" (Unchanged)

// 2. Modifying a nested object property
shallowCopy.details.age = 30;
console.log(original2.details.age); // 30 (Changed! Both share the same reference)

//A deep copy breaks all reference connections to the original object,
//  meaning no modifications leak back.
const original3 = { name: "Alice", details: { age: 25 } };

// Creating a deep copy using modern built-in structuredClone()
const deepCopy = structuredClone(original3);

// Modifying a nested object property
deepCopy.details.age = 30;
console.log(original3.details.age); // 25 (Unchanged! They are entirely independent)
//Behavior: Both shallow copy and deep copy behave identically
//  for top-level primitive values (strings, numbers, booleans).
const original4 = { status: "active", details:{count: 1 }};
const shallowCopy1 = { ...original4 };
const deepCopy1 = structuredClone(original4);

shallowCopy1.status = "paused";
deepCopy1.details.count = 9;
deepCopy1.details.status="freeze"
console.log("Original4: ", original4);
console.log("Shallow:  ", shallowCopy1);
console.log(original4.details.status)

//Practice for...in loop with objects.

let user1={name:"myra",age:76, city:"hyd"}
for (const keys in user1){
    console.log(keys)
}

let now= new Date()
console.log(now.getMonth())
console.log(now.getDay())

var a= 10;
var b= 20;
console.log(`hello${a}and ${b}adding then the result is${a+b}`);
// 1. Define your dynamic data object
const user4 = {
  name: "Alice",
  role: "Developer",
  stats: { items: 5 }
};

// 2. Use backticks to inject properties directly
const message = `Hello ${user4.name}, your role is ${user4.role}. You have ${user4.stats.items} tasks.`;

console.log(message);
// Output: Hello Alice, your role is Developer. You have 5 tasks.

console.log(Math.floor(4.6))
console.log(Math.round(3.6))
console.log(Math.ceil(10.2))
console.log(Math.random())

const inputstring= "javaScript"
console.log(inputstring.length);
console.log(inputstring.slice(0,4))
console.log(inputstring.substring(4))
console.log(inputstring)
let text = "Cats are cool, Cats are clean.";
console.log(text.replace("Cats", "Dogs"));   // Output: "Dogs are cool. Cats are clean."
console.log(text.replace(/Cats/g, "Dogs")); // Output: "Dogs are cool. Dogs are clean."
