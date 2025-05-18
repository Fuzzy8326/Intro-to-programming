// Array of possible words for the game
var words = [
  "javascript",
  "monkey",
  "amazing",
  "pancake",
  "elephant",
  "notebook",
  "giraffe",
  "snow",
  "mountain",
  "river",
];

// Randomly select a word from the array
var word = words[Math.floor(Math.random() * words.length)];

// Create an array to hold the user's progress (with underscores)
var answerArray = [];
for (var i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

// Track the number of letters remaining to guess
var remainingLetters = word.length;

// Set the maximum number of guesses allowed
var maxGuesses = 10;
var guessesLeft = maxGuesses;

// Game loop: runs while there are letters left to guess and guesses remaining
while (remainingLetters > 0 && guessesLeft > 0) {
  // Show the current state of the guessed word and remaining guesses
  alert("Word: " + answerArray.join(" ") + "\nGuesses left: " + guessesLeft);

  // Prompt the user to guess a letter
  var guess = prompt("Guess a letter, or click Cancel to stop playing.");

  // If user cancels, exit the game loop
  if (guess === null) {
    break;
  }

  // Convert guess to lowercase to standardize input
  guess = guess.toLowerCase();

  // Validate input: must be a single letter
  if (guess.length !== 1) {
    alert("Please enter a single letter.");
  } else {
    var correctGuess = false;

    // Check if the guessed letter is in the word
    for (var j = 0; j < word.length; j++) {
      // If guess matches a letter and hasn't been guessed already
      if (word[j] === guess && answerArray[j] === "_") {
        answerArray[j] = guess; // Update the display array
        remainingLetters--; // Decrease the count of letters to guess
        correctGuess = true;
      }
    }

    // If the guess was incorrect, reduce the number of guesses left
    if (!correctGuess) {
      guessesLeft--;
    }
  }
}

// Show the completed word (either win or loss)
alert(answerArray.join(" "));

// End-of-game message depending on win/loss outcome
if (remainingLetters === 0) {
  alert("Good job! The answer was " + word + ".");
} else {
  alert("Out of guesses! The word was " + word + ".");
}
