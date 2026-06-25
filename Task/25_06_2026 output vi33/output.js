//output-are ways to display data to users or developers. The most common methods are:
//1. console.log()

//Displays output in the browser's developer console.
console.log("Hello, World!");
//2. document.write()
//Writes content directly to the HTML document.
document.write("Hello, good morning!");
//4. alert()
//Shows a pop-up message box.
alert("Hello, World!");
//5. window.print()
//Opens the browser's print dialog.
//window.print();
//3. Manipulating HTML Elements (innerHTML)
//Displays output inside a specific HTML element.
document.getElementById("demo").innerHTML = "Hai!";

//console.log()     Browser console    Debugging
//document.write()    Web page         Learning/demo purposes
//innerHTML        Specific HTML element   Dynamic content display
//alert()             Popup dialog            User notifications
//window.print()        Print dialog                 Printing pages


//Browser Object Model (BOM)-The Browser Object Model (BOM) is a collection of objects
//  provided by the web browser that allows JavaScript to interact 
// with the browser window and its features. Unlike the Document Object Model (DOM), 
// which deals with the content of a web page, the BOM deals with the browser itself.
//window
// ├── document (DOM)
 //├── navigator
 //├── location
 //├── history
 //└── screen
 
 //Main BOM Object
 //The top-level object in the BOM is the window object.
 window.alert("Hello!");

 //Important BOM Objects
 //1. window- Represents the browser window.
 window.innerWidth;   // Browser window width
window.innerHeight;  // Browser window height
//2. navigator-Provides information about the browser.
console.log(navigator.userAgent);
console.log(navigator.language);
//3. location -Contains information about the current URL and allows navigation.
console.log(location.href);
//4. history - Allows access to the browser's session history.
history.back();      // Previous page
history.forward();   // Next page
//5. screen -Provides information about the user's screen.
console.log(screen.width);
console.log(screen.height);
//| BOM                                                 | DOM                                     |
//| --------------------------------------------------- | --------------------------------------- |
//| Interacts with the browser                          | Interacts with the web page             |
//| Uses objects like `window`, `navigator`, `location` | Uses `document` object                  |
//| Browser-specific features                           | HTML document manipulation              |
//| Examples: alert, history, screen info               | Examples: getElementById, querySelector |

//API Calls in JavaScript
//An API (Application Programming Interface) call allows a JavaScript application
//  to communicate with a server and exchange data. APIs are commonly used to fetch information
//  such as weather data, user details, products, or posts from a remote service.
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error("Error:", error);
  });
  //Using async and await
  //A cleaner way to handle asynchronous API calls:
  fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    title: "New Post",
    body: "This is a new post",
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));