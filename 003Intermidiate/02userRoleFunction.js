/*

Define a function that can answer the role of a user.
a user can be on following roles:
admin - with all access
subadmin -with access to create / delete  courses.
testprep - with access to create / delete test
user - consume all content
other - trial user .


Input: getuserRole(name,role);
*/

var getuserRole =function (name,role) {
// function getuserRole(name,role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
           
        case "subadmin":
            return `${name} is subadmin with access to create / delete  courses. `;
          
        case "testprep":
            return ` ${name} is testprep with access to create / delete test`;

        case "user":
            return `${name} is user to consume all content`;
        
        default:
            return `${name} is a trial user`;
            break;  //it is not necessary.
 }
}



console.log(getuserRole("Shailesh","avc"));

//Or

var getRole = getuserRole("hitesh","user");
console.log(getRole);