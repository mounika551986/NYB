function greet(name,callback){
    console.log("hello " + name)

callback();
}
function saybye(hai){
console.log('good morning')
}
greet("john", saybye);

