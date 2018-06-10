const form = document.querySelector("#movie_form");
const movieInput = document.querySelector("#movie_input");
const results = document.querySelector("#show_results");
const detailedView =
  "http://www.omdbapi.com/?t=${movie}&plot=small&apikey=77c3b516";

// Movie Fetch Request
function fetchGeneral(movie) {
  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=77c3b516`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      display(myJson); // display function called - function iterates over fetch results array & objects
    })
    .catch(function(error) {
      alert("There was an error with your request. Please try another search.");
    });
}

// Container Display Function
function display(myJson) {
  let movieResults = myJson.Search.map(function(movie) {
    return `
      <div class="result_sections">
      <ui>
      <div class="title">
      <h2 class='movie_title'>${movie.Title}</h2>
      <p class='movie_year'>${movie.Year}</p>
      <a class='poster' href="https://www.imdb.com/title/${movie.imdbID}">
      <img src=${movie.Poster}>
      </a>
      <div class='more_info'>
      <button id="button">
      <div id="More_Info">More Info</div>
      </button>
      <button class='amazon_link'>
      <a class='amazon_link' href="https://www.amazon.co.uk/s/ref=nb_sb_noss_1?url=search-alias%3Ddvd&field-keywords=${
        movie.Title
      }">
      Buy Now</a>
      </button>
      </div>
      </div>
      </ui>
      </div>`;
  }).join(""); // map over fetched Json data, added innerHTML using .notation

  results.innerHTML = movieResults;
}

function fetchPlot(movie) {
  fetch(detailedView)
    .then(function(response1) {
      return response1.json();
    })
    .then(function(plotJson) {
      console.log(plotJson);
      let details = `<div
    <li class="info_list">
    <p>${detail.Title}</p>
    <p>${detail.Director}</p>
    <p>${detail.Actors}</p>
    <p>${detail.Released}</p>
    <p>${detail.Runtime}</p>
    <p>${detail.Rated}</p>
    <p>${detail.Production}</p>
    <p>${detail.Plot}</p>
    </li>`;
    })
    .catch(function(error) {
      alert("fetchPlot has fucked up again");
    });
}
// Input Form event listener
form.addEventListener("submit", function(event) {
  event.preventDefault();
  fetchGeneral(movieInput.value);
});

// let info = document.querySelector("#info_bubble");

// info.innerHTML = details;

// let moreInfo = document.querySelector("#info_button");
// moreInfo.addEventListener("click", function(event) {
//   event.preventDefault();
//   if (event.target.id === "info_bubble") {
//     fetchPlot(movieInput.value);
//   }
// });
