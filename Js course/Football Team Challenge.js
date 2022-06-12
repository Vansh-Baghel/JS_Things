"use strict";

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* //1.
let [players1, players2] = game.players;

//2.
let [gk, ...fieldplayers] = players1;

//3. All players will be seen in one single array if we use spread operator , otherwise there would've been 2 child arrrays inside one array.
let allPlayers = [...players1, ...players2];

// 4.
let players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// 5.
let {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// 6.
let printGoals = function (...players) {
  console.log(
    `Players ${players} have scored total ${players.length} numbers of goals`
  );
};

// If you would've not used spread operator then the length mustve been just 1.
printGoals(...game.scored);

// 7.
// Replacing the use of IF or TERNARY operator and using logical operator to deal wtih conditions.
team1 < team2 && console.log(`Team1 is more likely to win`);
team1 > team2 && console.log(`Team2 is more likely to win`);
 */
/////////////////////////
// Challenge 2

// 1.

// Vid solution :-
/* for (const [i, player] of game.scored.entries())
  console.log(`Goal ${i + 1}: ${player}`);
 */
for (let i = 1; i <= game.scored.length; i++) {
  console.log([`Goal ${i} : ${game.scored[i - 1]}`]);
}

// 2.

/* // Vid solution :-

const odds = Object.values(game.odds);
let average = 0;

// for in use krte toh index number ka values ata output mai .
for (const odd of odds) {
  average += odd;
}

average /= odds.length;
console.log(average); */

let {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

let avg = (team1 + draw + team2) / 3;
console.log(avg);

// 3.
// Vid method
for (let [team, val] of Object.entries(game.odds)) {
  let teamStr = team === "x" ? `draw` : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${val}`);
}
/* 
// Not an efficient way to get the output , My method
console.log(`Odd of victory ${game.team1} : ${game.odds.team1}`);
console.log(`Odd of draw : ${game.odds.x}`);
console.log(`Odd of victory ${game.team2} : ${game.odds.team2}`);
 */
// BONUS
// Vid method

const scorers = {};
for (const player of game.scored) {
  // Ternary operator.
  // scorers[player]  are the index number, player are the names of the players.
  // ternary operator upgrades the index number ka value if the player's name matches. Index number is set by default as 1 in the condition below
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
  console.log(scorers[player]);
}

console.log(scorers);
