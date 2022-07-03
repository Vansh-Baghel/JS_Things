let dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
/* 
let recommendedFood = dogs.weight ** 0.75 * 28;
let dogsFood = function (rec) {
  rec.map((dog) => (dog.recFood = dog.weight ** 0.75 * 28));
};
dogsFood(dogs);
console.log(dogs);
 */
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// 2.
/* Wrong output! :( */
/* let b = dogs.find((name) => (name.owners = "Sarah"));
let c = b.curFood > b.recFood ? "More" : "Little";
console.log(c);
 */

let dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog eat too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

// 3.
// Nice try but got alot confused
/* let i = dogs.forEach((dog) =>
  dog.curFood > dog.recFood
    ? `ownersEatTooMuch = ${dog.owners}`
    : `ownersEatTooLittle = ${dog.owners}`
);

console.log(i);
 */

/* Here we want to create a new array after filter of filtered elements , so use of map is best , 
we use flatMap to get the properties out of the array */
let ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((obj) => obj.owners);
console.log(ownersEatTooMuch);

let ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((obj) => obj.owners);
console.log(ownersEatTooLittle);

// 4.
/* replace and split cant be used as its not string , its an array */
console.log(`${ownersEatTooMuch.join(" and ")} dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")} dogs eat too little`);

// 5.
/* Cannot use includes as it doesnt accept conditions */
// console.log(dogs.includes(dogs.curFood === dogs.recFood));
console.log(dogs.some((dog) => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
/* flatMap is used to print the name specifically! Took alotta time to find it. */
console.log(dogs.filter(checkEatingOkay).flatMap((dog) => dog.owners));

// 8.
let dogsSorted = dogs.sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
