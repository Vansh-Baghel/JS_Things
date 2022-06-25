// The map Method
let movements = [200, -200, 340, -300, -20, 50, 400, -460];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

let movementsUSD = movements.map((mov) => mov * eurToUsd);
console.log(movementsUSD);

let movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);
