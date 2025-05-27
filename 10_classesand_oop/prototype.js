// let myName = "anurag"
// let mySurname = "singh"

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]



let heroPower = {
    thor: "hummer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.anurag = function(){
    console.log(`anurag is present in all objects`);
    
}


Array.prototype.heyAnurag = function(){
    console.log(`Anurag says hello`);
    
}


//heroPower.anurag()
myHeros.anurag()
myHeros.heyAnurag()
//heroPower.heyAnurag()


// inheritence

const User = {
    name: "tcs",
    email: "antcs@tcs.com"
}


const Teacher = {
    makeVideo: true
}

const TeachingSupport ={
    isAvaiblable : false
}

const TASupport ={
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__=User


// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
}

anotherUsername.trueLength()
"anurag".trueLength()
"iceTea".trueLength()