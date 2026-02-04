// String--> Number

// let z = "120";
// let a = Number(z);
// console.log(a);
// console.log(typeof(a))


// let a = "121ac";
// let b = Number(a);
// console.log(b); // NaN
//  console.log(typeof b);
 // NaN: Not a number(Type of it is number)


// let a = true;
// console.log(Number(true));
// console.log(Number(false));


// console.log(Number(null));
// console.log(Number(undefined));

// null--> 0
//  undefined-->NaN


// Number -> String

// let a=10;
// let b=String(a);
// console.log(b);
// console.log(typeof b);
// "true"
// true

//console.log(typeof String(undefined));


// Boolean convert karunga

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(null));

// 1: null is loosely equal to undefined only


console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null=="");
console.log(null==false);
console.log(null==true);

// double equal(==) does'nt consider data types ,it try to convert the data
// tripple equal(===) it consider data types of variable ,yani dono ka data type same hona chahiye tab compare hoga


// null and undefined both are the same 





// console.log(null==undefined);

// in JavaScript, both null and undefined represent the absence of a value.
// undefined usually occurs when a variable is declared but not assigned a
// value, whereas null is explicitly assigned to indicate no value. Because 
// of this similarity, the double equals operator considers them equal, making 
// it easier to compare them. That’s why they’re treated as equal in this context.



// console.log(null==0);

// Essentially, you could say that null represents the absence of a value,
//  kind of like a pointer that doesn’t reference any memory address. On the 
//  other hand, 0 is an actual numeric value. Because of this distinction, 
//  null and 0 are not considered equal in JavaScript. This difference arises 
// from how JavaScript handles internal representation and its type system.