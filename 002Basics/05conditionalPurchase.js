// USER IS ONLY ALLOWED TO MAKE A PURCHASE WHEN HE IS:
// logged in
// email verified
// cardInfo -Valid
// If any one is missing,stop purchase 


var isLoggedIn =true;
var isEmailVerified =false;
var cardInfo =true;


// if(isLoggedIn){
//     console.log("Logged In Success.");
// }
// if(isEmailVerified){
//     console.log("Email is verified");
// }
// if (cardInfo) {
//     console.log("You can make a purchase.");
// }

if (isLoggedIn &&isEmailVerified && cardInfo) {
    console.log("Allow user to make a purchase.");
}else{
    console.log("You are not allowed to do that..");
}