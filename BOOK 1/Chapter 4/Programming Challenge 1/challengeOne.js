// Initialize an object to keep track of scores for each person
let scores = {
  Skye: 0,
  Kim: 0,
  Ash: 0,
};
// Add 10 points to Skye's score
scores.Skye += 10;
// Add 4 points to Kim's score
scores.Kim += 4;
// Add 5 points to Ash's score using bracket notation
scores["Ash"] += 5;
// Print the final scores object to the console
console.log(scores);
