tipper("80");

function tipper(a){
    var bill = parseInt(a);
    console.log(bill + 5);
}

//TODO: read about Context from google

// bigtipper("200");
// var bigtipper =function (a){                ------->It is work in global context because bigtipper is var value now .
//     var bill = parseInt(a);
//     console.log(bill + 15);
// }

function bigtipper (a){             
    var bill = parseInt(a);
    console.log(bill + 15);
}
bigtipper("200");

console.log(name);

var name ="shailesh";

function sayName(){
    var name ="MR. S";
    console.log(name);
}

sayName();
console.log(name);