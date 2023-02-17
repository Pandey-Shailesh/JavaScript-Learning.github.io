var user  ={
    firstName : "Shailesh",
    lastName : "Pandey",
    role : "Admin",
    loginCount :32,
    facebookSignedIn :true,
    courseList :[],
    buyCourse : function(courseName){
        this.courseList.push(courseName);
    },
    getCourseCount:function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length}. `;
    },
    info:function(){
       return `First name is ${this.firstName} ,Last NAme is ${this.lastName} with role ${this.role} ,
                    loginCount is given as ${this.loginCount} 
                    facebook Signed in is given as ${this.facebookSignedIn}
                    course count is ${this.buyCourse()}
                 ${this.getCourseCount()}....`;
    },
};

var courseList =true;
console.log(user.facebookSignedIn);

console.log(user.getCourseCount());
user.buyCourse("React Js Course");
user.buyCourse("Angular Course");

console.log(user.getCourseCount());
console.log(user.info());

