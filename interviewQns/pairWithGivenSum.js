function sumOfpair(arr,sum){
    let pairArr=[];
    for(let x=0;x<arr.length;x++){
        // for(let x in arr){
        // console.log(x);
        for(let y=parseInt(x)+1;y<arr.length;y++){
            // console.log(arr[x], arr[y]);
            if(arr[x]+arr[y]==sum){
                pairArr.push([arr[x], arr[y]]);
            }
        }
    }
    return pairArr;
}

    console.log(sumOfpair([1, 2, 3, 4, 5], 5)); // [[1, 4], [2, 3]]
    console.log(sumOfpair([10, 20, 30, 40, 50], 70)); // [[20, 50], [30, 40]]


    /* In JavaScript, using a for...in loop on an array iterates over the property names (keys), which are strings representing the indices, not actual numbers.
So, if you write:
x will be "0", "1", "2", etc. (as strings)
When you use x+1, it becomes string concatenation, not numeric addition (e.g., "0"+1 is "01", not 1).
This causes bugs in your inner loop and comparisons.*/


function sumOfpair2(arr, sum) {
    let seen = new Set();
    let pairs = [];
    for (let num of arr) {
        let target = sum - num;
        if (seen.has(target)) {
            pairs.push([target, num]);
        }
        seen.add(num);
    }
    return pairs;
}

console.log(sumOfpair2([1, 2, 3, 4, 5], 5)); // [[4,1],[3,2]]
console.log(sumOfpair2([10, 20, 30, 40, 50], 70)); // [[30,40],[20,50]]