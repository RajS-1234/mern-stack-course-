// function



// 1. way to define function

// function greeting(){
//             console.log("hello i am rajneesh kumar and i am cse student");
//             return 20;   
// } 

// function addNumber(num1,num2,num3=0,num4=0) {

//                const sum=num1+num2+num3+num4;
//                console.log(sum);
// }

// greeting();
// addNumber(3,4);
// addNumber(5,6,7);
// addNumber(1,2,3,4);



// rest operator

// function addNumber(...num) {
//             let sum=0;
            
//             for(let n of num) {
//                sum+=n;
//             }

//             console.log(sum);
// }

// // if any variable have undefined value then any operation we applied
// // NAN result will give

// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12);


// diff b/w rest operator and spread

// const arr1=[1,2,3,4,5];
// const arr2=[2,4,6,8,10];
// const arr3=[4,5,6,7,8];

// const arr4=[arr1,arr2,arr3];
// console.log(arr4);

// // spread operator -- open the array 

// const arr5=[...arr1,...arr2,...arr3];
// console.log(arr5);

// // rest operator

// const [first,second,...num]=arr5;
// console.log(first,second,num);

/*---------------------------------------------------------------------------------------------------------- */

// 2. way to define function

// function Expression

// console.log(addNumber(3,4)); // Error -- we can'nt call function before function declaraction

// const addNumber=function(num1,num2) {
//               return num1+num2; 

// }

// console.log(addNumber);
// console.log(addNumber(3,4));

/*----------------------------------------------------------------------------------------------------------- */

// 3. way to define function

// arrow function

// function()
// ()=>

// ()=> {}

// const addNumber= (num1,num2)=> {
//                return num1+num2;
// }

// console.log(addNumber);
// console.log(addNumber(3,4));

// const arr=[6,12,3,45,6,10];
// arr.sort((a,b)=>a-b);
// console.log(arr);

// const addNumber= (num1,num2)=> num1+num2;

// const squareNumber=(num)=> num*num;
// const squareNumber=num=> num*num;

// console.log(addNumber(5,10));
// console.log(squareNumber);

// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;



// const greeting=()=> {
         
//         const user={
//                name: "rajneesh",
//                age: 21,
//                address: "Hathopur"
//         }
//         return user;
// }
// console.log(greeting());



// const greeting=()=> {
//         return {
//                name: "rajneesh",
//                age: 21,
//                address: "Hathopur"
//         }
// }
// console.log(greeting());



// const greeting=()=> { name: "rajneesh", age: 21, address: "Hathopur" }

// jab ham curly {} bracket ko likhte hai to wo understand karta hai ki ham function ko likhe hai 
// wo expect karta hai ki kuc return kare

// const greeting=()=> ({ name: "rajneesh", age: 21, address: "Hathopur" })
        

// console.log(greeting());


/*----------------------------------------------------------------------------------------------------------------------------------------------- */

// 4. way to define function

// IIFE

// (function greeting() {
//            console.log("Hello ji,kaise ho aap log ");    
// }) ();


// (()=>{
//     console.log("hi");
// })();


/**------------------------------------------------------------------------------------------------------------ */

// // Function Callback



// function greet(){
//     console.log("Hello Ji, Kaise ho");
// }

// function dance(){
//     console.log("I am dancing");
// }


// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance(); hardcode (Reusable)
//    // greet();
//     // code hota jisko marta
//     callback();
//     console.log("I have finished meeting");
// }

 


// // reuseable
// meet(greet); 
// meet(dance);




// // meet(greet());
// // meet();
// // greet();
// // dance();



// real world example



function blinkitOrderPlaced() {
  console.log("We have started packing your order");
}

function zomatoOrderPlaced() {
  console.log("We have started preparing your food");
}

function payment(amount, call_back) {
  console.log(`${amount} payment has initialized`);
  console.log("Payment is received");
  call_back();

  // GST: Government
  // Rider ko kitna payment dena
  // company ko kitna
}

payment(500, zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);










/*

┌────────────────────┐
│ JavaScript Engine  │
│ (V8 / SpiderMonkey)│
└─────────┬──────────┘
          │
          ▼
┌────────────────────┐
│ Function keyword   │
│ detect करता है     │
└─────────┬──────────┘
          │
          ▼
┌──────────────────────────┐
│ Built-in Function class  │
│ (constructor)            │
└─────────┬────────────────┘
          │
          ▼
┌──────────────────────────┐
│ greeting() function      │
│ object create होता है    │
└─────────┬────────────────┘
          │
          ▼
┌──────────────────────────┐
│ Memory (Heap)            │
│ function store होता है   │
└──────────────────────────┘
  │
  ▼
Call होने पर Call Stack में जाता है
*/