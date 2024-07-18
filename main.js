
//Reverse a String
var str = "Hello, kings!";
var output = str.split('').reverse().join('');

console.log(output);


//Create a function that counts the number of characters in a string.
var string = "Hello, kings!"; 
var output = {};
for(let i = 0; i < string.length; i++) {
    var ch = string[i];
    if (!output[ch]) {
        output[ch] = 0;
    }
    output[ch]++;
}
console.log(output);



//Implement a function that capitalizes the first letter of each word in a sentence.
const capitalized = function (sentence) {
    let str = sentence.split(' ');
    for(let i=0; i<str.length; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substring(1);
    }
    return str.join(' ');
}
console.log(capitalized('hardwork has no alternative'));



//Determine maximium and minimium Value.
let numbers = [3, 7, 7, 2, 8, 5, 9, 1];
let max = Math.max(...numbers);
let min = Math.min(...numbers);
console.log('Max: ${max},Min: ${min}');



// Create a function that calculates the sum of all elements in an array.
function sum(arr) {
    let sum = 0;
    for(let a of arr)
        sum += a;
    return sum; 
}
console.log(sum(arr));



// Implement a function that filters out elements from an array based on a given condition.
var number = [1, -1, 2, 3];
const filtered = numbers.filters(function(x){
return x >= 0;
});
console.log(filtered);



// factorial of a number.
function factorial(n){
if(n = 0){
    return 1
}
else{
    return factorial(n-1) * n
}
}
console.log(factorial(10));



// check if a number is prime or not.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}



// Implement a function to generate the Fibonacci sequence up to a given number of terms.
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...
function fibonacci(number) {
    let n1 = 0;
    let n2 = 1;
    let next;
    next = n1 + n2;
    const sequence = [];
    while (next <= number) {
        sequence.push(next);
        n1 = n2;
        n2 = next;
    next = n1 + n2;
    }
    return sequence;
}
fibonacci(30)
