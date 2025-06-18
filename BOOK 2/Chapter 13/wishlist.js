// Get the "printable" button element from the HTML
let printButton = document.getElementById("printable");

// Add an event listener that runs the printView function when the print button is clicked
printButton.addEventListener("click", printView);

// Get the "addIt" button element from the HTML
let addButton = document.getElementById("addIt");

// Add an event listener that runs the addTheThing function when the add button is clicked
addButton.addEventListener("click", addTheThing);

// Create an empty array to store the user's list items
let myList = [];

// Get the element that will display the list items
let myListArea = document.getElementById("wishList");

// Function that adds a new item to the list
function addTheThing() {
  // Get the input field where the user types the item
  let theThing = document.getElementById("iWant");

  // Add the input value to the list and display it
  addToTheList(theThing);

  // Clear the input field after adding the item
  resetInput(theThing);
}

// Function to add a new item to the internal array and update the list in the DOM
function addToTheList(thingToAdd) {
  // Add the value to the array
  myList.push(thingToAdd.value);

  // Create a new list item element
  let newListItem = document.createElement("li");

  // Set its text content to the last item added to the array
  newListItem.innerHTML = myList[myList.length - 1];

  // Append the new list item to the visible list
  myListArea.appendChild(newListItem);
}

// Function to clear the input field
function resetInput(inputToReset) {
  inputToReset.value = "";
}

// Function to switch to print view and print the sorted list
function printView() {
  // Get the elements for the list and form sections
  let listPage = document.getElementById("listPage");
  let formArea = document.getElementById("formArea");

  // Hide the form section so it's not printed
  formArea.style.display = "none";

  // Change the class name of the list page to apply print styles (if defined in CSS)
  listPage.className = "print";

  // Clear the current list displayed on the page
  myListArea.innerHTML = "";

  // Sort the list items alphabetically
  myList.sort();

  // Loop through the sorted list and add each item as a list element
  for (let i = 0; i < myList.length; i++) {
    wishList.innerHTML += "<li>" + myList[i] + "</li>";
  }

  // Open the browser's print dialog
  window.print();
}
