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
};

// Property NAMES
const properties = Object.keys(restaurant.openingHours);
console.log(properties);

// Concatinating 2 variables.
let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(restaurant.openingHours);
console.log(values);

// Entire object with NAMES and VALUES
const entries = Object.entries(restaurant.openingHours);
console.log(entries);

// [key, value] and here the names of destructuring variables can also be anything like [days, instead of [key,
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
