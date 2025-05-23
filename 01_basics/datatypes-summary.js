// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 // number 
const scoreValue = 100.4  // number

const isLoggedIn = false // Boolean
const outsideTemp = null  // null
let userEmail;   // undefined 

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 12345678954614845151n  // BigInt



// Reference (Non primitive)

// Array, Objects, Functions


const heros =["ironman", "hulk", "thor"] // Array 

let myObj = {
    name: "anurag",
    age: 21,            // objects
    
}

const myFunction = function(){
    console.log("Hello world");   // function
    
}

console.log(typeof bigNumber);






// +++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (primitive), Heap(non-primitive)


let myName = "anurag"

let anotherName = myName
anotherName = "rahul"

console.log(myName);
console.log(anotherName);


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
    
}

let userTwo = userOne

userTwo.email = "anurag@google.com"

console.log(userTwo.email);
console.log(userOne.email);


