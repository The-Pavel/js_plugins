console.log("Hello from src/index.js!");

// Always starting with querySelectors :)
const avengers = document.querySelector("#avengers");
const button = document.querySelector("#assembleAvengers");

const avengersArray = ["Black Widow", "Thor", "Spider Man", "Hulk", "Iron Man"];

// refactoring our callback function to use on line 20
const appendingAvengers = (avenger) => {
  avengers.insertAdjacentHTML('beforeend', `<li>${avenger}</li>`);
};

// functions inside forEach can also be refactored
const avengersAssemble = () => {
  button.setAttribute("disabled", "");
  avengersArray.forEach(appendingAvengers);
};

button.addEventListener('click', avengersAssemble);


/// MOVIES SEARCH

// Always starting with querySelectors :)
const movieList = document.querySelector("#movies");
const form = document.querySelector("#search-movies");
const keywordInput = document.querySelector("#keyword");

// refactoring our AJAX request into a function
const getMovies = (keyword) => {
  // we need to clear the previous movies before fetching new ones
  movieList.innerHTML = "";
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach((movie) => {
        const movieItem = `
        <li class="list-inline-item">
        <img src=${movie.Poster}/>
        <p>${movie.Title}</p>
        </li>
        `;
        movieList.insertAdjacentHTML('beforeend', movieItem);
      });
    });
};

form.addEventListener('submit', (event) => {
  // preventing the default behaviour of submit -> we don't want to refresh the page
  event.preventDefault();
  const keyword = keywordInput.value;
  getMovies(keyword);
});

/// ALGOLIA PLACES SEARCH

const algoliaInput = document.querySelector("#algolia-input");

algoliaInput.addEventListener('keyup', (event) => {
  // Algolia Places built their API to accept a POST request for a search by query
  // Check their documentation if you want to try more endpoints! :)
  fetch("https://places-dsn.algolia.net/1/places/query", {
    method: "POST",
    // a POST request will always have a body, to store the data to be sent
    body: JSON.stringify({ query: algoliaInput.value })
  })
    .then(response => response.json())
    .then(data => console.log(data));
    // look inside the data in your console
    // can you access the english name of the place and the country where it is? ;)
});





























