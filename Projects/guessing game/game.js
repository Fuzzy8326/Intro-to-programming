// Generate a random secret number between 1 and 20
let secret = Math.floor(Math.random() * 20) + 1;

// Declare a variable to store the user's guess
let guess;

// Get a reference to the message display element in the HTML
let messageEl = document.getElementById("message");

// Function to check the user's guess
function checkGuess() {
  // Get the user's input and convert it to an integer
  guess = parseInt(document.getElementById("guessInput").value);

  // Check if the input is not a number or outside the 1-20 range
  if (isNaN(guess) || guess < 1 || guess > 20) {
    messageEl.textContent = "Please enter a number between 1 and 20.";
    return; // Exit the function early if input is invalid
  }

  // Check if the guess matches the secret number
  if (guess === secret) {
    messageEl.textContent = "🎉 Congratulations! You guessed correctly";
  }
  // If the guess is less than the secret number
  else if (guess < secret) {
    messageEl.textContent = "Incorrect guess, too low. Try again!";
  }
  // If the guess is greater than the secret number
  else {
    messageEl.textContent = "Incorrect guess, too high. Try again!";
  }
}
