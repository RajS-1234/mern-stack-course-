
// function CreateCounter(){
//      function increment() {
//          console.log("i am increment function");      
     
//      }
//      return increment();
// }




function CreateCounter(){
       let count=0;
       function increment() {
             count+=1;

      }
     return increment();
}




const counting=CreateCounter();
console.log(counting);