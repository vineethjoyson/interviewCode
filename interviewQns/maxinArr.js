function maxinArr(arr) {
    let maxvalue = arr.reduce((acc, curr) => {
        if (curr > acc) {
            acc = curr
        }
        return acc;
    }, arr[0]);
    return maxvalue
}

function MaxUsingloop(arr) {
    let maxvalue= arr[0];
    for(let x in arr){
        if (arr[x]>maxvalue){
            maxvalue=arr[x]
        }
    }
    return maxvalue;
}
console.log("Reduce",maxinArr([1, 2, 3, 4, 5])); // 5
console.log("Reduce",maxinArr([10, 20, 30, 40, 50])); // 50
console.log("loop",MaxUsingloop([1, 2, 3, 4, 5])); // 5