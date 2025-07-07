// Get references to HTML elements used in the interactive story
var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");

// Array to store the user's answers
var answers = [];

// Add click event listener to the submit button
submit.addEventListener("click", getAnswer);

// Start the story with the first question
askQuestion(0);

// Function to display a question based on its number
function askQuestion(questionNumber) {
  answer.style.display = "block"; // Show the answer input section
  answers.length = questionNumber; // Trim the answers array to current question index

  // Set the question text based on question number
  switch (questionNumber) {
    case 0:
      question.innerHTML = "Are you ready to play?";
      break;
    case 1:
      question.innerHTML = "Go to Mars, or stay home?";
      break;
    case 2:
      question.innerHTML = "Risk it, or go home.";
      break;
    default:
      break;
  }
}

// Function to handle the submitted answer
function getAnswer() {
  var cleanInput = yourAnswer.value.toUpperCase(); // Convert input to uppercase for consistency
  answers.push(cleanInput); // Store the cleaned answer
  yourAnswer.value = ""; // Clear input field for next answer
  continueStory(answers.length - 1); // Continue the story based on current answer
}

// Function to progress the story based on user's answers
function continueStory(answerNumber) {
  switch (answerNumber) {
    case 0:
      if (answers[0] === "YES") {
        story.innerHTML = document.getElementById("answer01").innerHTML; // Show "YES" path content
        askQuestion(1); // Ask next question
      } else if (answers[0] === "NO") {
        story.innerHTML = document.getElementById("err0").innerHTML; // Show error for "NO" and ask again
        askQuestion(0);
      } else {
        story.innerHTML = document.getElementById("err0").innerHTML; // Handle unexpected input
        askQuestion(0);
      }
      break;
    case 1:
      if (answers[1] === "GO TO MARS") {
        story.innerHTML = document.getElementById("answer11").innerHTML; // Show Mars story path
        askQuestion(2); // Ask final question
      } else if (answers[1] === "STAY HOME") {
        story.innerHTML = document.getElementById("answer12").innerHTML; // Show home story path
        theEnd(); // End story
      } else {
        story.innerHTML = document.getElementById("err1").innerHTML; // Invalid input handling
        askQuestion(1);
      }
      break;
    case 2:
      if (answers[2] === "RISK IT") {
        story.innerHTML = document.getElementById("answer21").innerHTML; // Risk it path
        theEnd(); // End story
      } else if (answers[2] === "GO HOME") {
        story.innerHTML = document.getElementById("answer22").innerHTML; // Go home path
        theEnd(); // End story
      } else {
        story.innerHTML = document.getElementById("err2").innerHTML; // Invalid input handling
        askQuestion(2);
      }
      break;
    default:
      story.innerHTML = "The story is over!"; // Fallback in case of unexpected flow
      break;
  }
}

// Function to end the story
function theEnd() {
  story.innerHTML += "<p>The End.</p>"; // Append ending message
  question.innerHTML = ""; // Clear the question text
  answer.style.display = "none"; // Hide the answer input section
}
