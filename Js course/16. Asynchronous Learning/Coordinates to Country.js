const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

function renderCountry(data, className = "") {
  console.log(data.name.common);
  let html = `
  <article class="country ${className}">
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
}

// `http  s://geocode.xyz/${lat},${long}?geoit=json`
function whereAmI(lat, long) {
  fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
    .then((response) => {
      // You faced the problem here , like that name inside if statement must be the same of that in 'then'
      if (!response.ok)
        throw new Error(
          `Cannot load the API as it doesn't accept so many reqs at once`
        );
      // Have to return the json as it has more than one code lines
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(`You are in ${data.region} , ${data.country}`);
      // Second fetch to print html thing and actually see the country details .
      /* data.country because that will be the name will get from the json msg of lat,long. */
      return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
    })
    .then((response) => response.json())
    /* here , data[0] as the API was built in that way .*/
    .then((data) => renderCountry(data[0]))
    .catch((err) => console.log(`So it ${err.message}`));
}

// whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);
