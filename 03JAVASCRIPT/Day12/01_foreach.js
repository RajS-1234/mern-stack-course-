// foreach(call fun,index,Array)

 

// arr.forEach((number)=>{
//         console.log(number);       

// })

// object me key hota hai and key me function bhu ho sakta hai

// filter - org array me kuc selected element ko select karna chahta hu
// return a new array

// const arr=[10,20,30,40,50,60,70,80,90];
// const newArr=arr.filter((number)=> number >25);
// console.log(newArr);
// const obj= {
//       name : "Rajneesh kumar",
//       deposit : function(amount) {
//               console.log(amount); 
//       }         
// }
// obj.deposit();

// // filtering(callback)
// const compare=(number)=> number>25;
// Array.prototype.arr.filtering = function(compare) {
//            let ans=[]; 
//            for(let num of this) {
//                console.log(num);
//                if(compare(num)) {
//                   ans.push(num)     
//                }
//            } 
//            return ans;         
// }



// const newArr=arr.filtering((num)=>num>25);
// console.log(newArr);

// const a=[1,2,3,4,5,6,4,7,8];

// const answer=a.filtering((num)=>num>25);


// // map 


const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];


// const  newProduct = products.filter((product)=> product.price>50);
// console.log(newProduct);


// const  newProduct = products.filter((product)=> product.price>50).sort((a,b)=>b.price-a.price);
// console.log(newProduct);

// map

// const  newProduct = products.map((product)=> ({name: product.name,price : product.price}));
// console.log(newProduct);




const  newProduct = products.map((product)=> ({name: product.name,price : product.price}).sort((a,b)=>b.price-a.price));
console.log(newProduct);
 