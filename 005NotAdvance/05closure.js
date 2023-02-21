function inti() {
    var fname ="shailesh";
    console.log("I am init");
    function sayfname (){
        console.log(fname);
    }
   return sayfname;
}

var value = inti();

value();




function doaddition(x){
    return function(y){
        return x+y;
    }
}

var add5 =doaddition(4);
console.log(add5(5)); 


console.log(doaddition(4)(6));   //doaddition()()() //curring

