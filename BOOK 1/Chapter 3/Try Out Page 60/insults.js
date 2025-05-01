//Creating variables using the array method
var bodyParts = ["Face", "Nose", "Eyes", "Ears", "Mouth"];
var adjectives = ["greasy", "runny", "smelly", "itchy", "mouldy"];
var words = ["donkey", "goblin", "monkey", "clown", "bat"];
//Picking a random body part from the body part array:
var bodyPart = bodyParts[Math.floor(Math.random() * 5)];
//Picking a random adjective from the adjective array:
var adjective = adjectives[Math.floor(Math.random() * 5)];
//Picking a random word from the word array:
var word = words[Math.floor(Math.random() * words.length)];
//Join all random strings into a sentence:
var insult = "Your " + bodyPart +" " + "is like a " + adjective + " " + word + "!!!";
console.log(insult);
