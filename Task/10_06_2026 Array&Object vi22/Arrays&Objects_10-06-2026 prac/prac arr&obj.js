//Implement array sorting without using built-in sort() methods.
let arr=[5,6,7,3,1]
for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
        [arr[i],arr[j]]=[arr[j],arr[i]];
    }

}
}
console.log(arr)

const arr1=[4,5,2,1,6]
for (let i=0; i<arr1.length; i++){
    for(let j=i+1; j<arr1.length; j++){
        if (arr1[i]>arr1[j]){
            [arr1[i],arr1[j]]=[arr1[j],arr1[i]]
        }
    }
}

console.log(arr1)
function sortObjectsByProperty(array, property, ascending = true) {
  const len = array.length;
  
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1 - i; j++) {
      const val1 = array[j][property];
      const val2 = array[j + 1][property];
      
      // Determine if a swap is needed based on sorting order
      const shouldSwap = ascending ? val1 > val2 : val1 < val2;
      
      if (shouldSwap) {
        // Swap the objects in the array
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}

const users = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 }
];
console.log(sortObjectsByProperty(users, "age", true));

const products = [
  { id: 1, name: "Banana" },
  { id: 2, name: "Apple" },
  { id: 3, name: "Cherry" }
];

console.log(sortObjectsByProperty(products, "name", false));

//Create examples using forEach().

const feet=["foot", "knee"  ,"leg"];
feet.forEach(feet =>  {
    console.log(feet)
})

const fruits=["apple" , "banana" , "cherry"]
fruits.forEach(fruits => {
    console.log(fruits)
});

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

// 5.Using Object.create() (Prototype-based)
const proto = {
    greet: function () {
        console.log(`Hello, my name is ${this.name}`);
    }
};
const person5 = Object.create(proto);
person5.name = "Eve";
person5.age = 27;
person5.greet();

// 6️⃣ Using Factory Function
function createPerson(name, age) {
    return {
        name,
        age,
        greet() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
}
const person6 = createPerson("Frank", 35);
person6.greet();
//Access, update, add, and delete object properties.

let man={
    name:"sony",
    city:"warangal",
    phone:9999
}
//Access properties
console.log(man.name) //dot notation
console.log(man["city"]) // bracket notation

man.role="software"
console.log(man)
delete man.name
console.log(man)

// Example: Creating and manipulating objects in JavaScript
const bankAccount = {
  owner: "Alex",
  balance: 500,

  // Method to add money
  deposit(amount) {
    this.balance += amount;
    return `Deposited $${amount}. New balance: $${this.balance}`;
  },

  // Method to remove money
  withdraw(amount) {
    if (amount > this.balance) {
      return "Insufficient funds!";
    }
    this.balance -= amount;
    return `Withdrew $${amount}. Remaining balance: $${this.balance}`;
  }
};

// Calling object methods
console.log(bankAccount.deposit(200));  // "Deposited $200. New balance: $700"
console.log(bankAccount.withdraw(100)); // "Withdrew $100. Remaining balance: $600"

const user = {
  username: "coder123",
  status: "active"
};

// 1. Add a new property
user.role = "admin"; 

// 2. Update an existing property
user.status = "away"; 

// 3. Delete a property
delete user.username; 

console.log(user); // Output: { status: 'away', role: 'admin' }

