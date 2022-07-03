// Normal method to solve
/* const calcAverageHumanAge = function (ages) {
  let humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  let adults = humanAges.filter((filtAge) => filtAge >= 18);
  console.log(adults);

  let avgAge = adults.reduce(
    (acc, age) => (acc + age) / adults.length,
    adults[0]
  );
  return avgAge;
};
 */

// Chaining method Challenge 3 part
const calcAverageHumanAge = (ages) =>
  ages
    .map((age) => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter((filtAge) => filtAge >= 18)
    .reduce((acc, age, i, arr) => (acc + age) / arr.length, 0);

let avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
let avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1);
console.log(avg2);
