// singleton


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "Anurag",
    "full name" : "Anurag Singh",
    [mySym] : "mykey1",
    age: 20,
    location : "Bhagalpur",
    email: "anurag@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Wednesday"]
}

// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])


jsUser.email = "anuragsingh@chatgpt.com"
//Object.freeze(jsUser)
jsUser.email = "anurag@google.com",
//console.log(jsUser);



jsUser.greeting = function() {
    console.log("Hello js user");
    
}

jsUser.greetingTwo = function() {
    console.log(`Hello js user, ${this.name}  `);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

