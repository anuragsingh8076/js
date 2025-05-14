

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
console.log(loginUserMessage("rahul"));
