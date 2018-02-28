const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// ES6 extra type
var someSymbol = Symbol('hello');
var anotherSymbol = Symbol('hello');

// console.log(`Are someSymbol and anotherSymbol equal?`, someSymbol === anotherSymbol);

// Numbers
var someResult = 5.42322132124 * 3/2;
// console.log(`someResult: ${someResult}`);

// We need to consider the implications of this working so easily.

// How do computers know about numbers?
// Binary: 00 === 2, 01 === 3
// Each piece of a binary string takes up a spot in memory.
// Each time we add a 'character' (that being another 0, or 1) we are taking more memory.
// In computers every little piece of memory is always a 0 or a 1.

// I said consider 5.42322132124. What do you think this looks like in binary?
// A lot of 0,s and 1's. The second we introduce a decimal we have immesnely complicated the procedure by which a computer stores numbers.

// In other languages they deal with this 'extra mapping' that has to go on for complex numbers (or immensely large numbers) by forcing some extra syntax

// float decimalNumber = 52.2132132123;
// int wholeNumber = 5;
// long largeNum = 817286139827123801923079109273918273;

// Why might a language want to differentiate between types of numbers?
// If we want a language that is optimizing its memory usage, we need to consider the kind of number being written.

// When you say var...
// var
// Javascript, before reading anything afterwards says "Oh, I need x amount of memory to store whatever comes after this."
// It doesn't say "Because its a whole number i know it only needs y."

// Javascript ALWAYS MAKES A TRADEOFF.
// Javascript chooses convenience over performance.

// console.log(Number.MAX_SAFE_INTEGER);

// Javascript cannot handle large numbers, or too many decimals, because its allowing you to claim any number as simply 'var'
// There are libraries in JS that attempt to solve for this - but i would call them strange and non-ideal.

// The Second thing about numbers is we deal with them using something called 'operators'.

// Operators are just like they are in math. They are symbols that we place between numbers to designate some operation.

/*
    * === multiply
    / === divide
    + === add
    - === minus
    ** === power: to the power of (exponentiation)
    % === modulus: the remainder of a division operation

    Javascript DOES have other math operations it can perform, those can be found under the Math object, e.g. Math.sqrt()
*/

// Booleans

// true
// false

// These mean nothing to a computer, you the human are the understander of truthiness and falsiness.

// Null vs Undefined

// console.log(null === undefined);

// null: is a placeholder for a future value.
// undefined: is your lack of assigning value to something.

// At a deeper layer...

// null is never used by the internals of JS. This means any time you see the term 'null' arise out of a function call, or the result of any operation, it is YOUR FAULT. The only place it can come from is you.

// undefined is always used by the internals of JS. If you receive undefined from the JS engine - it means you screwed up, and that there is an error somewhere, even if its not a 'error' error. By this I mean you probably forgot to return a value from a function, or assign a value to a variable, or one of many other things that dont "break" javascript, but we as humans would certainly call an error.

// DONT EVER PURPOSEFULLY WRITE UNDEFINED.
// Undefined, when reserved as something that Javascript alone will spit out - allows you to debug your code quicker. If you start manually using undefined for anything, you cant assume that something went wrong.

// NULL IS SOMETHING YOU ASSIGN TO A VARIABLE THAT YOURE NOT READY TO GIVE ITS FINAL VALUE.
// That way we can determine when we see null, that its final value nmnever arrived.

// Strings
// Strings are the most complex non-object type in Javascript.
// The reason for this complexity is somewhat simple, and that is that strings arent really a thing. Strings are collections of characters. Characters are actually their own type. You as a JS programmer dont have native access to character defintions - thats up to your computer - so we use strings to represent the characters that we are discussing.

var someString = 'The students were attending class.';

// The fact that we get T - makes strings kind of not primitives. If we think of primitives as having ONE value, strings then, break that rule. They are comprised of many many values.
// console.log(someString.charCodeAt(0));

// Character codes come from something called ASCII. You can look it up, its a really boring table. Its just numbers correlated to the most basic symbols on your keyboard. Javascript can actually handle more than just ascii... lets prove that.
var copCarStr = '🚓🚓🚓🚓';
// console.log(copCarStr.charCodeAt(0));

// Javascript has no freaking idea what that is. Its your computer that does.
// Strings for this reason come with a lot of METHODS. Like, charCodeAt.
// METHODS are what we call any function attached to an object. You havent realized it yet, but strings have an object called a constructor tied to them, were not going to talk about constructors, we are going to talk about methods.

// Split breaks apart a string by whatever you pass in, I passed in nothing, so its breaking it up as well as it can between each character.
var everyLetter = someString.split('');
// console.log(everyLetter);

// Strings come with lots of ways to deal with the fact that they are made up of characters.

// toUpperCase
// toLowerCase
// slice
// substr
// substring

// But Im not going to teach you all those, and heres why...

// RTFM
// You are an aspiring developer, you are going to need to learn to spend about 30% of your time programming reading DOCUMENTATION. That started yesterday. So lets go look at documentation...

// Strings also accept operators - you saw me use one the bracket notation, but you can also use the + symbol.

// Concatenation
var firstName = 'Eliot';
var lastName = 'Szwajkowski';
// console.log('Eliot' + ' ' + 'Szwajkowski');

// Template literals
// console.log(`${firstName} ${lastName}`)

// Bracket Notation
// All arrays, collections, strings, anything with multiple entries in any language in all of computer science starts at 0. NOT 1. The first thing in any collection will be at the zero index.
// I promise YOU. Really promise, you will have 10-20% of your bugs as a new developer be because of this.
// Off by One error.
// c(firstName[0]);

// You can also figure out how many characters are in a string by using the .length property
// c(firstName.length);
// This sometimes confuses people when they want to access the last thing in a collection.
// c(firstName[firstName.length]);
// ^ is an off by one error
// The right way is:
// c(firstName[firstName.length - 1]);
// This is because the first element is at the 0 index, meaning the last is at 4. So the length property will come back and bite you.

// Immutability
// A value that cannot be changed. That is an immutable value.

var two = 2;

two = 3;

// Did I just make the number 2 equal to the number 3?
// I did not. I made the variable 'two' equal to 3 the number. This is a very important distinction.

// Can I do this?
// Left hand is the left hand of the equal sign
// rValue is not assignable (rValue stands for reserved value).
// 2 = 3;

// true = false;

// Is because EVERY SINGLE PRIMITIVE VALUE IN JAVASCRIPT IS IMMUTABLE. WE CANNOT MODIFY THE VALUES OF NUMBERS, STRINGS, BOOLEANS, UNDEFINED, AND NULL.

// This is for your protection.

// Variables exist to be references to values - when we change a variables assignment we are saying that we want it to reference a new value, NOT THAT WE WANT TO CHANGE THE OLD VALUE TO THE NEW ONE.
// ^ will come up in a different way with objects. But lets hold our horses on that.

// c(typeof '');
// c(typeof 2);
// c(typeof null); // null claims its an object
// (its not an object)
// This is a bug dating back to the year javascript was made.
// It is such a PROLIFIC bug, in the sense that it is all over the internet, that we cant actually fix it without bringing down the internet.
// c(typeof undefined);
// c(typeof false);

var someNum = 'a' * 5;
// c(someNum);
// NaN === 'Not a Number'
// It represents some value with some numerical value contained in its creation, but an indescernible current numerical value.
// You cant get not a number, without a number in the first place.

// c(typeof NaN);

// function isNaN(maybeNumber) {
//   if (typeof maybeNumber === 'number') {
//     if (maybeNumber !== maybeNumber) return true;
//   }

//   return false;
// }

// This is now built into the language.
// c(isNaN(NaN));

// For the most part you can trust typeof. There are exceptions, there are solutions to each exception, but you should be wary of the types of data youre dealing with, because...

// Coercion
// 4 + '8' === '48'
// Coercion is the result of Javascripts belief that it should choose CONVENIENCE OVER PERFORMANCE. Javascript is saying, I dont want to error out on your code even if the things are different types.

// Some people think this is awful. They probably write in a statically typed language (languages where this isnt allowed). Javascript is not one of those.

// Truthy/Falsey
// Truthey/Falsey is something JS developers can use as an advanced approach to dealing with different types of values within a test expression.
// You dont neccessarily need to USE THIS, but you absolutely need to understand this.

// ! (logical not) - will return the boolean inverse of any given value.
// c(!false);
// c(!0);
// Using the not operator opens an interesting door for us, because it enables ut to quickly and accurately glimpse the truthy/falsy coercion of any value.

// A famous hack for this is: !!
// !! === invert the truthy/falsy, then do it again. Final result: The actual truthy falsy value of any value in all of javascript.

// c(!!'');

// Placeholder value for later.
var someImportantValue = null;

function setValue() {
  // Pretend false is some condition that may have been met
  if (false) {
    someImportantValue = 'important condition met';
  }
}

setValue();

if (someImportantValue) {
  // do something
} else {
  // do another thing
  console.log('another thing');
}