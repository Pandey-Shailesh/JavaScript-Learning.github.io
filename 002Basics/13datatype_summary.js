//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

 const bigNumber = 3456543576654356754n
 const names = "shailu"


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "shailu",
    age: 18,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof myObj);
console.log(typeof myFunction);
console.log(typeof heros);


console.log(typeof userEmail);
console.log(typeof outsideTemp);
console.log(typeof isLoggedIn);
console.log(typeof scoreValue);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof names);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//===========================================Memory===============================================================

//stack (primitive) => we get the copy of that  declared values or variables  
//Heap (Non-Primitive)=>we get the reference of the original value 


//stack Memory
let instaName = "car_t_o_on"
let anothername = instaName
anothername= "shailesh"

console.log(instaName);
console.log(anothername);



//Heap Memory
let user1 ={
    email: "shailu@g.com",
    upi:"user@ybl",
}


let user2 = user1

user2.email ="user@google.com"

console.log(user1.email);
console.log(user2.email);
