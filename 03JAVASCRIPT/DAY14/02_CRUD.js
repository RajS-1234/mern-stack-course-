console.log("i am rajneesh "); // it will run in browser


const newElement=document.createElement("h2");
console.log(newElement);
console.dir(newElement);
newElement.textContent="Strike is Comming soon";
newElement.id="second";
console.log(newElement);


// select element 
const elemenet=document.getElementById("first");
elemenet.after(newElement);
// elemenet.before(newElement);

const newElement2=document.createElement("h3");
newElement2.textContent="Diwali aa rahi hai ";
newElement2.style.backgroundColor="brown";
newElement2.id="third";

newElement2.className="diwali";
newElement2.className="holi";
newElement2.className+=" holi"; // it is confusion and developer have no time
newElement2.classList.add("diwali","rajneesh");
newElement2.classList.add("holi");
newElement2.classList.remove("rajneesh","holi");


// update style
newElement2.style.fontSize="30px";
newElement2.style.fontWeight="600";

newElement2.setAttribute("hello","ji");

elemenet.after(newElement2);
console.log(newElement2);
console.log(newElement2.getAttribute("id"));
console.log(newElement2.getAttribute("class"));
console.log(newElement2.getAttribute("hello"));
console.dir(newElement2);


// How to insert Element in unorderlist

const list = document.createElement("li");
list.textContent = "Milk"

const list2 = document.createElement("li");
list2.textContent = "Cake"

const list3 = document.createElement("li");
list3.textContent = "Halwa"

const list4 = document.createElement("li");
list4.textContent = "Paneer"


const unorderlist=window.document.getElementById("listing");

unorderlist.append(list,list2); // insert in last
unorderlist.prepend(list3); // starting
list.after(list4); 
unorderlist.children[1].after(list4);
console.log(unorderlist.children);




// // real World 

const arr = ["Milk", "Halwa", "Paneer","tofu","Tea"];

// const unorderlist=window.document.getElementById("listing");
// // for(let list of arr){
           
// //        unorderlist.append(list);        
// // }


// it is bad practice for insert new Element into ui beacouse every time update in ui

// for(let food of arr){
//          list=document.createElement("li");
//          list.textContent=food;
//          unorderlist.append(list);
// }


// solution for this 
const fragment=document.createDocumentFragment(); // best practice
for(let food of arr){
      const list=document.createElement("li");
      list.textContent=food;
      fragment.append(list);
}
unorderlist.append(fragment);
console.dir(unorderlist);


const s1=document.getElementById("first");   
s1.remove();


// old method to insert Element into ui

const month=document.getElementById("ten");
// console.log(month);

const lister=document.createElement("li");
lister.textContent="may";

// month.insertAdjacentElement("afterbegin",lister);
// month.insertAdjacentElement("afterend",lister);
// month.insertAdjacentElement("beforebegin",lister);
// month.insertAdjacentElement("beforeend",lister);

// lister.innerHTML=" <img src="https://img.freepik.com/free-psd/contact-us-label-illustration_23-2151600822.jpg?semt=ais_hybrid&w=740&q=80" alt="contacts" height="200px">;
month.append(lister);


