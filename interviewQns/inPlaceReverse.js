function reverseFn(str){
let data = str.split("");
    let start=0;
    let end=data.length-1

while(start<end){
    let temp=data[start]
    console.log("temp",temp)
    data[start]=data[end]
    data[end]=temp
    console.log("data",data)    
    start++
    end--
}
    return data.join("");
}

console.log(reverseFn("hello")); // "olleh"
console.log(reverseFn("world")); // "dlrow"