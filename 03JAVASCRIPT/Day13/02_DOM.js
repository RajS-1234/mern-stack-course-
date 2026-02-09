// ham log ke pass kuc command hota hai jisko run karte hi us element ko object bana ke deta hai  

/*
who convert html element into object 
browser have some feature and provide syntax , we can change html file into object with help of syntax
*/



// frist hava to select Elemet which want to manipulate

// getElementById(object) -> it is an return an single DOM object

// const temp=window.document.getElementById("frist");
// typeof temp
// // 'object'

// // console.dir(temp);  

// temp.textContent="i am rajneesh";
// // 'i am rajneesh'
// temp.style.backgroundColor="yellow";
// 'yellow'



// window  


// window is the global object in the browser

// The window object is the top-level object that controls everything in the browser.

// Why is Window Object Important?

// Because it gives JavaScript access to browser features like:
// 1.HTML document
// 2.URL information
// 3.Browser history
// 4.Screen size
// 5.Alerts and timers
// So it is very important for controlling and interacting with the browser.

// window

// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// window.alert("hello");
// window.open();
// window.Date();

// Object.keys(window);
// (242) ['window', 'self', 'document', 'name', 'location', 'customElements', 'history', 'navigation', 'locationbar', 'menubar', 'personalbar', 'scrollbars', 'statusbar', 'toolbar', 'status', 'closed', 'frames', 'length', 'top', 'opener', 'parent', 'frameElement', 'navigator', 'origin', 'external', 'screen', 'innerWidth', 'innerHeight', 'scrollX', 'pageXOffset', 'scrollY', 'pageYOffset', 'visualViewport', 'screenX', 'screenY', 'outerWidth', 'outerHeight', 'devicePixelRatio', 'event', 'clientInformation', 'screenLeft', 'screenTop', 'styleMedia', 'onsearch', 'onappinstalled', 'onbeforeinstallprompt', 'onabort', 'onbeforeinput', 'onbeforematch', 'onbeforetoggle', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncommand', 'oncontentvisibilityautostatechange', 'oncontextlost', 'oncontextmenu', 'oncontextrestored', 'oncuechange', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onreset', …]




// document 


// document is an object that represents the web page (HTML page) loaded in the browser.

// It is part of the DOM (Document Object Model).

// 👉 document = whole HTML page

// ✅ Why is document used?

// We use document to:

// 1.Access HTML elements

// 2.Change content

// 3.Change styles

// 4.Add or remove elements

// 5.Handle user actions (click, input, etc.)

// const temp =window.document.getElementById("frist").textContent="i am student of cse";

// window.document.documentElement.children[1].children[1].textContent ="i am from bihar ";



// temp.innerText; // jo browser par show karega wahi 
// 'Strike is Comming soon'
// temp.textContent // ye us tag ke andar ke pure content ko show karega and tag ko ignore karega
// '\n               Strike is Comming soon 18 october'
// temp.innerHTML // ye sabko show karega 
// '\n               Strike is Comming soon <span style="display: none;">18 october</span>'



// console.log(window.document);
// VM721:1 #document (http://127.0.0.1:5502/03JAVASCRIPT/Day13/01_index.html)
// console.log(window.document.documentElement);
// VM754:1 <html lang=​"en">
//           ​<head>​…​</head>
//           ​<body style=​"background-color:​ #ffc0cb;​">​…​</body>
//        ​</html>​
// console.log(window.document.documentElement.children);
// VM782:1 HTMLCollection(2) [head, body]




// how to select element in DOM based id, class, tag name, css selector

// getElementById -> it is return an single DOM object
// getElementsByClassName -> it is return an HTMLCollection (array like object)
// getElementsByTagName -> it is return an HTMLCollection (array like object)


// select element by id

// const temp = window.document.getElementById("frist");
// // temp
// // <h1 style="background-color: orange; color: brown;" id="frist" class="third">…</h1>
// temp.textContent = "i am rajneesh";
// // 'i am rajneesh'
// temp.style.backgroundColor = "yellow";
// // 'yellow'
// temp.id = "first_h1";
// // 'first_h1'
// console.log(temp.id);
// // 'first_h1'



// select element by class name

// const temp=window.document.getElementsByClassName("third");
// temp
// // HTMLCollection(3) [h1#frist.third, h2#second.third, ul.third, frist: h1#frist.third, second: h2#second.third]

// // temp[0];
// // <h1 style="background-color: orange; color: brown;" id="frist" class="third">…</h1>
// temp[0].style.backgroundColor="blue";
// // 'blue'


// for (let nums of temp) {
//     console.log(nums);
// }


// const arr=[...temp];




// select element TagName


// const temp=window.document.getElementsByTagName("li");
// console.log(temp)
// HTMLCollection(3) [li, li,li]
// for(let num of temp)
//     console.log(num);
// VM913:2 <li>​…​</li>​::marker​"Fridge"</li>​
// VM913:2 <li>​…​</li>​
// VM913:2 <li>​…​</li>​
// const arr=[...temp];
// arr
// (3) [li, li, li]


// edit any attributes 
// console.log(temp[1].id);
// temp[1].id="second_h2";
// console.log(temp[1].id);



// css selector

// tagName

// const x=document.querySelector("h2");
// x
// <h2 id=​"second" class=​"third">​it is comming on Diwali ​</h2>​
// x.textContent=" i am fullStackdeveloper";
// // ' i am fullStackdeveloper'
// console.log(x.tagName);

// className

// const x=document.querySelector(".third");
// x
// <h1 style=​"background-color:​ orange;​ color:​ brown;​" id=​"frist" class=​"third">​…​</h1>


// id

// const x=document.querySelector("#frist");
// x
// <h1 style=​"background-color:​ orange;​ color:​ brown;​" id=​"frist" class=​"third">​…​</h1>​





// const list=document.querySelectorAll(".third");

// list
// NodeList(3) [h1#frist.third, h2#second.third, ul.third]
// list[0];
// <h1 style=​"background-color:​ orange;​ color:​ brown;​" id=​"frist" class=​"third">​…​</h1>​

// list[1];
// <h2 id=​"second" class=​"third">​it is comming on Diwali ​</h2>​
// list[2];
// <ul class=​"third">​…​</ul>​

// Diff b/w HTMLCollection and NodeList

// HTMLCollection is a live collection, which means that it automatically updates itself when the underlying document changes. For example, if you add a new element to the document that matches the criteria of the collection, it will be included in the collection immediately.
// NodeList, on the other hand, is a static collection, which means that it does not update itself when the document changes. If you add a new element to the document that matches the criteria of the NodeList, it will not be included in the NodeList unless you explicitly re-query the document.
