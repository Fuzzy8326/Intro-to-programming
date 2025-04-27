// working out whether this 12-year-old is allowed to see the movie
var age = 12;
var accompanied = true;
var allowed = age && accompanied;
console.log(allowed);

// changing both variables
var age = 13;
var accompanied = false;
var allowed = age && accompanied;
console.log(allowed);
