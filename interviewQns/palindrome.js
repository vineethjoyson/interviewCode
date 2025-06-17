function palindrome(data){
    if(data.split("").reverse().join("")==data){
        console.log("The string is a palindrome");
        return "its palindrome";
    }
    else{
        console.log("The string is not a palindrome");
        return "its not palindrome";
    }
}

console.log("its palindrome>>>>",palindrome("madam")); // its palindrome
console.log("its not palindrome>>>",palindrome("hello")); // its not palindrome