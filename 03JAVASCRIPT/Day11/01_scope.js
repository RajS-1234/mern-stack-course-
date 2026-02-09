// Scope

// Global scope
// Function level scope--> 
// Block level scope

let a=10;
const b=20;

if(true) {
    let d=40
    var e=50;
    console.log(b);
    console.log(d);           
}

// console.log(d); // Error 
console.log(e); // Accessiable - var variable does'nt respect block level Element

function greet(){
         let c=30;
         console.log(a);      
}
console.log(c);







// let global=30;
// function greet() {
//           let global = 40;
//           function meet(){
//                let global=10;
//                console.log(global);
//           }
//           meet();
//           console.log(global);  // jab v ham global variable ko function ke andar access karte hai to frist apne scope me search karta ha uske bad outer scope  me jata hai      
// }
// greet();

