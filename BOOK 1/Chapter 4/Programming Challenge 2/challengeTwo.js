
// Creates a variable and assign it an object with various properties
var myCrazyObject = {
  name: "A ridiculous object", // Creates a simple key-value pair
  "some array": [7, 9, { purpose: "confusion", number: 123 }, 3.3], // Key with a space; value contains an array with mixed data types, and an object inside the array with two key-value pairs
  "random animal": "Banana Shark",
};

// This line prints something to the console
// It accesses the third item (index 2) in "some array" 
// Then it gets the value of the "number" property inside that object
console.log(myCrazyObject["some array"][2].number);


