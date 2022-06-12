// Shortcircuiting OR, AND & Nullish operators
const rest1 = {
  name: "Capri",
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// 0 and 10 , it'll print 10 as 10 is true
/* rest1.numGuests ||= 10;              
// It'll print 10 as numguest doesnt exist.
rest2.numGuests ||= 10;
console.log(`OR op`, rest1, rest2); */
// nullish assignment operator (null or undefined)

// Here, rest1 is 0 and 10 , therefore it'll print first value ie 0
rest1.numGuests ??= 10;
// rest2 is undefined therefore it'll print another value
rest2.numGuests ??= 10;
console.log(`NULL op`, rest1, rest2);

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';
// First value false means it'll stop here itself and return first.
rest1.owner &&= "<ANONYMOUS>";
// Both true, therefore will return 2nd
rest2.owner &&= "<ANONYMOUS>";

console.log(rest1);
console.log(rest2);
