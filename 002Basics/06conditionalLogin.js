// Allow user to access course if he is:
// logged in from email
// logged in from facebook
// logged in from google


var email =true;
var facebook =false;
var google =false;





if (email || facebook || google) {
    console.log("Login Success");
}else{
    console.log("Login Unsuccess");
}

