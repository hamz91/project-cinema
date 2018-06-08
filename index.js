const form = document.querySelector("#movie_form");
const textArea = document.querySelector("#movie_input");
const button = document.querySelector("#movie_submit");

// Form event listener
form.addEventListener("submit", function(event) {
  // Prevent default server form submission
  event.preventDefault();

  // Search input string
  let movie = textArea.value;
  console.log(movie);

  // Empty Text Area
  textArea.value = "";

  //   Fetch request using Text Area string
  fetch(`http://www.omdbapi.com/?s=${movie}&apikey=77c3b516`)
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      return myJson;
    })
    .then(function())
});
