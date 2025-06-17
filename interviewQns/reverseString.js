function reverseSttring(data){
    let resp=data.split("").reverse().join("");
    console.log(resp)
    return resp;
}

console.log(reverseSttring("Hello World!"))