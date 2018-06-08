const form = document.querySelector("#movie_form");
const movieInput = document.querySelector("#movie_input");
const button = document.querySelector("#movie_submit");
const results = document.querySelector("#show_results");

function fetching(movie) {
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

form.addEventListener("reset", function(event) {
  console.log(event);
});

// Form event listener
form.addEventListener("submit", function(event) {
  event.preventDefault();
  // movieInput.value = "";

  fetching(movieInput.value);
});

function display(myJson) {
  myJson.Search.forEach(function(movie) {
    let resultsHolder = document.createElement("li");
    for (let key in movie) {
      if (key === "imdbID") {
        resultsHolder.innerHTML += `
        <a href='https://www.imdb.com/title/${movie[key]}'>
        <img src=${movie.Poster}>
        ${movie.Title}</a>`;
      }
    }
    results.appendChild(resultsHolder);
  });
}
