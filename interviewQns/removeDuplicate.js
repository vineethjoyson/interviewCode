function removeDuplicates(arr){
let uniqueArr = [...new Set(arr)];
return uniqueArr
}

console.log("removeDuplicates>>>",removeDuplicates([1, 2, 3, 4, 5, 5, 6, 7, 8, 8])); // Set { 1, 2, 3, 4, 5, 6, 7, 8 }

function removeDuplicatesFilter(arr) {
    let uniqueArr=arr.filter((x,index)=>arr.indexOf(x)===index);
    console.log(uniqueArr);
    return uniqueArr;
}
console.log("removeDuplicatesFilter>>>",removeDuplicatesFilter([1, 2, 3, 4, 5, 5, 6, 7, 8, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]


function removeDuplicatesLoop(arr) {
    let uniqueArr=[]
    for (let x in arr) {
        if(!uniqueArr.includes(arr[x])){
            uniqueArr.push(arr[x]);
        }
    }
    return uniqueArr;
}

console.log("removeDuplicatesLoop>>>",removeDuplicatesLoop([1, 2, 3, 4, 5, 5, 6, 7, 8, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]

function removedDuplicatesInplace(arr) {
let SetElm= new Set();
for(let i=0; i<arr.length; i++){
if(SetElm.has(arr[i])){
    arr.splice(i,1)
    i--
}else{
    SetElm.add(arr[i]);
}
}
return arr;
}
console.log("removedDuplicatesInplace>>>",removedDuplicatesInplace([1, 2, 3, 4, 5, 5, 6, 7, 8, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]


function removeDuplicatesReduce(arr){
    let uniqueArr=arr.reduce((acc,curr)=>{
        if (!acc.includes(curr)){
            acc.push(curr);
        }
        return acc;
    },[])
    return uniqueArr;
    }

    console.log("removeDuplicatesReduce>>>",removeDuplicatesReduce([1, 2, 3, 4, 5, 5, 6, 7, 8, 8])); // [1, 2, 3, 4, 5, 6, 7, 8]