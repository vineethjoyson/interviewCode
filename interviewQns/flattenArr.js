//its recurssive function to flatten an array
// Example: [1, 2, [3, 4, [5, 6]], 7] should return [1, 2, 3, 4, 5, 6, 7]
function flatteArr(arr){
let result = [];
for(let x in arr){
    if(Array.isArray(arr[x])){
        // result = result.concat(flatteArr(arr[x]));
        result.push(...flatteArr(arr[x])); // Using spread operator to flatten the array
    }
    else{
        result.push((arr[x]));
    }
}
return result;
}

console.log(flatteArr([1, 2, [3, 4, [5, 6]], 7])); // [1, 2, 3, 4, 5, 6, 7]