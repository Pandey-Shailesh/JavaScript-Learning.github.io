//TODO: read about the new keyword form mdn dous.
var User  = function(firstname ,courseCount){
    this.firstname = firstname;
    this.courseCount =courseCount;
    this.getCourseCount = function(){
        console.log(`course count is: ${this.courseCount}`);
    };
};


User.prototype.getFirstName = function(){
    console.log(`your first name is :${this.firstname}.`);
};



var shailesh = new User("shailesh", 6);
// console.log(shailesh);

shailesh.getCourseCount();

if(shailesh.hasOwnProperty("firstname")){
    shailesh.getFirstName();
};


var vaibhav = new User("vaibhav", 16);
console.log(vaibhav);
vaibhav.getCourseCount();
vaibhav.getFirstName();