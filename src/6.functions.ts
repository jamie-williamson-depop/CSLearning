/* There are two main ways to make functions in JS, using the function keyword or arrow functions
   In the space below please implement a function which squares a given number in each manner
*/

// function1 here
function squareOne (n: number) {
    return (n * n)
}

//function 2 here
const squareTwo = (n: number) => {
    return (
        n * n
    )

}

/* Please explain what the difference between the following three onChange props are,
   What would you expect to happen when the onClick is trigger for either case
*/

// case 1:
<Select onChange={handleChange} />
// This is a a reference to the function but doesn't call the function.

// case 2:
<Select onChange={handleChange()} />
// This is an immeditely invoked function expression which will run as soon as it's defined.

// case 3
<Select onChange={() => handleChange()} />
// This delays the call to the function 
 

// Given the following code what will the output to the console be?
let a = 5;
const squarer = (number: number) => {
    number = number * number;
    console.log(number);
}
squarer(a);
console.log(a);
// 25
// 5

// Given the following code what will the output at the console be?
let b = {name: 'Martin', position: 'AM'};
const retrainAsCb = (obj: any) => {
    obj.position = 'CB'
    console.log(obj);
}
retrainAsCb(b);
console.log(b);
// { name: 'Martin' position: 'CB'}

// SCOPE
// Given the following code what will the output in the console be?
const c = 'Hello';
const printer = () => {console.log(c)};
printer();
'Hello'

// Given the following code what will the output in the console be?
// const helloWorld = () => {
//     let str = 'helloWorld';
//     console.log(str);
// }

// console.log(str);
Empty console


// Given the following code what will the output in the console be?
// const testPrinter = () => {
//     const printMachine = () => {
//         const str1 = 'Hi there';
//         console.log(str1);
//     }

//     printMachine();
//     console.log(str1);
// }

// testPrinter();
'Hi there'

 /*
    complete the following function such that it takes a number and returns a function that will multiply
    any inputted number by the original number
 */
function multiplierFactory(multiplierNumber: number) {
    const sum = (multiplierNumber * number) => {
    return sum
    }
}

/*
    The fibonacci sequence is constructed by adding the preceding two number together to get a new one
    starting from 0 and 1, the first six elements of the sequence would be 0,1,1,2,3,5 and so on
    reference: https://en.wikipedia.org/wiki/Fibonacci_sequence

    Complete the two following function implementations to calculate the sum of the fibonacci sequence to n digits
    where n is a paramter passed to the functions.

    e.g. sumFibonacci(5) should return 7 (7 being 0 + 1 + 1 + 2 + 3)

    The first implementation should be a standard implementation, the second one should make use of recursion
*/

function sumFibonacciStandard(n: number) {
    let a = 1;
    let b = 0;
    

   while ( n >= 0 ) {
    let temp = a;
    a = a + b;
    b = temp;
    n--;
   }
   return b
};

function sumFibonacciRecursive(n: number) {
    while ( n >= 0 ) {

    }
    return 

}

// Given what you know about scope and functions what would you expect to happen when you run the following code
/*
 printHelloWorld();

 const printHelloWorld = () => {
    console.log('Hello World');
 }
*/
'Nothing as the function cannot be called before its initialized' 
