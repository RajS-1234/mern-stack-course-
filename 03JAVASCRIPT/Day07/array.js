// Array

// let marks1=100;
// let marks2=50;
// let marks3=70;
// let marks4=80;

// console.log(marks1,marks2,marks3,marks4);


// let marks=[100,50,70,80];


// // console.log(marks);
// // console.log(marks.length);

// let arr = [100,30,"Rohit",true];

// console.log(arr);

// Array indexing

// console.log(arr[0],arr[1],arr[2]);
// console.log(typeof arr);


// // mutubal

// arr[1]=90;
// console.log(arr);

// // push : Insert element at end


// arr.push(90);
// arr.push("Strike");


// console.log(arr);

// // pop operation: Delete element from end
// let x=arr.pop();
// console.log(x)
// console.log(arr);



// // Starting add kar sakta hu, delete the element at first place

// arr.unshift(10);
// arr.unshift(50);
// console.log(arr);

// // console.log(arr);

// // delete kar sakta hu

// arr.shift();
// console.log(arr);



// let arr = [10,30,50,90,11];

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }


// iterable loop

// for(let num of arr){
//     console.log(num);
// }



// const arr = [10,30,50,90,11];
// const arr2=arr;


// arr2.push(30);

// console.log(arr);
// Object(non primitive): Copy by reference hote hai
// Primitive: Copy by value


// const arr = [10,30,50,90,11];
// arr[2] = 30;




// console.log(arr);



// slice(start,end)

// const arr = [10,30,50,90,11];
// const arr2 = arr.slice(1,4);
// console.log(arr2);
// console.log(arr);
// const arr3=arr.splice(1,3,"rajneesh");
// console.log(arr3);
// console.log(arr);

// for(let num of arr.slice(0))
// {
//          console.log(num);
// }


// concat()

const arr1=[1,2,3,4,5];
const arr2=[7,8,9,10,11];
const arr3=[13,14,15,16,15];

const arr4=arr1.concat(arr2); // return a new Array
// console.log(typeof arr4);
// console.log(arr4);
// console.log(arr1.concat(arr2));

// const arr5=arr1.concat(arr2).concat(arr2).concat(arr3);
// console.log(arr5);




// spread operator
const arr6= [...arr1,...arr2,...arr3];
console.log(arr6); 




const names = ["Alice", "Rohit","Bob","Mohit", "Charlie","Bob"];

// tostring() - convert all element into single string 

console.log(names.toString());
console.log(names.join("-"));
console.log(names.indexOf("Bob"));
console.log(names.lastIndexOf("Bob"));
console.log(names.includes("Bobs"));


// sort() -- change actual array 
// reverse() -- change actual array

// console.log(names.sort());
// console.log(names);
// console.log(names.reverse());
// console.log(names);


// const a = ["101","90","80","32","91"];
// const arr = [10,"Rohit","Mohan",true];

// arr.sort();
// console.log(arr);

//sort(); // sort ye number nahi dhekhta hai as a character treat karta hai
// why make this type of rule



// const arr = [10,40,31,71,5,11];

// arr.sort((a,b)=> a-b);
// // ascending order

// arr.sort((a,b)=> b-a);

// 40,10
// a = 10
// b = 40
// 10,31, 40
// a = 10
// b = 31

// // -ve : pehle a aayega fr aayega
// // +ve: b aayega fr a aayge

// console.log(arr);




const arr = [10,30,50,[40,90,[60,19,99],11], 80]; // 2-Dimension Array

const a = arr.flat(Infinity); // new array return karta hai 
console.log(arr);
console.log(arr[0]);
console.log(arr[3]);
console.log(arr[3][2][1]);


// const a = [10,309,"Rohit",9.3, true];
// a.name = "Moahn";
// console.log(a);