var bodyParts = ["nose", "face", "hair", "belly", "foot", "elbow"];
var adjectives = ["ridiculous", "greasy", "pointless", "flaky", "bizarre","smelly"];
var animals = ["Fly", "Warthog", "Platypus", "Rat", "Baboon", "Monkey"];
var animalBodyParts = ["rear end", "tongue", "eyebrow", "tail", "ear", "snout"];

var bodyPart = bodyParts[Math.floor(Math.random() * 6)];
var adjective = adjectives[Math.floor(Math.random() * 6)];
var animal = animals[Math.floor(Math.random() * 6)];
var animalBodyPart = animalBodyParts[Math.floor(Math.random() * 6)];

//uses the + operator to create the string

var Insult = "Your" + " "+ bodyPart + " " + "is more" + " " + adjective +" "+ "than a" + " " + animal + "'s" +" "+ animalBodyPart +".";

console.log(Insult);




