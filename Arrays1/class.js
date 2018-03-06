const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

const someParty = ['Dog', 'Bird', 'Person', 'Planter'];

// Bracket Notation does not operate differentely between strings, arrays, and objects. It is actually the same underlying mechanic.
// Lets prove this by writing out an array as an object.
// c(someParty[1]);

// const ourObjArray = {
//   0: 'Dog',
//   1: 'Bird',
//   2: 'Person',
//   3: 'Planter',
//   length: 4,
// };

// What arrays promise you that POJOs (Plain old javascript object) do not, is they promise you what each KEY is. KEYS are the index numbers in an array, in a POJO, there is no such promise. They could an are anything in the world.
// c(ourObjArray[1]);
// c(someParty['not a thing']);

// This single difference between a POJO and a Array is the thing that makes arrays so powerful:
// The promise of ORDER.

// for (let i = 0; i < ourObjArray.length; ++i) {
//   const nextPartyGuest = someParty[i];
//   c(nextPartyGuest);
// }

// We can TLDR this whole section to: ORDER DOES A LOT FOR US.

const crazyArray = [
  [],
  {},
  function () {
    console.log('hi')
  },
  new Date(),
]

// crazyArray.forEach(elem => c(elem));
// Arrays have no limitation to the values you can store inside of them.
// Scarily, this means we can store arrays, in arrays, in arrays, in arrays, in arrays... i think you get it.

// Think about Wikipedia, how many arrays do you think there are to contain the data that is a single page?

// Whats a more practical use of nested arrays?

// All 2D games, work on an axis (the x, y axis)/
// An X-Y Axis is just an array of arrays.

// c(typeof []);
// ARRAYS ARE OBJECTS

// Grids

const rowArray = [1, 2, 3, 4, 5];

// This phenemenon you're seeing when we remove slice from line 75 is called Pass by Reference. The reason its happening very quickly is because the array that we are modifying is named rowArray - I am passing rowArray into the grid 5 times. When I eventually assign 'Treasure' to one of its indexes - it is happening to each reference of it. I am not modifying a unique array, I am modifying rowArray which is the same thing 5 times over in the grid. Were going to explore this more... next week. But if you run into this tonight on a workshop problem, my advice is to use 'slice' on whatever array is causing the problem. 'slice' just makes a copy of the array, thats it.
const makeGrid = (height) => {
  const grid = [];

  for (let i = 0; i < height; ++i) {
    grid.push(rowArray.slice());
  }

  return grid;
}

const ourGrid = makeGrid(5);

// Find Treasure
const randX = Math.floor(Math.random() * 5);
const randY = Math.floor(Math.random() * 5);

ourGrid[randY][randX] = 'Treasure';
// c(ourGrid);

const findTreasure = (aGrid) => {
  for (let y = 0; y < aGrid.length; ++y) {
    const row = aGrid[y];
    for (let x = 0; x < row.length; ++x) {
      const cell = row[x];
      if (cell === 'Treasure') return { x, y };
    }
  }

  return false;
}

// c(findTreasure(ourGrid));

// Ternary Operator
// Ternary operator is a lazy programmers best friend, it is EVERYWHERE ON CODE WARS.
const condition = true;
const trueResult = 'Eliot is cool';
const falseResult = 'Eliot is not cool';
// c(condition ? trueResult : falseResult);

// You can't use a ternary for anything except returning a value - so be cautious about trying to use it for something else.
// The other thing thats just a best practice thing (which all of you people using my linting setup will get a warning for) - is DO NOT NEST TERNARIES.

// c(
//   true
//     ? false
//       ? 'hi'
//       : true
//         ? 'keep going'
//         : 'scary'
//     : 'who cares'
// )

// Ideal use case of ternaries is to replace the following pattern

const dumbFunc = (arg) => {
  // if (arg === 'specific thing') {
  //   return 'specific result';
  // } else {
  //   return 'general result';
  // }

  return arg === 'specific thing' ? 'specific result' : 'general result';
}




