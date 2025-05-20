// Function to get a random word from an array
function getRandomWord(words) {
  // Selects a random index from the words array and returns the word
  return words[Math.floor(Math.random() * words.length)];
}

// Function to initialize the answer array with underscores
function initializeAnswerArray(word) {
  // Creates an array of underscores, one for each letter in the word
  return Array(word.length).fill("_");
}

// Function to display the current game status
function displayGameStatus(answerArray, guessesLeft) {
  // Shows the current guessed letters and remaining guesses using an alert
  alert("Word: " + answerArray.join(" ") + "\nGuesses left: " + guessesLeft);
}

// Function to prompt user for a guess
function getUserGuess() {
  // Prompts the user to guess a letter
  let guess = prompt("Guess a letter, or click Cancel to stop playing.");
  // Converts guess to lowercase, or returns null if canceled
  return guess ? guess.toLowerCase() : null;
}

// Function to process the user's guess
function processGuess(guess, word, answerArray) {
  let correctGuess = false;

  // Loop through the word to check if guess is correct
  for (let i = 0; i < word.length; i++) {
    // If the letter matches the guess and hasn't been guessed yet
    if (word[i] === guess && answerArray[i] === "_") {
      answerArray[i] = guess; // Update the answer array
      correctGuess = true; // Mark guess as correct
    }
  }
  return correctGuess;
}

// Function to count remaining letters to guess
function countRemainingLetters(answerArray) {
  // Counts how many underscores are left (i.e., unguessed letters)
  return answerArray.filter((letter) => letter === "_").length;
}

// Main game function
function playHangman() {
  // List of possible words
  const words = [
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

  const word = getRandomWord(words); // Choose a random word
  let answerArray = initializeAnswerArray(word); // Set up answer array
  let remainingLetters = word.length; // Track how many letters are left
  const maxGuesses = 10; // Total allowed guesses
  let guessesLeft = maxGuesses; // Remaining guesses

  // Game loop: continues until the word is guessed or guesses run out
  while (remainingLetters > 0 && guessesLeft > 0) {
    displayGameStatus(answerArray, guessesLeft); // Show current status

    const guess = getUserGuess(); // Get user's guess
    if (guess === null) {
      break; // Exit loop if user cancels
    }

    if (guess.length !== 1) {
      alert("Please enter a single letter."); // Input validation
      continue;
    }

    const wasCorrect = processGuess(guess, word, answerArray); // Process the guess

    if (!wasCorrect) {
      guessesLeft--; // Deduct a guess if wrong
    }

    remainingLetters = countRemainingLetters(answerArray); // Update remaining letters
  }

  // Game over: show final word and result
  alert(answerArray.join(" "));
  if (remainingLetters === 0) {
    alert("Good job! The answer was " + word + ".");
  } else {
    alert("Out of guesses! The word was " + word + ".");
  }
}

// Start the game
playHangman();
