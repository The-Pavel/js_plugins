const movieList = document.querySelector("#movies");

const populateMovies = (movie) => {
  const movieItem = `
  <li class="list-inline-item">
  <img src=${movie.Poster} height="120px"/>
  </li>
  `;
  movieList.insertAdjacentHTML('beforeend', movieItem);
};

const getMovies = (keyword) => {
  // we need to clear the previous movies before fetching new ones
  movieList.innerHTML = "";
  fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`)
    .then(response => response.json())
    .then((data) => {
      data.Search.forEach(populateMovies);
    });
};

export { getMovies };
