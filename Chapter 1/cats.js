// Draw as many cats as you want!
var drawCats = function (howManyTimes) {
  for (var i = 0; i < howManyTimes; i++) {
    console.log(i + " =^.^=");
  }
};
drawCats(10); // You can put any number here instead of 10.

// Without using a Function:
var drawCats = " ";
for (var i = 0; i < 10; i++) {
    console.log(i + " =^.^=");
};