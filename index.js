const form = document.querySelector("#movie_form");
const textArea = document.querySelector("#movie_input");
const button = document.querySelector("#movie_submit");

// Form event listener
form.addEventListener("submit", function(event) {
  // Prevent default server form submission
  event.preventDefault;

  // Search input string
  let movie = textArea.value;
});
