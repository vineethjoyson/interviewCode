function isPrime(n) {
    if (n <= 1) return false;
    console.log(`Math.sqrt(${n})`,Math.sqrt(n));
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7));  // true
console.log(isPrime(15)); // false
console.log(isPrime(97)); // true