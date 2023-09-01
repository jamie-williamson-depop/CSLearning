// There are 3 keywords for assigning a variable in js, can you return a list with them in?
export function keywordList() {
  return ['const', 'var', 'let'];
}

// Can you explain why we have the different keywords in comments here?
/*
const is used for when the variable name wont change 
var is for when the variable may differ 
let is used to reassign a const value in scope of a function
*/

// In general, we should assign all variables using which keyword?
export function variableAssignement() {
  return 'const';
}

// In general, we should avoid which keyword?
export function avoidVariableAssignment() {
  return 'var';
}
