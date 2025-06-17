//Rotate Array by K Elements 
//Left or right rotation 
// very IMPORTANT
function rotateArrayRight(arr,k,direction){
    k=k% arr.length; // Handle cases where k is greater than array length
    let newArr;
    if(direction=='right'){
       newArr=arr.splice(-k,k)
        arr.unshift(...newArr);
    }
    else{
        newArr=arr.splice(0,k);
        arr.push(...newArr);
    }
    return arr;
}

console.log(rotateArrayRight([1, 2, 3, 4, 5], 2, 'right')); // [4, 5, 1, 2, 3]
console.log(rotateArrayRight([1, 2, 3, 4, 5], 2, 'left')); // [3, 4, 5, 1, 2]