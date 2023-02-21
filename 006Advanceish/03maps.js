var myMap = new Map();


myMap.set(1,"Uno");
myMap.set(2,"dos");
myMap.set(3,"Tres");
myMap.set(4,"cuatro");

console.log(myMap);



// for(let key of myMap.keys()){
//     console.log(`key is ${key}`);
// }

// for(let value of myMap.values()){
//     console.log(`key is ${value}`);
// }

for(let [key,value] of myMap){
    console.log(`key is ${key} and the values: ${value}`);
}

// myMap.forEach((key) => console.log(`${key}`));

// myMap.forEach((value) => console.log(`${value}`));


myMap.forEach((v,k)=>console.log(`value is ${v} and key is ${k}`));


myMap.delete(2);
console.log(myMap);




