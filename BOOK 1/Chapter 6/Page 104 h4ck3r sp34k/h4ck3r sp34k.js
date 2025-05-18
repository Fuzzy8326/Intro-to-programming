// Input string to be transformed
var input = "javascript is awesome";
// Initialize an empty string to store the transformed output
var output = "";

// Loop through each character in the input string
for (var i = 0; i < input.length; i++) {
  // Get the current character at index i
  var letter = input[i];

  // Replace specific vowels with corresponding numbers
  if (letter === "a") {
    output += "4"; // Replace 'a' with '4'
  } else if (letter === "e") {
    output += "3"; // Replace 'e' with '3'
  } else if (letter === "i") {
    output += "1"; // Replace 'i' with '1'
  } else if (letter === "o") {
    output += "0"; // Replace 'o' with '0'
  } else {
    // If the character is not one of the vowels above, keep it unchanged
    output += letter;
  }
}

// Print the final transformed string to the console
console.log(output);
