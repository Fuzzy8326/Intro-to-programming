var fruits = ["apple", "banana", "cherry"];
//2.Indexing:
console.log("Value:", fruits[0]);

//3.Changing Elements:
fruits[1] = "blueberry";
console.log("New value:", fruits);

//4.Mixing Data types and getting value 2:
var mixedArray = [42, "hello", true, { name: "John" }, [1, 2, 3]];
console.log("Value:", mixedArray[4][1]);

//5.Finding length:
console.log("Fruits Length: ", fruits.length);

//6. Adding Elements:Append new items to the end of the array.
fruits.push("date");
console.log("After appending:", fruits);

//7. Removing Elements:
//Remove items from the end or a specific position in the array.
console.log(fruits.pop());
console.log("After-pop:", fruits);

//8. Joining Arrays:
var allFruits = fruits.concat(mixedArray);
console.log("Concat:", allFruits);

//9. Finding index:
console.log("Index-Of:", fruits.indexOf("cherry"));

//10.Turning into a String:
//Convert the arrray into a single string with elements separated by a comma.
var fruitString = fruits.join(',');
console.log("Converted: ", fruitString);

//11.Building with push: Add new items to the end of the array.
var numbers = [];
numbers.push(1, 2, 3);
console.log("Numbers Array: ", numbers);

//12. Adding to the beginning of the array:
numbers.unshift(8);
console.log("Added:", numbers);