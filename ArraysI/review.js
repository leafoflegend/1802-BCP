const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Index Of
// Write a function indexOf that accepts two arguments: an array and an element to search for. The function should return the index of the element if found in the array and -1 if not. Do not use JavaScript built in .indexOf method.

const indexOf = (anArray, searchTerm) => {
  for (let i = 0; i < anArray.length; ++i) {
    const currentTerm = anArray[i];

    if (currentTerm === searchTerm) return i;
  }

  return -1;
}

// Theres lots of cool methods you dont know. Try to read the DOCUMENTATION OFTEN.
// const indexOf = (anArray, searchTerm) => {
//   return anArray.findIndex((elem) => elem === searchTerm);
// }

// c(indexOf([1,2,3], 2));    // => 1
// c(indexOf(["hello","world"], "goodbye"));    // => -1

// Reverse Array
// Write a function reverseArray that reverses the elements of an array and returns the reversed array.
// .reverse() was a very legal cheat for this solution that I would accept.

const reverseArray = (anArray) => {
  const reversedArray = [];

  // for (let i = 0; i < anArray.length; ++i) {
  //   const currentElem = anArray[i];

  //   reversedArray.unshift(currentElem);
  // }

  for (let i = anArray.length - 1; i >= 0; --i) {
    const currentElem = anArray[i];

    reversedArray.push(currentElem);
  }

  return reversedArray;
}

// c(reverseArray([1,2,3,4]));    // => [4,3,2,1]


// num++ === post-incrementing: I want to add one to a number after everything else on this line is complete.
// ++num === pre-incrementing: I want to add one to a number before anything else on this line is complete.
// Both of these will follow two rules if multiple are on the same line -> parenthesis win all - left -> right trumps in the case of no parenthesis.
// Javascripts often debatable choices for how PEMDAS works.
// const incrementNum = (aNum) => {
//   return aNum++;
// }

// c(incrementNum(1));

// Zoo Inventory
// Write a function zooInventory that takes a zoo's inventory of animals (represented using nested arrays) and logs out each animal's name, species, and age.

var myZoo = [
    ["King Kong", ["gorilla", 42]],
    ["Nemo", ["fish", 5]],
    ["Punxsutawney Phil", ["groundhog", 11]]
];

// const zooInventory = (aZoo) => {
//   for (let i = 0; i < aZoo.length; ++i) {
//     const currentAnimal = aZoo[i];

//     const animalName = currentAnimal[0];
//     const animalType = currentAnimal[1][0];
//     const animalAge = currentAnimal[1][1];

//     console.log(`${animalName} the ${animalType} is ${animalAge}`);
//   }
// }

// Spreading
// Spreading is a way for us to name new variables by digging through nested objects using the objects syntax.

const zooInventory = (aZoo) => {
  for (let i = 0; i < aZoo.length; ++i) {
    const currentAnimal = aZoo[i];
    const [animalName, [animalType, animalAge]] = currentAnimal;

    console.log(`${animalName} the ${animalType} is ${animalAge}`);
  }
}

// zooInventory(myZoo);
// King Kong the gorilla is 42
// Nemo the fish is 5
// Punxsutawney Phil the groundhog is 11

// Array Flattener
// Write a function that accepts a two-dimensional array and returns a flattened one-dimensional copy of the array.

// Hint: Use the typeof operator or Array.isArray() to test whether an element is an array. If so, use a nested loop to access those values.

// Verbose solution
// const flatten = (nestedArray) => {
//   const flatArray = [];

//   for (let i = 0; i < nestedArray.length; ++i) {
//     const currentElem = nestedArray[i];

//     if (Array.isArray(currentElem)) {
//       for (let j = 0; j < currentElem.length; ++j) {
//         const currentInnerElem = currentElem[j];

//         flatArray.push(currentInnerElem);
//       }
//     } else {
//       flatArray.push(currentElem);
//     }
//   }

//   return flatArray;
// }

// Reduction solution
const flatten = (nestedArray) => {
  return nestedArray
    .reduce(
      (flatArr, nextElem) => Array.isArray(nextElem) ? flatArr.concat(nextElem) : flatArr.concat([nextElem]),
      [],
    );
}


// What if there was another nested array like [1, 2, [3, 4, [5, 6]]]... That is where recursion comes to the rescue.
// c(flatten([1,[2,3],4]));    // => [1,2,3,4]


// You are an aspiring programmer solving many a introductory algorithm have you noticed the following pattern EVERYWHERE

// do something with a collection, return a new thing based on collection

// The below thing is reduce...
// WE call this pattern reduction because we think of this pattern as 'reducing' a 'collection' into a new value.
// Think of reducing stock, or wine, you take a large amount of something, and make a new better thing out of it.
// function doSomethingWithCollection(collection) {
//   var accumulatedValueOfSomeSort = 'arbitrary value';

//   for (var i = 0; i < collection.length; ++i) {
//     // do something to accumulatedvalue with each thing
//     var currentThing = collection[i];

//     accumulatedValueOfSomeSort += currentThing;
//   }

//   return currentThing;
// }

// Make Grid
// Write a function makeGrid that accepts two dimensions and returns a grid with those dimensions. Each "tile" of the grid should be composed of a number representing the column of that "tile".

const makeGrid = (width, height) => {
  const makeRow = () => {
    const row = [];

    for (let i = 1; i <= width; ++i) {
      row.push(i);
    }

    return row;
  }

  const grid = [];

  for (let i = 0; i < height; ++i) {
    grid.push(makeRow());
  }

  return grid;
}

// c(makeGrid(3,4));
/* => [[1, 2, 3],
       [1, 2, 3],
       [1, 2, 3],
       [1, 2, 3]]
Note: The output may not be appear "square"-like as in the above, but
the structure of the array should match.
*/
// Bonus: Write a function removeColumns that accepts a grid (two-dimensional array) and number of columns to remove, and returns the new grid.

const removeColumns = (grid, deleteCount) => {
  const removedGrid = [];

  for (let y = 0; y < grid.length; ++y) {
    const row = grid[y];
    const newRow = [];

    // removedGrid.push(row.slice(0, row.length - deleteCount));
    for (let x = 0; x < row.length - deleteCount; ++x) {
      const currentElem = row[x];

      newRow.push(currentElem);
    }

    removedGrid.push(newRow);
  }

  return removedGrid;
}

c(removeColumns([[1, 2, 3],
               [1, 2, 3],
               [1, 2, 3],
               [1, 2, 3]], 2));
/* => [[1],
       [1],
       [1],
       [1]]
*/