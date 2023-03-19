/**** variable  ****/
const card = document.querySelector(".countries-container");

let dataCountry = [];
/**** fetch ****/

const fetchCountry = async () => {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (dataCountry = data));
  console.log(dataCountry);
  cardDisplay();
};

const cardDisplay = () => {
  card.innerHTML = dataCountry
    .filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(inputSearch.value.toLowerCase())
    )

    .slice(0, inputRange.value)
    .map(
      (country) =>
        `
    <div class="card">
    <img src=${country.flags.svg} alt="Flag Picture"  ${
          country.translations.fra.common
        } /> 
        <h2>${country.translations.fra.common}</h2>
        <h4> ${country.capital} </h4> 
        <p> Popultaion: ${country.population.toLocaleString()} </p>
    </div>
    `
    )
    .join("");
};

window.addEventListener("load", fetchCountry);

inputSearch.addEventListener("input", cardDisplay);

inputRange.addEventListener("input", () => {
  cardDisplay();
  rangeValue.textContent = inputRange.value;
});
