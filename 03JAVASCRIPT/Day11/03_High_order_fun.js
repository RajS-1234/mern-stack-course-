// Higher order function
// 1. ek function ke agrumrnt me ham function pass kar rahe hai
// 2. ek function se another function return karna 


// function double() {
      
//      return function execute() {
//               console.log("Hello i am Rajneesh "); 
//      }
// //      return execute;
// }

// const n=double();
// console.log(n());




function double(value) {
      
     return function execute(num) {
                   return num*value;
     }
//      return execute;
}

// const n=double(30);
// console.log(n(5));


const n= double(20)(5);
console.log(n);

