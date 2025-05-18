// Create an array of animal names
var animals = ["Cat", "Fish", "Lemur", "Komodo Dragon"];

// Loop through each element in the animals array
for (var i = 0; i < animals.length; i++) {
  // Add the word "Awesome" in front of each animal name
  animals[i] = "Awesome " + animals[i];
}

// Output the modified array to the console
console.log(animals);
