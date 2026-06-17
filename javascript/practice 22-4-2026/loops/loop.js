//loops

//for loop

for (let i=1; i<5;i++){
    console.log(i)
}
let day =3
 day===1? console.log('day one'): day===2 ? console.log("day two"):console.log ('day three')

// while loop
//while( condition){


let i=0
while(i<10) {
    console.log(i)
    i+=1
}

// do while (condition) {
    
// } minimumvalue of iteration is 1

do {
    console.log('string')
} while(false)

    while(false){
        console.log('hello')
    }

    //infinite loop
    //for  of loop // arrays values
    // // for in loop //ojects key based on that key we will get the value ( return keys)

    let arr=[1,2,3]
    console.log(arr)
    for (a of arr){
        console.log(a)
    }

        let obj={a:'heelo',b:"hai how are you",c:'hyderabad'}
        console.log(obj)
        for(i in obj){
            console.log(obj[i])
        }

    
