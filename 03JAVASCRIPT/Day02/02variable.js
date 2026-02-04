// how to make variable 

// var a=5;
// let b=8;
// const c=10;
// d=12;




// Diff b/w let and var


// var -it is old Method to create variable
// var is function-scoped
// let is block-scoped

// 1. scope based


function f1()
{
      var x=5;         
      if(true)
      {
             var x=10; // override the x 
             let y=20;
             console.log(x,y);  
      }  
      console.log(x,y);     // x of o/p is 10 and y-Error   
}
f1();
// var do'nt respect scope



//2. redeclared variable


// let user_name="rajneesh kumar";
// let age=20;
// // let age=30; we can't make a variable name with multiple name throw let 
// console.log(user_name,age);

// old method to create Varible
// var a=20;
// var a=30;



// 3. garbage value


var x=10; // global scope
let y=20; // script scope
console.log(x,y);

// window is predefined object ,ye Node.js me nahi milega ye browser specific hai
// browser es window ko ek object se repersent karta hai
// var key ke help se variable banane par wo ban jata hai window object ka property 


// javascript code run in two step
// 1.read all the program and allocate the memory of variable not assign value 
// 2.assign the value

// which variable make from var keyword then when javascript scan code var variable store undefined
// undefined -specail value




// 4. Hosting 


// f1();
// //  function declaraction 
// function f1() 
// {
//                console.log(x)
//                var x=5; 

//                console.log(y); // Error
//                let y=10;
               
//                // intrnal concept
//                // var x;
//                // console.log(x);
//                // x=5;
// }
// // f1();


// // function expression

// var f1; // es line ke bad kya ye f1() function nahi hai like varibale
// f1();
// var f1=function(){
//                console.log(x)
//                var x=5;  

// }
// hosting - variable ka declaraction upper kar deta hai not assign value









