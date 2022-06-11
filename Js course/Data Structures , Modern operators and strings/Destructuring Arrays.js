"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // Dont forget to put square bracket outside "this" keyword.
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

// Destructuring arrays
let arr = [2, 3, 6];
let [x, y, z] = arr;
console.log(x, y, z);

// Swapping
[x, y] = [y, x];
console.log(x, y, z);

// Nested destructuring
let arr1 = [1, 42, [31, 41, 6, 7]];
let [i, , [j, , k]] = arr1;

console.log(i, j, k);

// Using array to order an item from object
let [starter, main] = restaurant.order(2, 0);
console.log(starter, " , ", main);

// Setting default value
let [a, b = 1, c = 1] = [3];
console.log(a, b, c);
