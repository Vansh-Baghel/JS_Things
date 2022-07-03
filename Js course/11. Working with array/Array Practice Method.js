"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Practice Starts from here

// 1. Adding all +ve movements
let bankDepositSum = accounts
  .flatMap((acc) => acc.movements)
  .filter((cur) => cur > 0)
  .reduce((acc, cur) => acc + cur, 0);

console.log(bankDepositSum);

// 2. Number of movements with atleast 1000

// By length method
/* 
let numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  /* Can add length here or in the console 
  .filter((val) => val >= 1000).length;
console.log(numDeposits1000);
 */

// By reduce method
let numDeposits1000 = accounts
  .flatMap((acc) => acc.movements)
  /* here acc is being used as the counter , cur starts from the first value as we've set the acc as 0*/
  .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);

console.log(numDeposits1000);

// 3. Calculation sum of withdrawals and deposits separately

let { deposits, withdrawals } = accounts
  .flatMap((acc) => acc.movements)
  .reduce(
    (sums, cur) => {
      /* We have to write "sums".deposits because deposits are stored as the initial value of sums .*/
      //   cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      /* This is another way of doing above task since the code was getting repeated with just one word replacement. */
      sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposits, withdrawals);

// 4. Exceptions

let convertTitleCase = function (title) {
  /* So this step says that let first element ka first letter be upper case and just join the rest of the string to it ie from 
  second letter itself and not the second word , so by upperCase output will be 'T' and after joining output will be 'This is a nice title' */
  let capitalized = (str) => str[0].toUpperCase() + str.slice(1);

  let exceptions = ["a", "an", "and", "the", "but", "or", "on", "in", "with"];

  /* First converted to lowerCase to make sure all elements are same , then splitting to make all of them as individual elements
  of an array , then map to make copy of array and make sure that the exceptions are not capitalized ; in map , word is basically
  each element of an array , so if exception includes that word then just return it as it is , join is used to join all the 
  elements of string into one single sentence. */
  let titleCase = title
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : capitalized(word)))
    .join(" ");

  /* So this will capitalize the first letter of the entire sentence and not the first letter of each element . We used this
    because 'and' was an exception and also the first letter so we need first letter capital. */
  return capitalized(titleCase);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a LONG title but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
/* 
let a = "this is a nice title";
let b = a[0].toUpperCase();
console.log(b);
 */
