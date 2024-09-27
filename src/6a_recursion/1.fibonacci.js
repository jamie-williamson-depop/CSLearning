import { equal } from "assert";

/*
    Using recursion define a function that will return the nth number in the 
    fibonacci sequence (0,1,1,2,3,5,8 etc).

    e.g. fibonacci(2) should return 1
    fibonacci(5) should return 5
    fibonacci(6) should return 8
*/

function fibonacci(n) {
  return n;
}

console.log(fibonacci(2));
equal(fibonacci(2), 1);

console.log(fibonacci(5));
equal(fibonacci(5), 5);

console.log(fibonacci(8));
equal(fibonacci(8), 21);
