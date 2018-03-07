const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Review Arrays II

// Debug Hunt
// Make it not break, dont make it have meaningful output.

var debugHunt = function() {
  var hello1 = function(){
      return console.log('step 1')
  }

  var hello2 = function() {
      return console.log("Hello" + msg);
  }

  hello2();

  function hello3(a,b) {
      return console.log(a + b);
  }

  hello3(getting, better);


  var hello4 = function(first, last) {
      return console.log(fir + ' ' + last);
  }

  hello4("Debugging is",  "simple");

  function hello4() {
      return console.log("So far so good");
  }

  hello4()

  var hello5 = function(num) {
      return console.log('!!')
  }

  hello5()
}

// Even and Odd
// Write a function that accepts an array of numbers and returns an array of arrays. The first array in the return array should include all even numbers. The second array in the return array should include all odd numbers.

// Write two solutions for this problem. In the first, use only array methods from the following list:

// .pop()
// .push()
// .shift()
// .unshift()

// In the second, avoid using those methods and incorporate .slice() (you may use the .length property in both).

// Iteration 1
// Smart Reasonable Solution
const evenOdd = (anArray) => {
  const evensArr = [];
  const oddsArr = [];

  for (let i = 0; i < anArray.length; ++i) {
    const currentNum = anArray[i];

    if (currentNum % 2) oddsArr.push(currentNum);
    else evensArr.push(currentNum);
  }

  return [evensArr, oddsArr];
}

// Iteration 2
// .slice & .concat
// Dumb contrived solution
// const evenOdd = (anArray) => {
//   let evensArr = [];
//   let oddsArr = [];

//   for (let i = 0; i < anArray.length; ++i) {
//     if (anArray[i] % 2) oddsArr = oddsArr.concat(anArray.slice(i, i + 1));
//     else evensArr = evensArr.concat(anArray.slice(i, i + 1)); 
//   }

//   return [evensArr, oddsArr];
// }

var myArray = evenOdd([1,2,3,4,5,6]);
// console.log(myArray)
// [ [ 2 ,4, 6 ], [ 1, 3, 5 ] ]

// My Unshift
// One of the best ways to learn a concept is to go through the process of implementing it yourself. In this section, we'll implement our own versions of several key array methods.

// To start, write a myUnshift function that mirrors the behavior of JavaScript's .unshift() array method. However, myUnshift should accept the array to operate on as an argument and return the new array with the added element.

// For now, assume that myUnshift will receive only two arguments: the array, and a single value to be added to the start of the array.

// Do not use the native .unshift() method in your own implementation.

// New Array Solution
// const myUnshift = (anArr, elem) => [elem].concat(anArr);

// Same Array Solution
// const myUnshift = (anArr, elem) => {
//   anArr.splice(0, 0, elem);

//   return anArr;
// }

// Nieve Version
// const myUnshift = (anArr, elem) => {
//   const copyArr = anArr.slice();

//   copyArr.splice(0, 0, elem);

//   return copyArr;
// }

const testArray = [1,2,3];
// c(myUnshift(testArray, 0));    // => [0,1,2,3]
// c(testArray);

// My Join
// Write a function myJoin that mirrors the behavior of JavaScript's .join() array method. However, myJoin will accept the array to operate on as its first parameter, rather than being invoked as a method on that array.

// Try and mirror the behavior of the native .join() method exactly. Note that if an element is undefined or null it should be converted to the empty string. Do not use the native .join() method in your own implementation.

const myJoin = (anArr, joiner = ',') => {
  let joinedStr = '';

  // we need to skip the final value
  for (let i = 0; i < anArr.length; ++i) {
    const currentElem = anArr[i];
    // we need to only include non-undefined values into the joined str
    if (currentElem !== undefined) {
      joinedStr += `${currentElem}${joiner}`;
      // currentElem + '' + joiner
    }
  }

  return joinedStr.slice(0, -1);
}

// c(myJoin(['hello', undefined, 'world'], ' '));
// // => 'hello  world'
// c(myJoin([2, "be", false]));
// c(myJoin(['hello']));
// => '2,be,false`

// My LastIndexOf
// Write a myLastIndexOf function that mirrors the behavior of JavaScript's .lastIndexOf() array method. However, myLastIndexOf will accept the array to operate on as an argument, instead of being invoked as a method on that array.

// Try and mirror the behavior of the native .lastIndexOf() method as closely as possible. Note that .lastIndexOf() accepts an optional parameter representing the index at which to start searching backwards.

// Do not use the native .lastIndexOf() method in your own implementation.

const myLastIndexOf = (anArr, searchTerm, startPos = anArr.length - 1) => {
  for (let i = startPos; i >= 0; --i) {
    const currentTerm = anArr[i];

    if (currentTerm === searchTerm) return i;
  }

  return -1;
}

// c(myLastIndexOf([1,2,1], 1));    // => 2
// c(myLastIndexOf([1,2,1], 1, 1));    // => 0

// My Slice
// Write a mySlice function that mirrors the behavior of JavaScript's .slice() array method. However, mySlice will accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Try and mirror the behavior of the native .slice() method exactly. If your function is passed a negative index value, that value should become an offset from the end of the sequence.

// Do not use the native .slice() method in your own implementation.

const mySlice = (anArr, startPos = 0, endPos = anArr.length) => {
  const copyArr = [];

  if (startPos < 0) startPos = anArr.length + startPos;
  if (endPos < 0) endPos = anArr.length + endPos;

  for (let i = startPos; i < endPos; ++i) {
    const currentElem = anArr[i];

    // what if currentElem was an object? Are we copying that object?
    copyArr.push(currentElem);
  }

  return copyArr;
}

// c(mySlice([1,2,3]));    // => [1,2,3]
// c(mySlice([1,2,3], 1));    // => [2,3]
// c(mySlice([1,2,3], 1, 2));    // => [2]
// c(mySlice([1,2,3], -1));    // => [3]

// Rotate Array
// Write a function rotate that accepts an array and a number n and returns a new array with the elements "rotated" n spaces.

// If n is greater than 0 it should rotate the array to the right. If n is less than 0 it should rotate the array to the left. If n is 0, then it should return the array unchanged.

var myArray = [1, 2, 3, 4, 5];

const rotate = (anArr, numOfRotations) => {
  const rotatedArray = anArr.slice();

  const direction = numOfRotations >= 0 ? 'right' : 'left';
  const realRotations = Math.abs(numOfRotations);

  for (let i = 0; i < realRotations % anArr.length; ++i) {
    if (direction === 'right') {
      rotatedArray.unshift(rotatedArray.pop());
    } else {
      rotatedArray.push(rotatedArray.shift());
    };
  }

  return rotatedArray;
}

// c(rotate(myArray, 1));     // => [5, 1, 2, 3, 4]
// c(rotate(myArray, -1));    // => [2, 3, 4, 5, 1]
// c(rotate(myArray, 0));    // => [1, 2, 3, 4, 5]

// The Time Complexity of this problem scales pretty terribly currentely
// Big O
console.time('Rotate');
c(rotate(myArray, 11999999));
console.timeEnd('Rotate');

// 'Never Pre Optimize Your Code'
// We say this because optimization is the hardest part, and it isnt neccessary until... performance is a problem. If performance is never a problem for your code (no matter how shitty the performance) then you shouldnt be fixing it. Because, the shortest route is the best route.