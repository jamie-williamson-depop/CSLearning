/* This file contains tasks on basic control flow in js
   Tasks will involve if statements, loops etc
*/

/*
    Write a function which whether a given number is even or odd
*/
export function evenOrOdd(number: number) {
  if (number % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
}

/*
    Rewrite the previous function using a ternary statement
*/
export function evenOrOddTernary(number: number) {}

/*
    Given an array of numbers, return an array with all of the numbers
    multiplied by 2
*/
export function doubleArray(numbers: number[]) {
  const numbers = [1, 2, 3, 4, 5];

  return;
}

/*
    Given a string return a reversed string without using any built in reversing functions
*/
export function reverseString(string: string) {
  return;
}

/*
    Given a maximum number, write a function to add all numbers until the total reachs the maximum number
    e.g. for a maximum number 4, we would sum 1, 2 and 3 before stopping and returning 6
*/
export function sumToMaximum(maximumNumber: number) {
  maximumNumber = 6;
  let i = 0;

  while (i < maximumNumber) {
    i = i + i;
  }

  return i;
}

/*
    Write a function which copies numbers from one array to another, stopping once you have moved the first odd number
*/
export function numberCopyUntilOdd(numbers: number[]) {
  return;
}

/*
    Write a function that takes a number, calls the squareNumber function provided
    and returns the original number and the answer in an array,
    e.g. for the number 2, we return [2, 4]
*/
function squareNumber(number: number) {
  return number * number;
}

export function numberSquarer(number: number) {
  return;
}
