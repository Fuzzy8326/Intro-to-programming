// String containing all lowercase letters of the English alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";

// Initialize an empty string to store the random characters
var randomString = "";

// Loop until the randomString has 6 characters
while (randomString.length < 6) {
  // Generate a random index between 0 and the length of the alphabet - 1
  var randomIndex = Math.floor(Math.random() * alphabet.length);

  // Get the character at the random index from the alphabet string
  var randomChar = alphabet[randomIndex];

  // Append the random character to the randomString
  randomString += randomChar;
}

// Output the generated random 6-character string to the console
console.log(randomString);
