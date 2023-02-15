const uid ="abc123";

// uid ="12345";--> it shows the error.
var fullName= "Shailesh Pandey";
var firstName= "Shailesh";
var middleName= "Buddthinath"
var lastName="Pandey";
var email ="shailesh@gmail.com";
var password ="123456";
var confirmPassword ="123456";
var courseCount= 0;
var isLoggedInFromGoogle = false;

// fullName = prompt("Enter the fullName");-->it is used for insert the input to  the page and in that we also attached the some file 


console.log("Full Name is:"+fullName);   //-->1
console.log("email is:"+email);
console.log(uid);
console.log("the password is",password);//-->2

console.log(`
        with unique ID: ${uid}
        User first name is:${firstName}
        User middle name is:${middleName}             //-->3
        User last name is:${lastName}
        and his email is:${email}

`);
console.log(" 1 ,2 and 3 are use to print values of variable   ");