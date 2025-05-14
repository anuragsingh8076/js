//const tinderUser = new Object()  // this is single ton object
const tinderUser ={}               // this is not single ton object


tinderUser.id ="123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser);


const regularUser = {
    email : "some@gmail.com",
    fullname: {
        userfullname: {
            firstname : "anurag",
            lastname : "singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

//  const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}   // Spread operator
console.log(obj3);


const users = [
    {
        id : 2,
        email: "a@gmail.com"
    },
    {
        id : 2,
        email: "a@gmail.com"
    },
    {
        id : 2,
        email: "a@gmail.com"
    },
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLogged'));

