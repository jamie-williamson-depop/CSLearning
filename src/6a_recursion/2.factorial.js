import { equal } from "assert";

/*
    A factorial of a number is the result of multiplying an integer by all the
    integers below it.

    Using recursion write a function that given a number n will return the 
    facotrial of n, n!

    e.g. factorial(1) = 1
    factorial(2) = 2
    factorial(3) = 6
    factorial(4) = 24
*/

function factorial(n) {}

console.log(factorial(1));
assert(factorial(1), 1);

console.log(factorial(2));
assert(factorial(2), 2);

console.log(factorial(3));
assert(factorial(3), 6);

console.log(factorial(4));
assert(factorial(4), 24);

console.log(factorial(8));
assert(factorial(8), 40320);

console.log(factorial(10));
assert(factorial(10), 3628800);
