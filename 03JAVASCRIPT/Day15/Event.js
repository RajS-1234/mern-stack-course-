// function handleonclick(){
//           const temp=document.getElementById("first");
//           temp.textContent="strike is comming soon";     
// }



// New Method to add event listener
// const element=document.getElementById("first");

// element.onclick=function handleonclick(){
//      element.textContent="strike is comming soon";  
//      element.style.backgroundColor="brown"; 

// }

// element.onclick=function handleonclick(){
//      element.textContent="i am rajneesh kumar";      
// }

// onclick function define for single Element of properties
// if we define multiple function then latest function change the complete behaviout of Element 
// one fuction override the second function     
  


// Latest version of EventListening

// element.addEventListener('click',()=>{
//          element.textContent="strike is comming soon";
//          element.style.backgroundColor="red";  
//          element.style.fontSize="60px"; 
// })

// element.addEventListener('click',()=>{
//          element.textContent="i am good programmer ";
//          element.style.fontWeight="100px";      
// })


// const child1=document.getElementById("child1")

// child1.addEventListener('click',()=>{
//        child1.textContent="i am child1 clicked";     
// })


// const parent=document.getElementById("parent");
// console.log(parent.children);


// for(let child of parent.children) {
//          child.addEventListener('click',()=>{
//                child.textContent="i am child"; 
//          })       
// }



// bubilling phase, capture phase , target 


const grandparent=document.getElementById("grandparent");


console.log(grandparent.children);
grandparent.addEventListener('click',(e)=>{
         console.log(e)
         console.log("i am grandparent");    
},false)


const parent=document.getElementById("parent");
parent.addEventListener('click',(e)=>{
         console.log(e)      
         console.log("i am parent");    
},false)


const child=document.getElementById("child");
child.addEventListener('click',(e)=>{
         console.log(e)
         console.log("i am child"); 
                 
},false)


// capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// capture phase off hai: Event hai usko down to up(Bubbling phase bolte hai, tab trigger kiya jaayega)




// // addEventListner with event object

// const grandparent=document.getElementById("grandparent");

// grandparent.addEventListener('click',(event)=>{        
//          console.log(event.target); 
// })
 






























































//          console.log(event.type);  //It tells which type of event occurred. 
//          console.log(event.target); // It tells which HTML element triggered the event.
//          console.log(event.currentTarget); // It tells which element the event listener is attached to.
//           console.log(event.clientX,event.clientY);  // hese give the mouse position in the browser window.
//          console.dir(event);

// })
 
