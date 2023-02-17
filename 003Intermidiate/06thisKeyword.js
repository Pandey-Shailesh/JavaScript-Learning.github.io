//TODO: part 1 for this keyword


console.log(this);
 var game ="football";

 function sayName(){
    var name = "shailesh";
    console.log(this);
 }
 sayName();


 //part 2 for this Keyword


 console.log(this);

 var user ={
   firstName :"Shailesh",
   courseCount:4,
   getCourseCount: function(){
      console.log("Line 23", this);
      function sayHello(){
         console.log("hello");
         console.log("line 26",this);
      }
      sayHello();
   },
 };
 user.getCourseCount();