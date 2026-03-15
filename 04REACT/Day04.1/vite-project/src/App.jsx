import { useState } from "react";

// create a bug 
function App() {

  let count=0;
  function increment() {
    count++;
    const para = document.querySelector("p");
    para.textContent=`counter : ${count}`; // dom manupulation
    console.log(count);

    const button = document.querySelector("button");
    button.textContent=`counter : ${count}`;
  }
  
    return(
    <>
    <p> counter : {count} </p> 
    <button onClick={increment}>Increment {count}</button> 
    </>
  )
}


export default App;




// in react we can not  do direct dom manipulation
// it is work of reactdom
// react tell to the react dom 
// jaise hi react see my count is changing react update automatic

// function App() {
    
//    let {count,setCount}=useState(0);
// //  let count=0;
//   //  function increment() {
//   //   count++;
//   //   // const para = document.querySelector("p");
//   //   // para.textContent=`counter : ${count}`; // dom manupulation
//   //   // console.log(count);

//   //   // const button = document.querySelector("button");
//   //   // button.textContent=`counter : ${count}`;
//   // }

//   function increment(){
//      count++;
//      setCount(count);  // hook function
//   }
  
//     return(
//     <>
//     <p> counter : {count} </p> 
//     <button onClick={increment}>Increment {count}</button> 
//     </>
//   )
// }






// let count=0;
// function App() { // again function call
    
//   function increment(){
//      count++;
//   }
  
//     return(
//     <>
//     <p> counter : {count} </p> 
//     <button onClick={increment}>Increment {count}</button> 
//     </>
//   )
// }