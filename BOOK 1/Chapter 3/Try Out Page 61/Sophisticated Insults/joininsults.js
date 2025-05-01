var bodyParts = ["nose", "face", "hair", "belly", "foot", "elbow"];
var adjectives = ["ridiculous","greasy","pointless","flaky","bizarre","smelly",];
var animals = ["Fly", "Warthog", "Platypus", "Rat", "Baboon", "Monkey"];
var animalBodyParts = ["rear end", "tongue", "eyebrow", "tail", "ear", "snout"];

var bodyPart = bodyParts[Math.floor(Math.random() * 6)];
var adjective = adjectives[Math.floor(Math.random() * 6)];
var animal = animals[Math.floor(Math.random() * 6)];
var animalBodyPart = animalBodyParts[Math.floor(Math.random() * 6)];


//using join (" ") to create the string

var insults = ["Your"," ",  bodyPart, " ", "is more", " ", adjective, " ", "than a"," ", animal + "'s", " ",animalBodyPart + "."].join("");
console.log(insults);
