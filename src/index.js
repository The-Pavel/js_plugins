// importing functions
// NOTE the ./ for files and folders in the current directory
import { getMovies } from './movies';
import { initSortable } from './plugins/sortable_init';
import { initMarkdown } from './plugins/init_markdown';
import { initSelect2 } from './plugins/init_select2';

// initializing plugins
initSortable();
initMarkdown();
initSelect2();

// getting DOM elements to listen to :)
const form = document.querySelector("#search-movies");
const keywordInput = document.querySelector("#keyword");

// setting event listeners
form.addEventListener('submit', async (event) => {
  // preventing the default behaviour of submit -> we don't want to refresh the page
  event.preventDefault();
  const keyword = keywordInput.value;
  getMovies(keyword);
});
