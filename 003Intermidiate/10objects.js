var user  ={
    firstName : "Shailesh",
    lastName : "Pandey",
    role : "Admin",
    loginCount :32,
    facebookSignedIn :true,
};

console.log(user.firstName);
console.log(user["lastName"]);



user.loginCount = 44;

console.log(user.loginCount);

console.table(user);



var oppoReno8 ={
    RAM : "8gb",
    Storage :"125gb",
    Version :13,
    chargerType: "C",
    Color : "Golden",
    Camera : 45,
    display : "Amolat display",
};

console.table(oppoReno8);



