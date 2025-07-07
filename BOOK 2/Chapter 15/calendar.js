// Get the HTML element where today's date will be displayed
var todayDate = document.getElementById("todaysdate");

// Get the button element that will trigger the "what to do" action
var todoButton = document.getElementById("whattodo");

// Add a click event listener to the button.
// When clicked, it will call the displayActivity() function
todoButton.addEventListener("click", displayActivity);

// Create a new Date object representing the current date and time
var d = new Date();

// Call the function to display today's date as soon as the script runs
displayDate();

// Function to display the current date in a readable format
function displayDate() {
  // Convert the date to a string like "Mon Jun 25 2025" and insert it into the HTML
  todayDate.innerHTML = d.toDateString();
}

// Function to display an activity suggestion based on the day of the week
function displayActivity() {
  // Get the numeric day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  var dayOfWeek = d.getDay();

  // Declare a variable to hold the suggestion for the user
  var youShould;

  // Use a switch statement to assign a suggestion based on the day
  switch (dayOfWeek) {
    case 0:
      youShould = "Take it easy. You've earned it.";
      break;
    case 1:
      youShould = "Gotta do what ya gotta do!";
      break;
    case 2:
      youShould = "Take time to smell the roses!";
      break;
    case 3:
      youShould = "Don't forget to eat breakfast!";
      break;
    case 4:
      youShould = "Learn something new today!";
      break;
    case 5:
      youShould = "Make a list of things you like to do.";
      break;
    case 6:
      youShould = "Do one thing from your list of things you like to do.";
      break;
    default:
      youShould = "Hmm. Something has gone wrong.";
      break;
  }

  // Display the suggestion in the HTML element with id="thingToDo"
  document.getElementById("thingToDo").innerHTML = youShould;
}
