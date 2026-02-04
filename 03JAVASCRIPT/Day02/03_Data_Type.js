// Data types

// primitive data types

// number,string,boolean,undefined,null,bigint,symbol


//number

// let a = 10;
// let b = 2.36;
// console.log(a,b);
// console.log(typeof a);
// console.log(typeof b);


// // string

// let c = "Strike is coming";
// let d = 'Anjali';
// console.log(typeof d);
// console.log(c,d);



// // boolean

// let login = true;
// let f = false;
// console.log(typeof f);
// console.log(login, f);



// undefined

// let user;
// let x=undefined;
// console.log(typeof user);
// console.log(typeof x);
// console.log(x);
// console.log(user);

// // const p;

// var y;
// console.log(typeof y);
// console.log(y);
// console.log(user);



// bigint

// let num = 23216378261783213461n;
// console.log(typeof num);
// console.log(num);



// // null
// let weather = null;
// console.log(typeof weather);  // object Not a Null imp
// let weather = current_weather("Dwarka")

// // 25
// // null
// // undefined


//symbol

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(typeof id2);
// console.log(id2==id1);






// Non Primitive Data type



// array, object, function

// object

// Rohit 12312 18 gen

// user object type ke data contain kar raha hai
// object unorder and orderlist
// let user = {
//     name:"Rohit",
//     account:12312,
//     age:18,
//     category:'gen'

//         0:"Rohit",
//         1:12312,
//         2:18,
//         3:'gen'

//}
// console.log(typeof user);
// console.log(user)
// console.log(user['name'],x.age);
// console.log(Object.prototype.toString.call(user));


// arr

// array is a specail case of object
// array order list 

// let arr = [10,20,11,"Rohit",true];
// console.log(Object.prototype.toString.call(arr));
// console.log(typeof arr);
// console.log(typeof user);

// console.log(Array.isArray(arr));
// console.log(Array.isArray(arr));
// console.log(arr);

// defenetly it is an array but technicaly  it is a an object





// // function

// function is a specail case of object 

// let s =function add(){
//     console.log("Hello");
// }
// console.log(typeof s);
// console.log(s)


// // Function
// // Arr,OB,FUN-INTERNALLY OBJECT
// // why type of function is function not a object

// function f1()
// {
//         console.log("MysirG");
// }
// f1.x=10
// console.log(f1.x);
// console.log(f1 instanceof Object);
// console.log(f1 instanceof Function); // inheitance ho raha hai object ek type hai jiska ek subtype hai function
// console.log(f1 instanceof Array);
// console.log(f1);
// console.log(typeof f1);
// console.log(Object.prototype.toString.call(f1));



// function counter()
// {
//         counter.count++;
// }
// counter.count=0;
// counter();
// counter();
// counter();

// counter.showCount=function(){
//         console.log(counter.count);
// }

// counter.showCount();
// console.log(counter.count);
// f1 ek function and like x function ki bhi property ho sakti hai

// object ke pass property hota hai it means member variable 


// Concept of NULL 

// ham vaiable me value change karne ke sath sath data ke types bhi change karte hai

// internally har data ke piche tagging kiya jata this
// jab ham string Number lete hai to inke piche tagging kiya jata hai 

// iske piche prefix ke roop ke binary code likh diya jata hai wo ye 
// specify karta hai hai eska type kaya hai


// koi data object type ka hai 






// Primitive data type is immutable


// let a = 10;
// let b = a;

// b = 20;
// console.log(a,b);

// primitive Data types

// let str = "Rohit";
// str[0]='M';
// // str = "Mohan";
// console.log(str);


// Non primitive data type mutable

// let arr = [10,20,30,40];
// arr.push(90);
// arr[0] = 70;
// console.log(arr);
// let arr1=arr;

// console.log(arr1)  // Non-Primitive Data types copy the reference


// let obj ={
//     name:"Mohan",
//     age:20
// }
// Obj.name="Rajneesh";

// let obj2 = obj;

// obj2.name = "Rohan";

// console.log(obj);



