const myStates = ["YouTube",
"Instagram" ,
"Facebook",
"Netflix",
"Amazon "
];

for(const n of myStates){
    console.log(n);
}

const symbols ={
    yt : "YouTube",
    ig :"Instagram",
    fb :"Facebook",
    lco : "LearnCodeOnline.in",
};

for(const n in  symbols){
    console.log(`Key is: ${n} and value is : ${symbols[n]}.`);
}
