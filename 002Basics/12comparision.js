// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


//Please avoid that type of comparisions (also remember that we want clean code ) always try to compare the same data type variables 

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

/*
 NOTE: the reason is that an equality check == and comparisons > < >= <= works different 
 Comparisons convert null to a number, treating it as 0.
 That's why line no.15 null >= 0  is true and line no.13 null > 0 is false
 */

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === 

console.log("2" === 2); 

//Equality check  
//read more on mdn 