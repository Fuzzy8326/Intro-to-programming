// Define a function named 'sixthLetter' that takes one parameter 'name'
var sixthLetter = function (name) {
  // Check if the length of 'name' is less than 6
  if (name.length < 6) {
    return;
  }
  // If the name is long enough, return a message with the 6th letter (index 5)
  return "The sixth letter of your name is " + name[5] + ".";
};
// Call the function with the name "Farzana"
console.log(sixthLetter("Farzana"));
