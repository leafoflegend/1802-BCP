const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// DONT MIND THE ABOVE

// Indentation
// Spacing off the left side of our code.
// We as humans want context for what part of a codebase each line is a part of.
// For every opening 'block' we indent 'one unit of indentation'.
// When we 'close' a 'block' we remove 'one unit of indentation'.
// Tabs vs Spaces
// In JS we can think about a 'block' as curly braces e.g. { }

// In my editor I use 2 spaces per unit of indentation.

function a(b) {
  if (b > 5) {
    return b + 2;
  }
  return b + 1;
}

// c(a(1));

// Tabs vs Spaces
// You think your tab key inserts some amount of spaces into your code. But what it really does is insert a unicode character that looks like this \t
'\t' // Thats a tab character.
// What this means to your computer is arbitrary. Thats the important part. Tabs are defined by the system itself. One one persons computer a tab might 'render' as 6 spaces, and on another 8, and on another 2, we can't really know.

// The pro: People get to customize the look and feel of OTHER PEOPLES CODE FILES to look the way they want them to.
// The con: You may not always get files to look the way they looked for the person who wrote the code.

// Spaces
// You can modify your computer to have the TAB key on your keyboard not emit a tab character, and instead emit actual spaces.
// This is an important distinction becase:

// PRO: Your code will look the same on everyones computer. A space is a space. Theres not discrepancy about what that is.
// CON: You might not like the look of other peoples code.

// Lets write some bad code!

// Spacing is different 58-60 and 60-64 - agree
// Why two functions? - agree
// b, p, wtf? - agree
// line 58 no space before args, but line 59 space before args
// line 58 space after args before {, but line 59 no space after args before {
// each return has different spacing between the operator and the numbers
// d= is really awful, is = part of d the name or am i saying something is equal?
// semicolons? Do i like them, do i not? It seems like im picking and choosing when and where to use each randomly

// Thats a long function name.
// Youre damn right.
// Take seriously naming variables and functions.
// Functions name should aptly describe what it is they do.
// Variable names should aptly describe what it is they store.
function multiplyTwoNumsThenTriple(numOne, numTwo) {
  return (numOne * numTwo) * 3;
}

// The NUMBER ONE RULE OF ALL OF LINTING IS CONSISTENCY.
// You can have any opinion in the world about how your code should look. There are two things developers want out of you in that situation. That you can provide a valid argument for 'why?' even if they dont agree, and you are consistent with your own rules.
