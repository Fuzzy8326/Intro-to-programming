// Define an object called dreamCar with various properties
var dreamCar = {
  make: "Oldsmobile", // Car manufacturer
  model: "98", // Car model
  color: "brown", // Car color
  year: 1983, // Year of manufacture
  bodyStyle: "Luxury Car", // Type of car body
  price: 4500, // Price of the car
};

// Display an alert showing the data type of the dreamCar variable
alert("The type of dreamCar is: " + typeof dreamCar);

// Set the content of the HTML element with id 'pricetag' to the car's price
document.getElementById("pricetag").innerHTML = dreamCar.price;

// Set the content of the HTML element with id 'modelyear' to the car's year
document.getElementById("modelyear").innerHTML = dreamCar.year;

// Change the background color of the HTML element with id 'body' to the car's color
document.getElementById("body").style.backgroundColor = dreamCar.color;

// Set the content of the HTML element with id 'body' to display the car's make and model
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;

// Change the background color of the element with ID "frontwheel" to a bright green color (#71ed09)
document.getElementById("frontwheel").style.backgroundColor = "#71ed09";

// Change the background color of the element with id 'backwheel' to a specific shade of blue
document.getElementById("backwheel").style.backgroundColor = "#0651fc";
