const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// What are methods?

// Methods are a term from OOP (Object Oriented Programming) - A Method is a Behavior of a Class
// Javascript doesnt really have classes...
// We still dont really think about methods the same way.

const someString = {
  value: '',
  slice: function () {
    return this.value;
  },
  setValue: function (val) {
    this.value = val;
  }
}

// That setValue
someString.setValue('hello!');
// and that slice
// c(someString.slice());
// satisfy the JS definition for a method:
// A method is any function that belongs to an object.
// Methods are behaviors of objects
// Properties are pieces of data that belong to objects

// c(Array.prototype.slice);

// Reverse an array and return it, but afterwards Ill need to use the original array as well.

const reverseArray = (anArray) => {
  return anArray.slice().reverse();
}

const theArray = [1, 2, 3, 4];

// c(reverseArray(theArray));
// c(theArray);

// The point being hopefully, you dont always get what you expect back from array methods. The only way to know, is to look, so for the second time in two days this week I get to say: READ THE DOCUMENTATION

// .slice is a shallow copy, not a deep copy.
// What do I mean?
// Remember our weird grid example from yesterday where I made treasure show up in every row?
// So slice defended us against a Pass by Reference problem...
// It cant always do that.

const innerInnerArray = [3];

const innerArray = [2];

innerArray.push(innerInnerArray);

const outerArray = [1];

const copyArray = innerArray.slice();

outerArray.push(copyArray);

innerArray.push(5);
innerInnerArray.push('TROUBLE!');

// c(outerArray);
// c(innerArray);

// This phenemonen above, where slice was unable to prevent 'TROUBLE' from getting into the outerArray is because, slice is a shallow copy.
// Yesterday we started playing with and thinking about 'depth', e.g. the concept of arrays in arrays in arrays in arrays...
// Slice is only capable of making a true 'copy' of one layer down. Everything else (every layer below one deep) is not a new copy, but the exact same thing.
// How might I do a deep copy?
// Thats a tough question and were going to come around to that next week.
// Importantly, slice is your best friend for the moment in regards to how to attempt to avoid modifying data you dont want to.

const someNewArray = [1, 2, 3, 4];

// c(someNewArray.slice(-2));
// c(someNewArray);

// slice can replace substr, substring, and splice (to some degree).

// Splice does what it sounds like it should do, it is like taking a surgical knife to an array and removing things, adding things, and modifying things. Splice can do and will do any combination of these.

someNewArray.splice(1, 2, 'a', 'b', 'c');
// c(someNewArray);

// arg 1: startIndex
// arg 2: deleteCount
// argsssssssssssssssss: every argument after the first two is inserted into the array in order of arguments after deletion

// splice is certainly altering the original array.
// Splice can lead to very strange bugs if you are not cautious about what it is you alter with splice.

// Debugging

// The 'console'

/*
The console does not actually exist. It is not part of javascript, this should all scare you.
console is actually part of something we dont talk about much in this class... a magical thing called:
'the environment'
What I mean is that some of you are probably still using repl, and others i helped and are using node in vscode, and others still might be using like codepen... each of these things we just said has their own version of console. console is something provided by the thing running your javascript. It is NOT PART OF JAVASCRIPT.
*/

// Debugger

for (let i = 0; i < 25; ++i) {
  const someThing = Math.random() * 50;

  console.log('look!');
  console.log(someThing);
}