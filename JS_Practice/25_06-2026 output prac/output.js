//Practice various JavaScript output methods.
//JavaScript has different ways to display output. Here are simple examples to practice:
//1. console.log() – Output in Console
console.log("Hello World");
console.log(10 + 20);

//2. alert() – Popup Message
alert("Welcome to JavaScript");

//3. document.write() – Output on Web Page
document.write("Hello JavaScript");

//4. innerHTML – Display Inside an HTML Element
document.getElementById("demo").innerHTML = "Hello User";

//5. textContent – Set Text in an Element
document.getElementById("msg").textContent = "Learning JavaScript";

// program 1
let name = "Mounika";

console.log(name);
alert(name);
document.write(name);

//Practice Program 2
let a = 10;
let b = 10;

document.getElementById("result").innerHTML = a + b;
console.log(a + b);
//program 3 
let studentName = "Ravi";
let age = 18;

document.getElementById("student").innerHTML =
"Name: " + studentName + "<br>Age: " + age;

console.log(studentName, age);
