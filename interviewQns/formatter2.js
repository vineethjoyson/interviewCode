/*// Input: 
{ a: 1, b: 2 } 
// Output: 
[["a", 1], ["b", 2]]*/
function objecttoArr(data){
    let newarr=Object.entries(data)
    return newarr;
}

console.log(objecttoArr({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]

function arrtoObject(data){
    let newobj=Object.fromEntries(data);
    return newobj;
}   

console.log(arrtoObject([["a", 1], ["b", 2]])); // { a: 1, b: 2 }
// Input:           

/*
// Input: 
[{ a: 1 }, { b: 2 }, { c: 3 }] 
// Output: 
{ a: 1, b: 2, c: 3 } */

function arrtoObject2(data){
    let newObj=data.reduce((acc,curr)=>{
        acc={...acc, ...curr}
        return acc;
    },{})
    return newObj;
}

console.log(arrtoObject2([{ a: 1 }, { b: 2 }, { c: 3 }])); // { a: 1, b: 2, c: 3 }

function filterNullAndUncefined(data){
    let newObj=Object.keys(data).reduce((acc,curr)=>{
        if(data[curr]!=null||data[curr]!=undefined){
            acc[curr]=data[curr];
        }
        return acc;
},{})
return newObj;
}

console.log(filterNullAndUncefined({ a: 1, b: null, c: 3, d: undefined })); // { a: 1, c: 3 }