function firstNonRepeating(str) {
    let arr = str.split('');
    let count = {};
    for(let x of arr){
        count[x] = count[x]? count[x] + 1 : 1;
    }
    console.log("count", count);
    for(let x of arr){
        if(count[x] === 1){
            return x;
        }
    }

}

console.log(firstNonRepeating("swiss")); // "w"
console.log(firstNonRepeating("hello")); // "h"         