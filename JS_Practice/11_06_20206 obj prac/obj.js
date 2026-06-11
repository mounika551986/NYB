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
