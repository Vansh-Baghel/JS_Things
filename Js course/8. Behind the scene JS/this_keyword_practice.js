console.log(this);

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  /*   console.log(this); */
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  // This will show same output as the very first step of global "this".
  console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 2020,
  calcAge: function () {
    /*     console.log(this); */
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
f(); // No object before calling "this" , thats why it'll show undefined.
