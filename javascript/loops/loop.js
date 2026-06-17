// loops

//for loop
//while loop

let i =0
for (let i=0 ; i<5 ; i++){


    console.log(i)
}

let day=3
day ===1? console.log("DAY ONE") :
day ===2? console.log ("day two") : console.log ( "day three")

//while loop

let b =1
let count=0
//list first even 10 even numbers
while(count<10){
    if(b%2==0){
    console.log(b)
    count ++
    }
    b+=1
    //count++
    
}
// do while 
//minimum number of iterations is 1
do {
    console.log("hello")
} while (false)

    while(false) {
console.log('hai')
    }
    // infinite loop
    // for of - we will use in arrays
    // for in - we will use in objects

    let arr =[1,2,3]
    console.log(arr)
    for(a of arr) {
        console.log (a)
    }
    let obj={a:"hello" , b:"hai"}
    console.log(obj)
    

