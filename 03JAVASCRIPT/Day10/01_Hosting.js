// code Run-- Execution Context
// 1. Memory allocation
// 2. Execution Phase

// Momory Allocation
// a = undefined
// b = undefined
// addNumber = fnCode
// sumResult1 = undefined
// sumeResult2 = undefined

// Execution Phase

// a = 10
// b = 20
// addNumber = fnCode
// sumResult1 = 30
// sumeResult2 = 9



// // console.log(a);
// var a=10;
// var b=20;
// // console.log(a);

// var sumResult1 = addNumber(a,b);
// console.log(sumResult1);

// function addNumber(num1,num2) {
//         var sum=num1+num2;
//         return sum;       
// }

// var sumResult1=addNumber(a,b);
// var sumeResult2=addNumber(4,5);
// console.log(sumResult1,sumeResult2);

 



// let,const
// Memory allocation
// a =  <uninitialised> (Temporal dead zone)
// b =  <uninitialised> (Temporal dead zone)
// result = <uninitialised> (Temporal dead zone)
// addNumber = <uninitialised> (Temporal dead zone)


// Execution phase

// a= 10
// b= 20
// addNumber = fncode
// result= 30


// console.log(a); // Error

let a=10;
const b=20;
console.log(a);


// const result = addNumber(a,b); // Error 
// console.log(result);

const addNumber = function(num1,num2){
    const sum = num1+num2;
    return sum;
}
const result = addNumber(a,b);
console.log(result);