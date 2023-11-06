/*
    This files contains a number of questions to test your understanding
    of arrays and their features, and challenge you to think in arrays
*/

/*
    Implement the following function to create a new array and return it
*/
export function createList() {
  const list = []
  return list;
}

/*
    Implement the following function to create a new array with a length specified
    by the parameter 'length', and fills it with 0s
    e.g. calling createZeroFilledList(3) should return [0,0,0]
*/
export function createZeroFilledList(length: number) {

  const zeroArray = Array(length).fill(0)

  return zeroArray
}

/*
    Implement the following function so it returns the first two elements
    of any array it is passed.
    e.g. calling getFirstTwoElements(['a', 'b', 'c', 'd']) should return ['a', 'b']
*/
export function getFirstTwoElements(list: any[]) {
  list.slice(0,2)

  return list;
}

/*
    Implement the following function so it returns the final two elements of any
    array it is passed.
    e.g. calling getFinalTwoElements(['w', 'x', 'y', 'z']) should return ['y', 'z']
*/
export function getFinalTwoElements(list: any[]) {
  const lastElement = list.slice(- 1);
  const secondToLastEl = list.slice(-2);

  const result = lastElement && secondToLastEl

  return result;
}

/*
    Implement the following function so that it returns the number of vowels in a
    given word passed to it. This implementation should not use any array functions
    (map, reduce, foreach etc)
    e.g. calling vowelCount('hello') should return 2
*/
export function vowelCount(word: string) {
 const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  
  for(let i=0; i < word.length; i++) {
    if(vowels.includes(word[i])) {
      count += 1;
    }
  }
  return count;
}

/*
    Implement the following function so that it returns the number of vowels in a
    given word passed to it. This implementation should be written using a forEach
    e.g. calling vowelCountForEach('hello') should return 2
*/
export function vowelCountForEach(word: string) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  vowels.forEach((vowel) => {
   if(word.includes(vowel)) {
    count +=1;
   }
  })

  return count;
}

/*
    Implement the following function so that, given an array of numbers, it returns
    an array with each of those numbers squared. This should not use any array functions
    (map, reduce, foreach etc)
    e.g. calling numberSquarer([1, 2, 3, 4]) should return [1, 4, 9, 16]
*/
export function numberSquarer(numberList: number[]) {
  let result = []
  
  for(let i=0; i < numberList.length; i++) {
     result.push(Math.pow(numberList[i], 2));

  }
  return result;
}

/*
    Implement the following function so that, given an array of numbers, it returns
    an array with each of those numbers squared. This should use a mpa function
    e.g. calling numberSquarer([1, 2, 3, 4]) should return [1, 4, 9, 16]
*/
export function numberSquarerMap(numberList: number[]) {

  return numberList.map((number) => Math.pow(number, 2));
}

/*
    Implement the following function so that, given an array of numbers it returns the
    sum of each number. This should not use any array functions (map, reduce, foreach)
    e.g. calling summer([1,2,3,4,5]) should return 15
*/
export function summer(numberList: number[]) {
  let sum = 0;

  for(let i=0; i < numberList.length; i++) {
    sum += numberList[i];
  }

  return sum;
}

/*
    Implement the following function so that, given an array of numbers it returns the
    sum of each number. This should use a reduce function.
    e.g. calling summer([1,2,3,4,5]) should return 15
*/
export function summerReduce(numberList: number[]) {
 let sum = numberList.reduce((total, index) => {
    return total + index;
  });

  return sum;
}

/*
  Implement the following function such that it returns true if every value in the supplied
  list is even, and false otherwise. Use the 'every' array function
  e.g. calling isAllEven([2,4,6,8]) should return true, calling isAllEven([2,4,6,9]) should return false
*/
export function isAllEven(numberList: number[]) {

  return numberList.every((number) => number % 2 === 0 );
}

/*
  Implement the following function such that it returns true if any value in the supplied
  list is even, and false otherwise. Use the 'every' array function
  e.g. calling isAnyEven([1,3,5,8]) should return true, calling isAnyEven([1,3,5,9]) should return false
*/
export function isAnyEven(numberList: number[]) {

  for(let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 === 0) {
      return true 
    }
     else false
  }
  return;
}
