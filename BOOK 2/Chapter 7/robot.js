// Set initial styles for various robot parts
document.getElementById("left-eye").style.backgroundColor = "purple"; // Change left eye background to purple
document.getElementById("head").style.transform = "rotate(15deg)"; // Rotate the head slightly
document.getElementById("body").style.border = "2px black solid"; // Add a solid black border to the body
document.getElementById("mouth").style.borderRadius = "4px"; // Round the corners of the mouth
document.getElementById("right-eye").style.border = "4px yellow dotted"; // Add a yellow dotted border to right eye
document.getElementById("left-arm").style.backgroundColor = "#FF00FF"; // Set left arm color to magenta
document.getElementById("head").style.borderTop = "5px black solid"; // Add a solid top border to the head

// Get references to robot parts
var rightEye = document.getElementById("right-eye");
var leftEye = document.getElementById("left-eye");
var leftArm = document.getElementById("left-arm");
var rightArm = document.getElementById("right-arm");
var nose = document.getElementById("nose");

// Add event listeners to robot parts for interactions
rightEye.addEventListener("click", moveUpDown); // Move right eye up and down when clicked
leftEye.addEventListener("click", moveUpDown); // Move left eye up and down when clicked
leftArm.addEventListener("click", moveRightLeft); // Move left arm right when clicked
rightArm.addEventListener("click", moveLeftRight); // Move right arm left when clicked

// Change nose color to blue when mouse hovers over it
nose.addEventListener("mouseover", function () {
  nose.style.backgroundColor = "blue";
});

// Function to move an element up to 20% from the top
function moveUpDown(e) {
  var robotPart = e.target;
  var top = 0;
  var id = setInterval(frame, 10); // Set animation interval
  function frame() {
    robotPart.style.top = top + "%";
    top++;
    if (top === 20) {
      clearInterval(id); // Stop the animation when it reaches 20%
    }
  }
}

// Function to move an element 20% to the right
function moveRightLeft(e) {
  var robotPart = e.target;
  var left = 0;
  var id = setInterval(frame, 10); // Set animation interval
  function frame() {
    robotPart.style.left = left + "%";
    left++;
    if (left === 20) {
      clearInterval(id); // Stop the animation at 20%
    }
  }
}

// Function to move an element 20% to the left (via right positioning)
function moveLeftRight(e) {
  var robotPart = e.target;
  var right = 0;
  var id = setInterval(frame, 10); // Set animation interval
  function frame() {
    robotPart.style.right = right + "%";
    right++;
    if (right === 20) {
      clearInterval(id); // Stop the animation at 20%
    }
  }
}
