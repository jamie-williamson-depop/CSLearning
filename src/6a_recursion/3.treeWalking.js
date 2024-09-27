import { equal } from "assert";
/*
    Given an object made up of objects with an id and a number of children use
    recursion to count the number of leaf nodes (the number of objects without any children of their own)

    For example, given the following tree object
    for an object: {id: 1, children: [{id: 2}, {id: 3}, {id: 4}]} the result should be 3
    for an object: {id: 1, children: [{id: 2, children: [{id: 3}]}]} the result should be 1
*/

function countLeafNodes(treeObject) {}

const tree1 = { id: 1, children: [{ id: 2 }, { id: 3 }, { id: 4 }] };
console.log(countLeafNodes(tree1));
equal(countLeafNodes(tree1), 3);

const tree2 = { id: 1, children: [{ id: 2, children: [{ id: 3 }] }] };
console.log(countLeafNodes(tree2));
assert(countLeafNodes(tree2), 1);

const tree3 = {
  id: 1,
  children: [
    { id: 2, children: [{ id: "2a" }, { id: "2b" }] },
    { id: 4, children: [{ id: "4a" }] },
    { id: 5 },
  ],
};
console.log(countLeafNodes(tree3));
assert(countLeafNodes(tree3), 4);
