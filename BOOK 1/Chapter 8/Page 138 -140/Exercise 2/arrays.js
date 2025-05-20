// Function to check if two arrays are the same
function areArraysSame(arr1, arr2) {
  // If arrays are different lengths, they can't be the same
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through each element and compare corresponding values
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false; // If any pair of values is different, return false
    }
  }

  // If all values matched, return true
  return true;
}

// Test cases
console.log(areArraysSame([1, 2, 3], [4, 5, 6])); // false
console.log(areArraysSame([1, 2, 3], [1, 2, 3])); // true
console.log(areArraysSame([1, 2, 3], [1, 2, 3, 4])); // false
