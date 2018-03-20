const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Function Logger
// It's important to remember that functions can accept arguments of any type. Thus far, the functions we've written expect numbers, strings, or booleans as arguments, but functions can also accept the higher order data types, including other functions.

// Write a function functionLogger that accepts a function to run and an argument to pass to that function. Your functionLogger should log the message "Function starting", run the function, log "Function complete", and return the result of the function call.

function squareNum(x) { return x*x }

const functionLogger = (callback, arg) => {
  console.log('Function starting');
  const result = callback(arg);
  console.log('Function complete');
  return result;
}

// var squareOfFour = functionLogger(squareNum, 4);
// Function starting
// Function complete

// console.log(squareOfFour)    // 16

// Finder Function

// ES6 Introduced the 'findIndex' function, which is exactly this.
// 'find' function which will return the element that passes the supplied test.

var numbers = [1, 3, 5, 64, 7, 12];
var odds = [9, 13, 15, 17];

function isEven(num) { return !(num % 2); };

const finderFunction = (anArray, callback) => {
  const foundArray = [];

  for (let i = 0; i < anArray.length; ++i) {
    const currentElement = anArray[i];

    if (callback(currentElement)) foundArray.push(currentElement);
  }

  return foundArray;
}

// console.log(finderFunction(numbers, isEven)) // 3
// console.log(finderFunction(odds, isEven))   // -1

// Bonus:

// Refactor your solution so that finderFunction returns an array of all elements that pass the test, rather than the index of the first element that passes the test.

var evens = finderFunction(numbers, isEven);
// console.log(evens);    // [64, 12]
// If you write that function, congrats! You just built an implementation of the built in .filter array method, which we'll examine in more depth in a later lecture.

// Times Tables
// Write a function that generates a "Times Tables" function for any number passed in. The function should accept a single parameter (a number) and return a function that itself returns the product of that number and any number passed in.

function timesTable () {
  const multiplier = arguments[0];

  // This function below, is going to close over the data above. So when we return this below function it looks like the following:
  /*
  (num) => {
    return num * 9;
  }

  (if multiplier was 9, really, we can think about multiplier being replaced with whatever value was passed in when we first called)
  */

  return (num) => {
    return num * multiplier;
  }
}

// const timesTable = multiplier => num => num * multiplier;

var ninesTable = timesTable(9);
// c(ninesTable(8))    // => 72

var twelvesTable = timesTable(12);
// c(twelvesTable(100))    // => 1200

// In New York, the final bill is calculated as the price of the item, plus a 3% shipping fee, plus a 9% sales tax assessed on the price of the item together with shipping costs.
// In New Jersey, the final bill is calculated as the price of an item, plus a 5% shipping fee, plus a 7% sales tax assessed on the price of the item together with shipping costs.
// So the final bill for a $100 item in New York would be: (100*1.03)*1.09 = 112.27 And in New Jersey: (100*1.05)*1.07 = 112.35

const biller = (state) => {
  const createBiller = (sales, shipping) => (amount) => {
    return ((amount * sales) * shipping).toFixed(2);
  }

  switch (state) {
    case 'NY':
      return createBiller(1.03, 1.09);
    case 'NJ':
      return createBiller(1.05, 1.07);
    default:
      return createBiller(1, 1);
  }
}

var newYorkBiller = biller('NY');
// c(newYorkBiller(100))   // => 112.27

var newJersBiller = biller('NJ');
// c(newJersBiller(100));    // => 112.35

// Partial

// Our partial function will accept functions that expect two arguments and return functions that expect one. The other argument will be defaulted to the value passed in as the second argument to our partial function.

const partial = (callback, argOne) => {
  // argOne gets stored here.
  // callback gets stored here.
  return (argTwo) => {
    // We freeze its value in here, so that argOne is always whatever was passed in above.
    return callback(argOne, argTwo);
  }
}

// We create a callback function that takes two arguments
var summer = function(a, b) { return a + b };
// We call partial with the callback and 5
// it returns: 
/*
 function (argTwo) {
   return summer(5, argTwo);
 }
*/
sumFive = partial(summer, 5);
// We call summer with 10, meaning that the final function call is:
/*
function (10) {
  return summer(5, 10);
}
*/
// Very intense form of this called 'currying' that can make for mind bending reading
// Where functions essentially always return functions that are one argument closer to being called.
// someFunc(a, b, c, d) -> and theyll call it one argument at a time always getting back a function that needs one arg less
// someOtherFunc(b, c, d)
// anotherFunc(c, d)
// finalFunc(d)
// Yay! Result.
// c(sumFive(10));    // => 15;

// Logger Array
// Create a function that given a number returns an array of functions that log their respective index in the array.

// ES5
// Wrong but Normal Answer
function genLoggersWrong(length) {
  var funcArray = [];

  for (var i = 0; i < length; ++i) {
    funcArray.push((function() {
      return x;
    })())
  }

  return funcArray;
}
// Both log 5 - regardless of index in array
// The question should be 'why 5?' what makes 5 significant?
// 5 is actually the number at which this for loop shuts down.
// Importantly, the fact that the for loop closes, does not mean that 'i' does not exist
// 'i' exists regardless of the for loop, and that variable has a value of 5. Each function is still looking at the variable 'i'.
// So the reason we see 5 on each index is because 5 is in fact i's value at this time.

// ES5 Right Way
function genLoggersES5(length) {
  var funcArray = [];

  function createLogger(numToLog) {
    return function () {
      return numToLog;
    }
  }

  for (var i = 0; i < length; ++i) {
    funcArray.push(createLogger(i));
  }

  return funcArray;
}
// why does this work?
// Well, today, we learned about a way to freeze values in place - closure.
// These functions are no longer logging 'i', theyre logging 'numToLog'
// 'numToLog' no longer exists after we invoke the function - it exists only in the frozen scope of the function returned.
// That makes it immune to outside changes. It is forever frozen in place inside of that function.

// what if we used es6?
// ES6 Right Solution

// let introduces 'block scope'
// And what this means, is that whatever curly brace a let is involved in, is its own scope.
// In the case of a for loop, we just made the for loops body its own scope -> meaning its doing the same thing a function does
// Its creating a closed over scope inside each loop of the for loop.
// We are creating closure without writing another function.
// You dont have to understand any of that. You just have to stop using var.
function genLoggersES6(length) {
  var funcArray = [];

  for (let i = 0; i < length; ++i) {
    funcArray.push(function() {
      return i;
    })
  }

  return funcArray;
}

var loggerArray = genLoggers(5);
// c(loggerArray[0]());    // 0
// c(loggerArray[4]());    // 4