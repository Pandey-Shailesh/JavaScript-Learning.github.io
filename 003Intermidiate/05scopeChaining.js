var myname ="Shailesh";

console.log(myname);

function sayName() {
    // var myname="Mr. S";
    console.log(myname);
    sayNameTwo();

    function sayNameTwo(){
        var myname="Mr. SP";
        console.log(myname);
    }
}

sayName();