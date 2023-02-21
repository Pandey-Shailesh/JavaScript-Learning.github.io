var User = {
    name : "",
    getUserName : function(){
        console.log(`user name is : ${this.name}`);
    },
};


var shailesh = Object.create(User);

// console.log(shailesh);

shailesh.name ="shailesh pandey"
shailesh.getUserName();


var sam =Object.create(User, {
    name:{value: "sammy"},
});
sam.getUserName();
