const airline = "TAP Air Portugal";
const planeee = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));

// Will show -1 as it is case sensitive and we have capital p in airline variable.
console.log(airline.indexOf("portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));

// +1 is added to remove the space from the outpt
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats

  // Checking the last element , and in slice it is the start value ka number.
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat 😬");
  else console.log("You got lucky 😎");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

// Fix capitalization in name
const passenger = "jOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1); // INdex 1 is from 'o'
console.log(passengerCorrect);

// Comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";

console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeing"));
console.log(plane.startsWith("Airb"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the NEW ARirbus family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are NOT allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

// Split and join
console.log("a+very+nice+string".split("+"));

console.log("Jonas Schmedtmann".split(" "));

const [firstName, lastName] = "Jonas Schmedtmann".split(" ");

const newName = ["Mr.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("jessica ann smith davis");
capitalizeName("jonas schmedtmann");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));
console.log("Jonas".padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(64637836));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard("334859493847755774747"));

// Repeat
const message2 = "Bad waether... All Departues Delayed... ";
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${"🛩".repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// Made to make changes in 'from' .
const getCode = (str) => str.slice(0, 3).toUpperCase();

for (const flight of flights.split("+")) {
  // Destructuring arrays.
  const [type, from, to, time] = flight.split(";");

  // in type, emoji is added where there is delay & all underscore is replaced with spaces
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""}${type.replaceAll(
    "_",
    " "
  )} ${getCode(from)} ${getCode(to)}
  // padStart will make the length of all flight strings same as the length of delayed one . You can check the delaye length and this length.
  (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
  console.log(output.length);
}
