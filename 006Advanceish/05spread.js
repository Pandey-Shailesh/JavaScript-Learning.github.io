// var returnedValue = Math.max(2,3,4,5,6,7,8,9);
// console.log(returnedValue);

// var myObj= {};
// Object.assign(myObj,{a: 1, b: 2 ,c: 3},{z:9, y:8 ,x:7});
// console.log(myObj);


function sumOne(a,b){
    return a+b;
}
// console.log(sumOne(2,3));

var myA =[5,4];
// console.log(sumOne(myA));
// console.log(sumOne(...myA));   //spread Oper.



function sumTwo(a,b,...args){
    console.log(args);
    let multi =a*b;
    let sum = 0;
    for(const arg of args){
        // sum = sum + arg;
        sum += arg;
    }
    return [sum,multi];
}
console.log(sumTwo(2,3,4,5,5,667));