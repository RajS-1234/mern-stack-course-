// object
// key : value

// const user= {
//                name: " Rajneesh",
//                "age": 21,
//                "emailId": "rajneesh@gmail.com",
//                amout: 3400,
//                "home address": "Hathopur", 
//                0: "i am winner in world"
// }


// // CRUD operation: Create read update deletion
// // How to Access (read)

// console.log(user);
// console.log(user.age);
// console.log(user["age"]);
// console.log(user["home address"]);
// console.log(user[0]);
// console.log(user["0"]); 
// console.log(typeof user);


// // update

// user.aadhar=123456;
// user.age=22;
// console.log(user);


// // // delete

// delete user.emailId;
// console.log(user);



// const user = {
//                name: "Rajneesh",
//                age: 20,
//                emailId: "rajneesh@gmail.com",
//                amount: 3400,
// }

// copy reference

// const user2 = user;
// user2.age = 90;

// console.log(user);

// // Important

// console.log(Object.keys(user)); // Create a new array
// console.log(Object.values(user)); 
// console.log(Object.entries(user));


// for(let keys in user){
//                console.log(keys,user[keys]);
// }

// user.keys user["name"] user["age"]

// for of loop array ke

// for(let keys of Object.keys(user)){
//                console.log(keys)
// }

// also we can use as a indexing

// const arr=Object.keys(user);
// for(let i=0;i<arr.length;i++){
//                console.log(arr[i]);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }


// for(let x of Object.entries(user)) {
//             console.log(x);   
// } 
// console.log(Object.entries(user));



// const name = user.name;
// const age = user.age;


// // object ko destructing karna
// const {name:userName,age:userAge} = user;

// const arr = [10,20,40,90,11];

// const [first,second]= arr; // dout
// console.log(userName,userAge);
// console.log(first,second);




// // defining a function in object property

// const user = {
//         name: "Rohit",
//         age: 20,
//         emailId: "negi@gmail.com",
//         amount: 3400,
//         greeting: function() {
//            console.log(`Strike is coming on 18 october ${this.name}`);
//            return 20;
//         }
// }


// const user2 = {
//     name:"Mohan",
//     account:201,
//      greeting: function(){
//     console.log(`Strike is coming on 18 october ${this.name}`);
//     return 20;
//    }
// }
// this function used for instance object ,the scope of this is local function

// user2.greeting=user.greeting;
// const raj=user.greeting();
// console.log(raj);
// user2.greeting(); 

// user.greeting();
// console.log(user);



// nested object

const user ={
        name: "rajneesh",
        age: 20,
        emailId: "rajneesh@gmail.com",
        amount: 3400,
        address: {
            city: "Siwan",
            state: "Bihar",
        }
}


// const user2={...user};
// user2.name="Mohan";
// user.address.city="siwan oikhgv";
// console.log(user2);

// console.log(user);
console.dir(user);