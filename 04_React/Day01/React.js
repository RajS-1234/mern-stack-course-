// Internal working of React

// // create a h1 element using js
// const element1 =document.createElement("h1");
// element1.textContent="hello coder army ";
// element1.className="element";
// element1.id="frist";
// element1.style.fontSize="30px";
// element1.style.backgroundColor="orange";
// element1.style.color="white";






// // create h2 element using js
// const element2 =document.createElement("h2");
// element2.textContent="strike is comming soon ";
// element2.className="element";
// element2.id="second";
// element2.style.fontSize="30px";
// element2.style.backgroundColor="orange";
// element2.style.color="white";


// const root=document.getElementById("root");
// root.append(element1);
// root.append(element2);






// attributes = {
//      className: "element",
//      id:"frist"
// }

// element = {
//      tag: "h1",
//      textContent: "hello coder army",
//      className: "element",
//      id:"frist",
//      style:{ fontSize:"20px",backgroundColor:"lightblue",color:"black" }          
// }



// function for reusable

// function createElement(tag,attributes,children){
//             const element=document.createElement(tag);
//             element.textContent=children;    
//                for(const key in attributes) {               
//                     if(key==='style') {
//                        Object.assign(element.style,attributes.style);
//                     } else {
//                         element[key]=attributes[key];  // take some time
//                     }
//                }
// //             element.className=attributes.className
// //             element.id=attributes.id
//                return element;
// }



// const element1=createElement("h1",{className:"element",id:"first",style:{fontSize:"20px",backgroundColor:"lightblue",color:"black"}},"hello coder army");
// const element2=createElement("h2",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"strike is comming soon");
// console.log(element1);
// console.log(element2);

// const root=document.getElementById("root");
// root.append(element1);
// root.append(element2);



/*-------------------------------------------------------------------------------------------------------------------------------------- */

// custom react

// react is object of js and this object have lot of method

// const React= {
//    createElement : function createElement(tag,attributes,children){
//             const element=document.createElement(tag);
//             element.textContent=children;
//             for(const key in attributes) { 
//                if(key==='style') {
//                   Object.assign(element.style,attributes.style);
//                } 
//                else {
//                    element[key]=attributes[key];  
//                }   
//             }
//             return element;
//    }
// }


// // // reactdom html document ke sath element ko attach karta hai

// const ReactDOM = {
//       render : function(child,parent) {
//          parent.append(child);
//       }   
// }


// const root=document.getElementById("root");
// ReactDOM.render(element1, root);   
// ReactDOM.render(element2, root);  


/*-------------------------------------------------------------------------------------------------------------*/

// orinal React 

// const React = {
//         createElement : function(type,props,children) {
              
//                return{
//                    type: type,
//                    props : {
//                       ...props,
//                    children: children      
//                    }
//                }
//         }
// }

// const ReactDOM = {
//     render: function(reactElement,root){
       
//        root.innerHTML = '';

//        const element =  document.createElement(reactElement.type);
        
//       const {props} = reactElement;

//       for(const key in props){
//         if(key==='style'){
//             Object.assign(element.style,props.style);
//         }
//         else if(key==='children'){
//             element.textContent = props[key];
//         }
//         else{
//             element[key] = props[key];
//         }
//       }
//       root.append(element);
//     }
// }



const element1=React.createElement("h1",{className:"element",id:"first",style:{fontSize:"20px",backgroundColor:"lightblue",color:"black"}},"hello coder army");
const element2=React.createElement("h2",{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"strike is comming soon");
console.log(element1);
console.log(element2);



//--------------------------------------------------------------------------


// const root=document.getElementById("root");
// ReactDOM.render(element1, root);   
// ReactDOM.render(element2, root);  




// remove all element form the container after add new Element

// ReactDOM.render(element1,document.getElementById('root'));
// ReactDOM.render(element2,document.getElementById('root'));





// it is also remove the Element and add div container in DOM

// const div = React.createElement('div',null,element1,element2,"i am rajneesh kumar");
// ReactDOM.render(div,document.getElementById('root'));
// console.log(div);




const div = React.createElement('div',null,element1,element2,"i am rajneesh kumar"); // How it possible More than three argument
// Main container to render react elements
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(div);

// console.log(div); 






// problem with react

// const div = React.createElement('div',null,
//     React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army"),
//     React.createElement('h2',{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched"),
// );

















// DOM Concept strong karna padhega ---Morning