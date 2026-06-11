//Sorting Without Built-in Methods
let arr=[5,6,8,9,1]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }

}
}
console.log(arr)

//for each
//syntax array.forEach(callbackFn(element, index, array))

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach(fruit => {
  console.log(fruit);
});

const feet=["foot", "knee"  ,"leg"];
feet.forEach(feet =>  {
    console.log(feet)
})

//Introduction to Objects
//An object in JavaScript is a non-primitive data type used to store collections of data as key-value pairs,
//  where each key acts as a unique identifier for its corresponding value. 
// Unlike primitive data types (like numbers or strings) that hold only a single piece of information, 
// objects allow you to group related data and functionality together into a structured entity.
//The most common and recommended 
// way to create an object is using the object literal syntax, which uses curly braces {}.

//Creating Objects

const data={
    name:"mounika",
    age:25,
    city:"hyderabad"
}
console.log(data)
console.log(data.name)
console.log(data.age)
console.log(data.city)
data.role="software"
console.log(data)
data.name="nirvi"
console.log(data.name);
delete data.age
console.log(data)
//Object Properties and Methods
//object properties
// in javascript every object can have custom data (properties)
//and custom behaviors(methods)
//object.keys extact all property names(keys)to an array
//object.values extracts all property values in to an array
//object.entries() convert a object in to an array

const user = {
  // Properties (Data)
  name: "Alice",
  age: 28,

  // Method (Action)
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  },

  // Shorthand Method Syntax (ES6+)
  celebrateBirthday() {
    this.age += 1;
    console.log(`Happy Birthday! I am now ${this.age}`);
  }
};
console.log(user.name); // "Alice"
const targetKey = "age";
console.log(user[targetKey]); // 28
user.job = "Developer"; // Adds a new property
user.age = 29;          // Modifies an existing property
delete user.age; 
console.log("name" in user); // true
console.log(Object.hasOwn(user, "job")); // true
user.greet(); // Logs: "Hello, my name is Alice"


