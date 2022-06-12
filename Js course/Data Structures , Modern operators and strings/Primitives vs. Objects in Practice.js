// Primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName); // Davis Williams

// Reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica); // Jessica Davis because the change is directly into ID.
console.log("After marriage: ", marriedJessica); // Jessica Davis
// marriedJessica = {};

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
  family: ["Alice", "Bob"],
};

const jessicaCopy = Object.assign({}, jessica2); // Empty object is to store the jessica2 into its ID.
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");

console.log("Before marriage:", jessica2);
console.log("After marriage: ", jessicaCopy);
/*  Before marriage: { firstName: 'Jessica', 
  lastName: 'Williams', 
  age: 27, 
  family: [ 'Alice', 'Bob', 'Mary', 'John' ] } 
  ​​​​​at ​​​​​​Primitives vs. Objects in Practice.js:33:1​
 
After marriage:  { firstName: 'Jessica', 
  lastName: 'Davis', 
  age: 27, 
  family: [ 'Alice', 'Bob', 'Mary', 'John' ] }  */
