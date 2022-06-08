let score0El = document.querySelector("#score--0");
let score1El = document.querySelector("#score--1");
let diceEl = document.querySelector(".dice");
let current0El = document.querySelector("#current--0");
let current1El = document.querySelector("#current--1");
let player0El = document.querySelector(".player--0");
let player1El = document.querySelector(".player--1");
let btnNew = document.querySelector(".btn--new");
let btnRoll = document.querySelector(".btn--roll");
let btnHold = document.querySelector(".btn--hold");

score0El.textContent = 0;
score1El.textContent = 0;

let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let playing = true;

let init = function () {
  // 1.Setting old score to 0
  scores = [0, 0];
  currentScore = 0;
  playing = true; // Important step to add otherwise it'll not get restarted.

  // 2. Setting background color and winner & active player CSS style.
  activePlayer = 0;
  player1El.classList.remove("player--active");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  // 3. Displaying currentScore and score as 0
  score0El.textContent = scores[0];
  score1El.textContent = scores[1];
  current0El.textContent = 0;
  current1El.textContent = 0;
};
init();

let switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  if (playing) {
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${dice}.png`;

    // These loops are all about writing the steps in correct order using the logic
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener("click", function () {
  if (playing) {
    // 1. Adding current score to active player's score.
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. End the game if score >= 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add(`player--winner`);
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      /*     document.querySelector(
      `#name--${activePlayer}`
    ).textContent = `Player  wins the match`; */
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", init);
