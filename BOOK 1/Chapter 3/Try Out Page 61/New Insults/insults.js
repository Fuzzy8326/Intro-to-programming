var adjectives = [
  "lazy",
  "smelly",
  "dim-witted",
  "useless",
  "stupid",
  "pathetic",
];
var nouns = ["toad", "donkey", "goblin", "weasel", "monkey", "baboon"];
var endings = [
  "who thinks they're clever.",
  "with the IQ of a rock.",
  "that even your mirror avoids.",
  "born to test others' patience.",
  "that makes wallpaper look exciting.",
];

var adjective = adjectives[Math.floor(Math.random() * 6)];
var noun = nouns[Math.floor(Math.random() * 6)];
var ending = endings[Math.floor(Math.random() * 5)];

Insult = "You are a" + " " + adjective + " " + noun + " " + ending;

console.log(Insult);
