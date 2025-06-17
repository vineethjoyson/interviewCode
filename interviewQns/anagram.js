function anagram(str1,str2){
    if(str1.split("").sort().join("") === str2.split("").sort().join("")){
        return true;
    }   
    return false;
}

// Test cases
console.log(anagram("listen", "silent")); // true       

console.log(anagram("triangle", "integral")); // true