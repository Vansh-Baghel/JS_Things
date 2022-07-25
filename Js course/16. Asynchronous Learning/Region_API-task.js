"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// function used to set the html of the file.
function renderCountry(data, className = "") {
  let html = `        <article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span> ${(
        +data.population / 10_000_000
      ).toFixed(1)} Crores</p>
      <p class="country__row"><span>🗣️</span>${[
        Object.values(data.languages),
      ]}</p>
      <p class="country__row"><span>💰</span>${Object.keys(data.currencies)}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;

  //   console.log(data);
}
/* 
// function to get API states and to start neighbour display.
function nations(country) {
  let request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener("load", function () {
    let [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);
    // Neighbouring country
    let neighbour = data.borders;

    if (!neighbour) return;

    let request2 = new XMLHttpRequest();
    request2.open(
      "GET",
      `https://restcountries.com/v3.1/alpha/${neighbour[0]}`
    );
    request2.send();

    request2.addEventListener("load", function () {
      /* Without destructing it wasnt working 
      let [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, "neighbour");
    });
  });
}

nations("India");
 */

let nations = function (country) {
  // fetch returns a promise and to resolve the promise we need to use then
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => {
      /* data[0] is used because the promise in the data had 2 objects with the outer index as 0 and 1. */
      renderCountry(data[0]);

      let neighbour = data[0].borders[0];

      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then(
      (data) => renderCountry(data[0], "neighbour") /* console.log(data[0] */
    );
};

nations("India");
