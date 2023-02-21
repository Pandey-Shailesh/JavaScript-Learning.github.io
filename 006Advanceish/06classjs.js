class User  {
constructor(name ,email){
this.name =name;
this.email = email;
}
#courseList =[];    //private
getInfo(){
    return { name: this.name , email: this.email};
}
enrollCourse(name){
    this.#courseList.push(name)
}
getCourseList(){
    return this.#courseList;
}
 login(){
    return "you are logged in"
}
}




module.exports =User;

const rock = new User("abhi","abhi@123.com");
// console.log(rock.getInfo());
rock.enrollCourse("angular course");
// console.log(rock.courseList);
// console.log(rock.getCourseList());



class SubAdminInfo extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am SubAdmin";
    }
    login(){
        return "I am admin only"
    }
}

const tom = new SubAdminInfo("tom","tom@jerry.com");
console.log(tom.getInfo());
console.log(tom.login());
console.log(tom.getAdminInfo());