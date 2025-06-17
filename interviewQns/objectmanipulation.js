const obj = { a: 1, b: 2, c: 3 };

console.log("Object.keys(obj)>>>", Object.keys(obj)); // ['a', 'b', 'c']
console.log("Object.values(obj)>>>", Object.values(obj)); // [1, 2, 3]

for (let values in obj) {
    console.log("key>>>", values); // 'a', 'b', 'c'
    console.log("obj[key]>>>", obj[values]); // 1, 2, 3    
}