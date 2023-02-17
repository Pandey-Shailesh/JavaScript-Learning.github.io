var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count =1;

setInterval(() =>{
    if(count <= 1000){
    count++;
    counter.innerText = count;
    }
}, 1);

setTimeout(() => {
    followers.innerText ="Followers  in Instagram"
}, 5000);


// var counter = document.getElementsByTagName("h1");
// var followers = document.getElementsByClassName(".followers");

// let count =1;
// setInterval(() =>{
//     if(count <= 1000){
//             count++;
//             counter.innerText = count;
//             }
// }, 10);