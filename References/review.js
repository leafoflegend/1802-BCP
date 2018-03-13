const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Very Odd
// Write a function, veryOdd. The function accepts an array of numbers, allTheNums. It should return a new array that contains only the odd numbers from allTheNums. veryOdd must not mutate allTheNums.

var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

const veryOdd = (anArr) => {
  const oddsArr = [];

  for (let i = 0; i < anArr.length; ++i) {
    const currentNum = anArr[i];

    if (currentNum % 2) oddsArr.push(currentNum);
  }

  return oddsArr;
}

var oddNums = veryOdd(allTheNums);

// console.log('oddNums:', oddNums); // [1, 3, 5, 7];
// console.log('allTheNums:', allTheNums); // [1, 2, 3, 4, 5, 6, 7, 8]

// Very Odd - Mutant Version!
// Write a function, veryOddMutant. The function accepts an array of numbers, allTheNums. The function should mutate allTheNums by replacing every even number in the array with the string 'normie'. veryOddMutant should return a count of the number of even numbers it replaced.

var allTheNums = [1, 2, 3, 4, 5, 6, 7, 8];

const veryOddMutant = (anArr) => {
  let oddsCounter = 0;

  for (let i = 0; i < anArr.length; ++i) {
    const currentNum = anArr[i];

    if (!(currentNum % 2)) anArr[i] = 'normie';
    else ++oddsCounter;
  }

  return oddsCounter;
}

var countRemoved = veryOddMutant(allTheNums);

// console.log('allTheNums:', allTheNums);
// // [1, 'normie', 3, 'normie', 5, 'normie', 7, 'normie'];

// console.log('countRemoved:', countRemoved);
// 4

// Clone Machine

var dolly = ["Dolly", "sheep", []];

const cloneAnimal = (animalArr) => {
  const clone = animalArr.slice();
  // reassign the inner reference to a new array
  clone[2] = [];

  const cloneName = `${animalArr[0]}Clone`;

  clone[0] = cloneName;
  animalArr[2].push(cloneName);

  return clone;
}

var dollyClone = cloneAnimal(dolly);

// The clone is of same species, with new name and no offspring
// console.log(dollyClone)    // ["DollyClone", "sheep", []]

// The parent animal now has an offspring in its array
// console.log(dolly)    // ["Dolly", "sheep", ["DollyClone"]]

// animalArr 0x1 -> [prim, prim, 0x2]
// clone = 0x1.slice() -> clone = 0x3
// 0x3 -> [prim, prim, 0x2]

// My Splice
// Write a mySplice function that mirrors the behavior of JavaScript's .splice() array method. However, mySplice should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Try and mirror the behavior of .splice() as closely as possible, but to start with, assume all arguments will be positive integers. Most importantly, your function should have two observable effects: it should modify the array it receives as an argument and it should return an array containing the deleted elements.

// Do not use the native .splice() method in your own implementation.

var myArray = [1,2,3];

// splices signature is (start, deleteCount, endless inserts, n, n+1, n+2, n+3)

const mySplice = (anArr, startIdx = 0, deleteCount, ...args) => {
  const deletedElems = [];
  const startOfArray = [];

  // Lets go from the beginning to the place where we START to delete.
  for (let i = 0; i < startIdx; ++i) {
    // Lets remove each element from the beginning and store it for later.
    startOfArray.push(anArr.shift());
  }


  // Okay, now its time to delete, lets start at the place where we begin deletion.
  for (let i = 0; i < deleteCount; ++i) {
    // Remove each element to delete from the array, and store it in a return array.
    deletedElems.push(anArr.shift());
  }

  // While any insert args remain
  while (args.length) {
    // insert them one at a time before putting the beginning of the array back on.
    anArr.unshift(args.shift());
  }

  // Okay, now all we have left in the original array are whatever comes after the deleteCount. (this might be nothing)
  while (startOfArray.length) {
    // Lets take each thing we had stored from the original beginning of the array, and put them back onto the original array one by one.
    anArr.unshift(startOfArray.pop());
  }

  // return the deleted elements.
  return deletedElems;
}

// console.log("returned elements: ", mySplice(myArray, 1, 1, 'hi'))    // [2]
// console.log(myArray)    // [1,3]

// Reverse Array
// Write a function that accepts an array and reverses that array in place. The behavior should mimic the behavior of the native .reverse() array method. However, your reverse function should accept the array to operate on as an argument, rather than being invoked as a method on that array.

// Do not use the native .reverse() method in your own implementation.

var myArray = [1, 2, 3, 4];

// O (n/2)

const reverse = (anArr) => {
  for (let i = 0; i < Math.floor(anArr.length / 2); ++i) {
    const leftElem = anArr[i];
    const rightPos = anArr.length - (1 + i);
    const rightElem = anArr[rightPos];

    anArr[i] = rightElem;
    anArr[rightPos] = leftElem;
  }
}

reverse(myArray);
// console.log(myArray)    // [4, 3, 2, 1]

// Deep Copy

// const copy = (anArr) => {
//   const copyArr = [];

//   for (let i = 0; i < anArr.length; ++i) {
//     const currentElemOrArray = anArr[i];

//     if (Array.isArray(currentElemOrArray)) {
//       const innerArray = [];

//       for (let j = 0; j < currentElemOrArray.length; ++j) {
//         const currentInnerElem = currentElemOrArray[j];
        
//         if (Array.isArray(currentInnerElem)) {
//           const innerInnerArray = [];

//           for (let q = 0; q < currentInnerElem.length; ++q) {
//             const currentInnerInnerElem = currentInnerElem[q];

//             innerInnerArray.push(currentInnerInnerElem);
//           }

//           innerArray.push(innerInnerArray);
//         } else {
//           innerArray.push(currentInnerElem);
//         }
//       }

//       copyArr.push(innerArray);
//     } else {
//       copyArr.push(currentElemOrArray);
//     }
//   }

//   return copyArr;
// }

// Golden Rule: If you write a function that works perfectly for any shallow version, it will work perfectly recursively
// So for this problem: Does it copy a shallow array?
const copy = (anArr) => {
  const copyArr = [];

  for (let i = 0; i < anArr.length; ++i) {
    const currentElem = anArr[i];

    if (Array.isArray(currentElem)) {
      // If I know this function can always copy a shallow array, why not pass it the next array? It can make a copy.
      copyArr.push(copy(currentElem));
    } else {
      copyArr.push(currentElem);
    }
  }

  return copyArr;
}

// When we find ourselves writing the same exact code over and over, we are doing something wrong.
// (or we dont yet know the right tool for the trade)
// When we need to execute some portion of code to an unknown depth there is one tool: recursion
// What recursion does is actually quite simple in defintion: Its a function that calls itself.
// Example: I know what to do if I see another array -> I: a: see if an elem in that array is an array, or b: if its a primitive i store it in an array to be returned.
// Recursion says every time we see a, we call ourself on it. In doing so, the only things we will ever actually store, are primitives. Because every time we see an array,
// We go into it looking for primitives, if another array appears, we do the same, to infinity. We will eventually hit the bottommost primitive. At that point the recursion
// Will 'bubble up'

const arr = [1,[2,3,[4,5]]];
// const newArr = [1, 2, 3];
const arrCopy = copy(arr);

arr[1][2].push(8);
// newArr.push(4);
console.log(arrCopy)    // [1,[2,3]] Copy is not affected!