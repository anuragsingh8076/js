

function sayMyName (){
    console.log("A");
console.log("N");
console.log("u");
console.log("R");
console.log("A");
console.log("G");
}


//sayMyName()
 
// function addTwoNumbers(number1, number2){   // number 1 and 2 is parameter 
//           console.log(number1 + number2);
          
// }

function addTwoNumbers(number1, number2){   // number 1 and 2 is parameter

        //   let result = number1 + number2
        //   console.log("Anurag");
          
        //   return result
        return number1 + number2
          
          
          
}

const result = addTwoNumbers(5, 6)    // 5 and 6 is argument

//console.log("Result: ", result);


function loginUserMessage(username = "anurag"){
    if(!username){
       console.log("Please enter a username");
        return
    }
        return `${username} just logged in`

}

//console.log(loginUserMessage("anurag"));
//console.log(loginUserMessage("rahul"));

function calculateCartPrice(val1, val2, ...num1){ // ...is spread and rest operator that,s depend on usecase when we call this spread and rest operator
         return num1
}

//console.log(calculateCartPrice(300, 700, 400, 5000));

const user = {
    username: "Anurag",
    prices: 600
}

function handleObject(anyobject){
         console.log(`Username is ${anyobject.username} and price is ${anyobject.price} `);
         
}

//handleObject(user)
handleObject({
    username: "sam",
    price: 499
})

const myNewArray = [200, 400, 500, 600]

function returnSecondValue(getArray){
       return getArray[3]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 4000, 500, 7000]));
