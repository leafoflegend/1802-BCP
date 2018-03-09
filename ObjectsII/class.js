const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Iterating Through an Ordered Collection
// const anArray = [1, 2, 3];

// for (let i = 0; i < anArray.length; ++i) {
//   const currentElem = anArray[i];

//   c(currentElem);
// }

// Iterating Through an Unordered Collection
const anObject = {
  sarah: 'lynch',
  blair: 'williams',
  adam: 'salzburg',
}

// How do I move through this object WITHOUT KNOWING THE KEYS?

// If I just want to confirm that something is 'in' an object we can check with the 'in' operator.

// c('sarh' in anObject);

// c(!!anObject['sarh'])

// hasOwnProperty
// c(anObject.hasOwnProperty('sarah'));

// Well, its not so much that 'in' matters right now, its what it does when we combine it with a for loop.
// Its great that we receive that left side of the object...
// But all I give a shit about is the right side. Im here for the values!!!

// If we know the key and we know the object, we can always get the values.

// c('{');
// for (let key in anObject) {
//   const value = anObject[key];
//   console.log(`  ${key}: ${value}`);
// }
// c('}');

// The for in loop is great if you are super accustomed to for loops already... It can be a great structure for you, because it looks and feels very similar to something you know.

// That being said, I find the for in loop to be a bit of an antipattern. By that I mean that we dont really use the word 'in' anywhere freaking else. That makes it a kind of weird thing to remember right? Its not something we use too often. SOOOOO... What I like to do is use methods, just like we might with an array. So lets discuss those.

// The Alternatives to For In

// Object.keys
// Object.keys is a function (a method) that we can use on an object to return an array of its keys.

// an example:

const ourKeys = Object.keys(anObject);

// console.log(ourKeys);

// Given this array we can follow a pattern that you all are much more used too.
// Looping over an array.

// for (let i = 0; i < ourKeys.length; ++i) {
//   const currentKey = ourKeys[i];

//   const currentValue = anObject[currentKey];

//   console.log(currentKey, ':', currentValue);
// }

// Really neat ES6 versions of Object.keys.

// Object.values
// Object.values is bassically object.keys, except it returns values in the array instead of keys.

const ourValues = Object.values(anObject);

// console.log(ourValues);

// The con to values is that we do not have the keys anymore. We CANT use values to backtrack to their keys. This is a one directional flow -> keys get values, not vice versa. So while values is a great great hack for a lot of use cases, there will be times you need the keys and it will not succeed at this.

// ES6 Can give you both...

// Object.entries - This is the one  I expect you probably wont use.

// Object.entries returns an array of arrays. Each array within it is two elements. A key and its value.

const ourEntries = Object.entries(anObject);

// console.log(ourEntries);

// Our entries is the most verbose. It gives us the most information about the object as possible. That being said... Its downside seems obvious - its a hard to work with structure. Arrays within Arrays is most often not ideal for newer programmers.

for (let i = 0; i < ourEntries.length; ++i) {
  // const currentEntry = ourEntries[i];

  // const value = currentEntry[1];
  // const key = currentEntry[0];

  const [key, value] = ourEntries[i];

  console.log(key, ':', value);
}