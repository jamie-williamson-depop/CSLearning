/*
    This files contains a number of questions to test your understanding
    of objects and their features, and challenge you to think in objects
*/

/*
    Implement the following function that checks if an object is empty (withaout any properties or methods)
    Return true if it is empty and false if it is not
    e.g. checkEmpty({}) returns true, checkEmpty({colour: 'red'}) returns false
*/
function checkEmpty(objectToCheck: any) {
  return;
}

/*
    Implement the following function which accepts an object, a property name, and a value for that property
    and returns the object with that new property added
    e.g. setProperty({colour: red}, 'shade', 'ruby') should return {colour: 'red', shade: 'ruby'}
*/
function setProperty(
  baseObject: any,
  propertyName: string,
  propertyValue: string
) {
  return;
}

/*
    Given the following set of instructions being run, what would you expect the value
    of a, b, and c to be at the end of it
*/
function testValues() {
  const a = { make: "Ford", model: "Fiesta" };
  const b = a;

  a.model = "Focus";
  const c = { ...a };

  a.model = "Ka";
}

/*
    Implement a function that will return an exact duplicate of the original object passed in
*/
function objectCopy(objectToCopy: any) {
  return;
}

/*
    Implement a function which checks whether two objects are the same, 
    e.g. checkObjectsMatch({colour: 'red'}, {colour: 'red'}) should return true
    checkObjectsMatch({colour: 'red'}, {colour: 'red', shade: 'ruby'}) should return false
*/
function checkObjectsMatch(objectA: any, objectB: any) {
  return;
}

/*
    Implement a function which adds an object to an array IF a matching object is not already
    in the array
    e.g. addUniqueObjectToArray([{colour: 'red'}], {colour: 'blue'}) will return [{colour: 'red'}, {colour: 'blue'}]
    and addUniqueObjectToArray([{colour: 'red'}], {colour: 'red'}) will return [{colour: 'red'}]
*/
function addUniqueObjectToArray(objectArray: any[], objectToAdd: any) {
  return;
}

/*
    Implement a function which takes an object and returns all of its properties in a html list,
    it should work for any number of properties
*/
function getEmployeeDetailsList(employee: {
  name: string;
  age: number;
  position: string;
}) {
  return;
}

/*
    Implement a function which when given an object containing a companies expenditure on each area in a month
    will return a summed value. It should work for any number of properties.
*/
function getTotalMonthlyExpenditure(expenditures: {
  wages: number;
  rent: number;
  materials: number;
}) {
  return;
}

/*
  Implement a PrintCarDetails method on the following object such that when called it prints
  the car's make and model in a scentence
  e.g. for an object {make: 'Ford', model: 'Focus'} calling printCarDetails should return 'A new Ford Focus'
*/
const car = { make: "Ford", model: "Focus" };

/*
  For the following object representing a circle with the property 'radius' add a new property 'area'
  with a getter which calculates the property based on the radius
*/
const circle = { radius: 5 };
