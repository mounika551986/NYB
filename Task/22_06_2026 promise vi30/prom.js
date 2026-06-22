//Promise.all() is used when you want to run multiple promises 
// in parallel and wait until all of them succeed.
//basic syntax
const p1=Promise.resolve("apple");
const p2= Promise.resolve("banana")
Promise.all([p1,p2])
.then(results=>{
    console.log(results)
});
//simulating API calls
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("User Data"), 1000);
  });
}

function getPosts() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Posts Data"), 2000);
  });
}

Promise.all([getUser(), getPosts()])
  .then(([user, posts]) => {
    console.log(user);
    console.log(posts);
  });
  //If one promise fails
  const p3 = Promise.resolve("Success");
const p4 = Promise.reject("Something went wrong");

Promise.all([p3, p4])
  .then(results => {
    console.log(results);
  })
  .catch(error => {
    console.log(error);
  });
  //If any promise rejects, Promise.all() immediately rejects.

  //Promise.race() returns the result of the first promise that settles (either resolves or rejects).
  const p5 = new Promise(resolve =>
  setTimeout(() => resolve("A"), 1000)
);

const p6 = new Promise(resolve =>
  setTimeout(() => resolve("B"), 2000)
);

Promise.race([p5, p6])
  .then(result => console.log(result));

  const p7 = new Promise((resolve, reject) =>
  setTimeout(() => reject("Error!"), 1000)
);

const p8 = new Promise(resolve =>
  setTimeout(() => resolve("Success"), 2000)
);

Promise.race([p7, p8])
  .catch(error => console.log(error));
  //Promise.allSettled() waits for all promises to finish,
  //  regardless of whether they resolve or reject.
  const q1 = Promise.resolve("Success 1");
const q2 = Promise.reject("Error 2");
const q3 = Promise.resolve("Success 3");

Promise.allSettled([q1, q2, q3])
  .then(results => {
    console.log(results);
  });
  const r1 = Promise.reject("Error 1");

const r2 = new Promise(resolve =>
  setTimeout(() => resolve("Success 2"), 2000)
);

const r3 = new Promise(resolve =>
  setTimeout(() => resolve("Success 3"), 1000)
);

Promise.any([r1, r2, r3])
  .then(result => console.log(result))
  const s1 = Promise.reject("Error 1");
const s2 = Promise.reject("Error 2");

Promise.any([s1, s2])
  .catch(error => {
    console.log(error);
  });

  //1. What is async?
  // The async keyword is used before a function declaration.

  //2. What is await?
  //The await keyword pauses execution until a Promise is resolved.
  

  //async 
  async function greet() {
  return "Hello";
}

greet().then(result => console.log(result));


//await
function getUser() {
  return new Promise(resolve => {
    setTimeout(() => resolve("John"), 2000);
  });
}

async function showUser() {
  const user = await getUser();
  console.log(user);
}

showUser();

