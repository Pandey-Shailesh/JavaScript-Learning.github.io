fetch('https://api.chucknorris.io/jokes/random')
    .then((response)=>{
        return ("response:",response.json());
    })
    .then((data)=>{
        // console.log("data:",data.value);
        var joke =data.value;
        console.log(joke);
    })
    .catch();