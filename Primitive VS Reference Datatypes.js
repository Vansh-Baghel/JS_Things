//Primitive Datatype

let number = 10;
let number_2 = number;
number = 15;
// Pass by value
console.log(number, number_2);

// Reference Datatype

let obj = { number: 10 };
let obj_2 = obj;

obj.number = 15;

/* Pass by reference means address will be passed instead of value. So the new value will 
be having same address but different value, and as address itself is passed therefore obj_2 will match. */

console.log(obj, obj_2);
