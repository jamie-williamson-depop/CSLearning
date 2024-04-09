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
  return Object.keys(objectToCheck).length === 0;
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

  const newObject = 
    {
      propertyName: {propertyName},
      propertyValue: {propertyValue}

    }
  return ;
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
  const clonedObject = {...objectToCopy}
  return clonedObject;
}

/*
    Implement a function which checks whether two objects are the same, 
    e.g. checkObjectsMatch({colour: 'red'}, {colour: 'red'}) should return true
    checkObjectsMatch({colour: 'red'}, {colour: 'red', shade: 'ruby'}) should return false
*/
function checkObjectsMatch(objectA: any, objectB: any) {
  return JSON.stringify(objectA) === JSON.stringify(objectB);
}

/*
    Implement a function which adds an object to an array IF a matching object is not already
    in the array
    e.g. addUniqueObjectToArray([{colour: 'red'}], {colour: 'blue'}) will return [{colour: 'red'}, {colour: 'blue'}]
    and addUniqueObjectToArray([{colour: 'red'}], {colour: 'red'}) will return [{colour: 'red'}]
*/
function addUniqueObjectToArray(objectArray: any[], objectToAdd: any) {
  let x;
  if ()
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

  
  return employee.;
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
  let sum = 0;
  for (let key in expenditures) {
    sum += expenditures[key];
  }

  return sum;
}

/*
  Implement a PrintCarDetails method on the following object such that when called it prints
  the car's make and model in a scentence
  e.g. for an object {make: 'Ford', model: 'Focus'} calling printCarDetails should return 'A new Ford Focus'
*/
const car = { make: "Ford", model: "Focus" };

car.printCarDetails = function () {
  return (
    `A new ${this.make} ${this.model}`
  )
}
/*
  For the following object representing a circle with the property 'radius' add a new property 'area'
  with a getter which calculates the property based on the radius
*/
const circle = { radius: 5, get area() {
  return 2 * this.radius;
} };
