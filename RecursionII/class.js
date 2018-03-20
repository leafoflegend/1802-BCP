const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// flattenArray

const someArray = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

// Imperitive Version
// const flattenArray = (anArr) => {
//   const flattenedArray = [];
//   // loop over elements in the array
//   // if the element is an array - flatten it
//   for (let i = 0; i < anArr.length; ++i) {
//     const currentElement = anArr[i];
    
//     if (Array.isArray(currentElement)) {
//       // We then loop over that array...
//       // loop
//       // if array
//       // loop
//       // if array
//       // loop
//       // ...
//     } else {

//     }
//   }

//   return flattenedArray;
// }

// Recursive Version
const flattenArray = (anArr) => {
  let flattenedArray = [];
  // loop over elements in the array
  // if the element is an array - flatten it
  for (let i = 0; i < anArr.length; ++i) {
    const currentElement = anArr[i];
    
    if (Array.isArray(currentElement)) {
      flattenedArray = flattenedArray.concat(flattenArray(currentElement));
    } else {
      flattenedArray.push(currentElement);
    }
  }

  return flattenedArray;
}

// If the function works on a flat structure, it will work against any depth of structure.
// All flatten array truly is, is an infinite slice based on one condition:
// IS IT AN ARRAY

// c(flattenArray(someArray));


// Reverse String

// Iterative

const someString = 'rec';

// const reverseString = (aStr) => {
//   let reversedString = '';

//   for (let i = aStr.length - 1; i >= 0; --i) {
//     const currentChar = aStr[i];

//     reversedString += currentChar;
//   }

//   return reversedString;
// }

// 1. Start with an empty string and add to it
// 2. Adding a character at a time, starting at the last one, going to the first one.
// 3. End when the string is out of length.
// 4. Return the string.

const reverseString = (aStr) => {
  if (aStr.length === 1) return aStr;
  else return aStr[aStr.length - 1] + reverseString(aStr.slice(0, -1));
}

c(reverseString(someString));

/*
  ('rec') => 'c' + reverseString('re');
  ('re') => 'e' + reverseString('r');
  ('r') => 'r';
  ('re') => 'e' + 'r';
  ('rec') => 'c' + 'er';
*/