function fibinocci(n){
    first=0;
    second=1;   
    if(n===0) return first;
    if(n===1) return second;   
    let fibArray = [first, second];
    for (let i=2;i<=n;i++){
        let nextelement= first + second;
        first = second;
        second = nextelement;  
        fibArray.push(nextelement);
    }
return fibArray;

}
console.log("fibinocci>>>", fibinocci(0)); // [0]
console.log("fibinocci>>>", fibinocci(1)); // [0, 1]
console.log("fibinocci>>>", fibinocci(5)); // [0, 1, 1, 2, 3, 5]        

