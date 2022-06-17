const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 13,
      close: 23,
    },
    sat: {
      open: 12,
      close: 11,
    },
  },

  // Dont forget to put square bracket outside "this" keyword.
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Dont forget to put curly braces to the parameters here because they are objects too.
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order received ${this.starterMenu[starterIndex]} & ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}`
    );
  },
};

// These properties(variables inside the object) dont need to match with the upper functional parameter.
restaurant.orderDelivery({
  time: "22:30",
  address: "Via del Sole, 21",
  mainIndex: 2,
  starterIndex: 2,
});

// We use curly braces to define the property names.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

// Changing property names by assigning new names and this can be done on the LHS only.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables (Changing variables)
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// If curly braces nhi hota, then it wouldve stored the a,b new values in b and a woulve been 111 only.
({ a, b } = obj);
console.log(a, b);

// Nested objects
// Here we are also assigning the variables to the given object which is not necessary.
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

console.log(name);
