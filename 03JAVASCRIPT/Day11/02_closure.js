
// function CreateCounter(){
//      function increment() {
//          console.log("i am increment function");  
//          return 20;    
     
//      }
// //      return increment();
// //      increment();
// }
// console.log(CreateCounter());





// function CreateCounter(){
//        let count=0;
//        function increment() {
//              count+=1;
//              return count;

//       }

//       return increment;

// }

// console.log(count); // Error
// increment(); // Error - increment is not defined in this scope

// const counter=CreateCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());



// const counting=CreateCounter();
// console.log(counting);



// real world example of closure 


// let balance=500;

// balance+="rajneesh";
// balance-=500;
// console.log(balance);



// 1.Problem

// let balance=500;
// let user = {
//       deposit : function(amount) {
//             if(typeof amount==="number" && amount>0) {
//                    balance+=amount;
//                    return balance;
//             }
//       },
//       withdraw : function(amount) {
//             if(typeof amount==="number" && amount>0 && balance>=amount) {
//                   balance-=amount;
//                   return balance;
//             }
//       } ,
//       getBalance : function() {
//             return balance;
//       }
// }

// balance="rajneesh"; // problem - developer can mistake



// 2.Problem

// let user = {
//       balance : 500,
//       deposit : function(amount) {
//             if(typeof amount==="number" && amount>0) {
//                    this.balance+=amount;
//                    return this.balance;
//             }
//       },
//       withdraw : function(amount) {
//             if(typeof amount==="number" && amount>0 && balance>=amount) {
//                   this.balance-=amount;
//                   return this.balance;
//             }
//       } ,
//       getBalance : function() {
//             return this.balance;
//       }
// }
// user.balance="Rajneesh"; // developer can mistake



// console.log(user.getBalance());
// console.log(user.deposit(300));
// console.log(user.withdraw(200));
// console.log(user.getBalance());


// method ko access(function)
// balance: usko directly access na









function createBankAccount() {

    let  balance = 500;  

    return {
      deposit : function(amount) {
            if(typeof amount==="number" && amount>0) {
                   balance+=amount;
                   return balance;
            }
      },
      withdraw : function(amount) {
            if(typeof amount==="number" && amount>0 && balance>=amount) {
                  balance-=amount;
                  return balance;
            }
      } ,
      getBalance : function() {
            return balance;
      }
  }
  return user;
}

// console.log(balance);
const customer=createBankAccount();
console.log(customer);
console.log(customer.getBalance());
console.log(customer.deposit(300));

