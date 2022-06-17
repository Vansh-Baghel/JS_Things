/* document.querySelector(
".message"
).textContent = `Congratulations Its Correct!!`;

document.querySelector(".number").textContent = 13;
document.querySelector(".guess").value = 23; */

// As it is a method, we also have to add parenthesis

let secretNumber = Math.trunc(Math.random() * 21);

let score = 20;
let highscore = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);
  let x = secretNumber - guess;

  // When no guess is done , ie , it'll become false automatically which will change into 0 . Therefore 0 will also display this output
  if (!guess) {
    document.querySelector(".message").textContent = `No Number!`;

    // When guess is correct
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = `Correct Number!!`;
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#02a145";
    document.querySelector(".number").style.width = "30rem";

    if (highscore < score) {
      highscore = score;
    }
    document.querySelector(".highscore").textContent = highscore;
    // When value is 2 number lower than the secretValue
  } else if (x == 1 || x == 2) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Your value is Abit low`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game`;
      document.querySelector(".score").textContent = 0;
    }

    // When value is too low than the secretValue
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Your value is too low`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game`;
      document.querySelector(".score").textContent = 0;
    }

    // When value is 2 number higher than the secretValue
  } else if (x == -1 || x == -2) {
    if (score > 1) {
      document.querySelector(
        ".message"
      ).textContent = `Your value is Abit high`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game`;
      document.querySelector(".score").textContent = 0;
    }

    // When value is too high than the secretValue
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = `Your value is too high`;
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = `You lost the game`;
      document.querySelector(".score").textContent = 0;
    }
  }
});

let restart = document
  .querySelector(".again")
  .addEventListener("click", function () {
    score = 20;
    document.querySelector(".message").textContent = `Start guessing...`;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = ` `;
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".score").textContent = score;
    console.log(score);
  });
