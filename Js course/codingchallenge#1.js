let data1 = [16, 3, 53];
let data2 = [11, 31, 42];

let printForecast = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`...${data1[i]} in ${i + 1} days`);
  }
};

printForecast(data1);
