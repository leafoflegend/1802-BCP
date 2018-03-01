const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Loops

// Your only iterative structure at this point in Javascript.

// for (var i = 0; i < 10; ++i) {
//   console.log(i);
// }

// for loops are made up of 4 pieces.
// initilization = var i = 0; -> Where do i start iterating from?
// condition = i < 10; -> When do I stop iterating?
// update = ++i; (i assume most of you say i++, we'll talk about that.) -> How do I get closer to the condition becoming false?
// body = the stuff you want to happen each time, here: console.log(i); -> OPTIONAL

// These four pieces of logic will be the same across every single form of iteration in every single programming language.
// Recursion, tail recursion, tail iteration, generators (yielding), it doesnt matter. Each and every one of those has to meet those 4 criteria: start, end, update, body

// A more primitive for loop was once introduced called a 'while' loop. These are still found in almost every language.

// while loop

// While loops ask for only one thing:
// The condition.
// The rest is up to you.

// We have an initilization
// var i = 0;

// // While is only technically taking a condition... but...
// while (i < 10) {
//   // and a body -> we could opt out of a body, but why are we doing this iteration then?
//   console.log(i);
//   // an update
//   ++i;
// }

// While loops generally are not preferrable over for loops, because for loops FORCE US to explicitly write the pieces needed for iteration. You can easily forgot these when writing a while loop. This is a 'best practice' thing. Its not that it wont work the same, its that if you always write for loops you are saving yourself from potential bugs.

// While loops do offer one thing that for loops dont - its worth mention - so im going to, although I suspect you all will never use this.

// Do While

// do while is a while loop with one small difference - it runs atleast one time every time.

// var i = 0;

// do {
//   console.log(i);
//   ++i;
// } while (i < 0);

// DRY - Dont Repeat Yourself
// This is a founding principle of programming - why write more code? Write less.

function logMultiplesOfFive(ceiling) {
  for (var i = 0; i <= ceiling; i += 5) {
    console.log(i);
  }
}

// logMultiplesOfFive(50);

// This is kind of DRY, but we can make it dryer...

function logMultiplesOfANum(num, ceiling) {
  for (var i = 0; i <= ceiling; i += num) {
    console.log(i);
  }
}

// logMultiplesOfANum(3, 30);

// break vs continue vs return
// My purpose in the following demonstration is to proce that break and continue are worthless.

// break: break immediately ends a loop.

// for (var i = 0; i < 10; ++i) {
//   if (i > 5) break;
//   console.log(i);
// }

// Why not just set the condition to i < 5
// Break tends to show that you have a misunderstanding in your condition.
// Return tends to prove all these things even more useless because it can accomplish the same tasks.

// continue
// continue: allows us to SKIP the CURRENT ITERATION of a loop.

// evens vs odds

// This is highly optimal - were actually only doing 5 iterations with this vs 10.
// with the continue example, the loop runs 10 times, but actually only does something of use 5 of those.
// One might say that we have doubled the performance of this function.
// for (var i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// Bad Example:
// for (var i = 0; i < 10; ++i) {
//   if (i % 2 === 1) continue;

//   console.log(i);
// }

// In my mind 'continue' seems to mean that you dont understand how to update a for loop. While the body of a function can enable you to equally 'skip' taking action like only logging on evens, the real optimization is in better understanding how to update the next iteration. Like doing += 2 instead of ++

// return
// return: is magical and wonderful and were going to talk so much about
// return immediately ends any function it is within. Period.
// return also is able to bring the value after it - back to wherever the function was called from.
// Lastly, and this is beyond the scope of todays lecture (lol scope) - return enables us to move data between scopes (see Kyle Simpsons Scopes and Closure, or tomorrows lecture)

function runLoopTillNumAndReturn(num) {
  for (var i = 0; i < Infinity; ++i) {
    console.log(i);

    if (i === num) {
      return num;
    }
  }
}


// c('return value: ', runLoopTillNumAndReturn(150));

// return should be your go to word for all things.
// Two big reasons at this point:
// You should be writing functions so that your code is as DRY as possible, that means you need return.
// Secondly, return trumps any form of using continue and break.

// The anatomy of functions:

// Function Declarations (this is likely what you do)

// Declaration: 'function'
// Naming: 'myName'
// argumentDeclaration: '(someArg)'
// And the function body: {  stuff  }
function myName(someArg) {
  /* someBody */
  console.log(someArg);
}

// Function Expression
// Its made up of all the same pieces, except the name...
// The name is the name of the variable. The function is what we would call 'anonymous' because the function has no name -> just a variable knows about it.

var anotherName = function(someArg) {
  console.log(someArg);
}

// ES6 Functions (Fat Arrow Functions)
// Name: is actually still a variable like a function expression - the function itself is indeed anonymous.
// Arguments are passed in the same through (someArg), but this is a bit of a fallacy, when there is only one argument you can omit the parenthesis making `someArg => { someStuff }` legal syntax.
// Lastly, the function body is the same syntax -> with one exception. If we omit the curly braces we are IMPLICITLY TELLING THE JS ENGINE THAT THERE IS A RETURN.
// So const dumbFunc = num => num * 2; is legal syntax. This will take an argument and return it times two.
// lexical binding: 'this' - in arrow functions 'this' means nothing.
const finalFunction = (someArg) => {
  console.log(someArg);
}

// ALL FUNCTIONS RETURN SOMETHING
// SEE THIS:

function doSomething() {};

// c(doSomething());

// We get undefined...

// undefined is an actual type and value though, so something is being returned...
// Example:

// console.log(nonExistentThing);
// ReferenceError

// What functions do is, if you forgot to put a return in a function the function itself will automatically return undefined.
