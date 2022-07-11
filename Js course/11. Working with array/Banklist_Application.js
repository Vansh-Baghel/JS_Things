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

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2022-07-04T07:38:21.623Z",
    "2022-07-09T07:38:21.623Z",
    "2022-07-10T07:38:21.623Z",
  ],
  currency: "INR",
  locale: "en-IN", // de-DE
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
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

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector(".welcome");
const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".summary__value--in");
const labelSumOut = document.querySelector(".summary__value--out");
const labelSumInterest = document.querySelector(".summary__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerMovements = document.querySelector(".movements");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSort = document.querySelector(".btn--sort");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

// Create current date and time

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  // console.log(daysPassed);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  /*   else {
    const day = `${date.getDate()}`.padStart(2, 0);
    const month = `${date.getMonth() + 1}`.padStart(2, 0);
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  } */
  return new Intl.DateTimeFormat(locale).format(date);

  /* Here we converted date.getMonth into string because padStart can be used only on strings */
};

// Adding date to the Current Balance part
let options = {
  hour: "numeric",
  day: "numeric",
  month: "long",
  year: "numeric",
  minute: "numeric",
};

let locale = Navigator.language;
labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
  new Date()
);

/* Currency printing with amount */
let formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

/* sort is already false because we dont want it sorted already. */
let displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = "";
  // console.log(movements);
  // Sorting
  /* Here slice is used to create copy of movements so that original array is not mutated by sort method.
  if sort is false , then it'll return movements ie regular order.*/
  let movs = sort ? acc.movements.slice().sort((a, b) => a - b) : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? "deposit" : "withdrawal";

    /* Edited the movement amount with the currency. */
    let formattedMov = formatCur(mov, acc.locale, acc.currency);
    console.log(formattedMov);

    const date = new Date(acc.movementsDates[i]);
    let displayDate = formatMovementDate(date, acc.locale);

    let html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>

      <div class="movements__value">${formattedMov}</div>
    </div>
    `;

    /* innerHTML is the predefined txt in html , which we dont need . The new boxes will keep adding after forEach */
    containerMovements.insertAdjacentHTML("afterbegin", html);
  });
};

// Creating Usernames

let createUsernames = function (accs) {
  accs.forEach(function (acc) {
    /* split is used to separate the name and surname . Here we are adding a new object into the accounts*/
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      /* name is a random argument assigned to elements formed after split */
      .map((name) => name[0])
      .join("");
  });
};

createUsernames(accounts);
// console.log(account1.movements);

// Setting balance
/* here arr is the full object of curretnAccount ie any account called using this function. */
let calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCur(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

// Setting summary value
let calcDisplaySummary = function (acc) {
  let incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}`;

  // acc is the value input while calling calcDisplayBalance
  let out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  // Displaying interest
  let interest = acc.movements
    .filter((int) => int > 0)
    .map((deposits) => (deposits * acc.interestRate) / 100)
    /* Here , interest below 1 wont be calculated , so nxt filter is for that condition. */
    .filter((int) => {
      // console.log(arr);
      /* error came by not writing return keyword, actually not error but weird behaviourS */
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};
// all functions are called here .
let updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display Summary
  calcDisplaySummary(acc);
};

let startLogOutTimer = function () {
  let tick = function () {
    let min = String(Math.trunc(time / 60)).padStart(2, 0);
    let sec = String(time % 60).padStart(2, 0);

    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // Decrease 1s
    time--;

    if (time === 0) {
      /* Its clearInterval and not closeInterval */
      clearInterval(timer);
      labelWelcome.textContent = "Log in to get started";
      containerApp.style.opacity = 0;
    }
  };

  let time = 300;
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
};

// CurrentAccount is the object whose pin will be added .
/* To write timer here , it took my damn hrs to figure this mistake out */
let currentAccount, timer;

btnLogin.addEventListener("click", function (e) {
  e.preventDefault();

  /* acc.username is the short form of the name in accounts and its defined in createUsernames which is a global value */
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );

  // The value is always in string , so have to convert into number.

  // By using optional chaining , we wont get the error if the pin value does not match .
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    // Split is used to split the names into 2 elements which can be used to display the first name.
    labelWelcome.textContent = `Welcome back , ${
      currentAccount.owner.split(" ")[0]
    }`;

    containerApp.style.opacity = 100;

    // Clear input area & by equating them together both the values will be same.
    inputLoginUsername.value = inputLoginPin.value = "";
    // blur is used to remove the cursor from the box after typing the text .
    inputLoginPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener("click", function (e) {
  /* As it in form element of html */
  e.preventDefault();

  // Adding dates

  /* toISOString is used to convert the value into string in the console */
  receiverAcc.movementsDates.push(new Date().toISOString());
  currentAccount.movementsDates.push(new Date().toISOString());

  let amount = Number(inputTransferAmount.value);
  let receiverAcc = accounts.find(
    (arr) => arr.username === inputTransferTo.value
  );
  /* Dont worry , here amount and username wont be equalled , they both will be equal to empty as we dont want our transfer displayed once done in the input box */
  // inputTransferAmount.value = inputTransferTo.value = "";
  // console.log(amount, receiverAcc);

  /* receiverAcc is added to check if the  receiver exists or not in the acc array. */
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    /* Balance is updated because it depends on movements , so as movements are changed then balance will change automatically */
    // Update UI
    updateUI(currentAccount);
  }
});

// Close account code
btnClose.addEventListener("click", function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUsername.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    // Finding index of that account
    let index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // console.log(index);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    /* Update UI ka kaam hee nhi h , as it wont make any difference . It is just used to update the total balace , in , out , sort & movements .
     */
    /* Used to log out the user as its deleting its own account. */
    containerApp.style.opacity = 0;

    inputCloseUsername.value = inputClosePin.value = "";
  }
});

btnLoan.addEventListener("click", function (e) {
  e.preventDefault();

  /* toISOString is used to convert the value into string in the console */
  currentAccount.movementsDates.push(new Date().toISOString());

  /* DONT forget to define amount */
  let amount = Math.floor(inputLoanAmount.value);
  /* Condition is that any deposit must be greater than 10% of the loan taken*/
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount / 10)
  ) {
    // Add movement
    /* Setting time to delay the display of loan amount */
    setTimeout(function () {
      currentAccount.movements.push(amount);

      // Update UI
      updateUI(currentAccount);

      inputLoanAmount.value = "";
    }, 2000);
  }
});

let sorted = false;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  /* Here we are changing the values from true to false and false to true each time we click. */
  sorted = !sorted;
});

// console.log(account1);
