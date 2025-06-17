function factorial(n){
    if(n===0) return 1; // base case
    if(n<0) return "undefined"; // negative numbers do not have factorial
    let fact=n*factorial(n-1);
    return fact;
}

console.log("factorial>>>", factorial(0)); // 1
console.log("factorial>>>", factorial(1)); // 1         
console.log("factorial>>>", factorial(5)); // 120
console.log("factorial>>>", factorial(10)); // 3628800

function factorialIterative(n) {
    if (n < 0) return "undefined"; // negative numbers do not have factorial
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("factorialIterative>>>", factorialIterative(0)); // 1
console.log("factorialIterative>>>", factorialIterative(1)); // 1
console.log("factorialIterative>>>", factorialIterative(5)); // 120
console.log("factorialIterative>>>", factorialIterative(10)); // 3628800