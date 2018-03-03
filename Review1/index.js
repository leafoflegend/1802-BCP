const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Let vs Var

// Let is actually quite different.

// Block Scoping

// We think of scope as being only created by functions
// let actually creates scope.

// Given a number, I want to make a function that returns an array of functions that will log which number they are.

// createLoggers(5);
// [func0, func1, ...];
// func0() // -> 0

// function createLoggers(ceiling) {
//   var loggerArray = [];

//   for (let i = 0; i < ceiling; ++i) {
//     loggerArray.push(function() {
//       console.log(i);
//     })
//   }

//   return loggerArray;
// }


// var loggerArray = createLoggers(5);
// console.log(loggerArray);

// loggerArray.forEach(func => func());

// A functional for loop


const functionalForLoop = (floor, ceiling, callback) => {
  const results = [];
  
  while (results.length < ceiling - floor) {
    results.push(callback(results.length))
  }
}

const someCollection = ['hi', 'bye', 'goodbye'];

functionalForLoop(0, someCollection.length, (idx) => console.log(someCollection[idx]));
