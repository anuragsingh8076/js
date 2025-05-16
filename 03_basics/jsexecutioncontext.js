//         Javascript Execution Context

// {} ->   Global Execution context-> this
//  -> Global Execution Context
//   -> Funtion Execution Context
//  ->  Eval Execution Context

// {} -> Memory Creation Phase
//    -> Execution Phase 

// Example 
let val1 = 10
let val2 = 5
function addNum(num1, num2) {
    let total = num1 +num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)


// 1 -> Global Execution -> this
// 2 -> Memory Phase   
//      val1 -> undefined
//      val2  -> undefined
//      addNum -> defination
//      result1 -> undefined
//      result1 -> undefined

// 3 -> Execution Phase
//      val1  <-10
//      val2  <-5
//      addNum ----> new variable enviorment + execution thread ---> delete
//      result1 = 15
//      result2 = 

// *    Memory phase                   Execution Context
//       val1 --> undefined               num1  -> 10
//       val2 ---> undefined              num2  -> 5
//       val3 ---> undefined              total -> 15


//  memory phase -----------------execution phase-----------------NVE+thread

//
//
//
//
//
//
//             