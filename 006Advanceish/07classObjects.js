// import User from "./06classjs";

const User = require("./06classjs.js");

const shailu = new User("shailesh","shailesh@gmail.com")

console.log(shailu.getInfo());

// console.log(shailu.getInfo().email);

shailu.enrollCourse("js course");
shailu.enrollCourse("java course");


console.log(shailu.getCourseList());


let corses = shailu.getCourseList();
corses.forEach((c)=>console.log(c));
