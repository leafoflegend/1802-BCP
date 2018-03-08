const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Last Friday Night

var transactions = [
  {
    name: "Tons of glitter",
    amount: 70
  },
  {
    name: "Porcelain Pink Flamingos",
    amount: 92
  },
  {
    name: "Chandelier replacement",
    amount: 10000,
  },
  {
    name: "Dinner at TGIF x6",
    amount: 350
  }
]

// const sumTransactions = (listOfTrans) => {
//   let sum = 0;

//   for (let i = 0; i < listOfTrans.length; ++i) {
//     const { amount } = listOfTrans[i];

//     sum += amount;
//   }

//   return `$${sum.toFixed(2)}`;
// }

// Very Clean Solution

// const sumTransactions = listOfTrans => listOfTrans.reduce((sum, { amount }) => sum + amount, 0);

// c(sumTransactions(transactions)); // => 10512

// Most Expensive

var transactions2 = [
  {
    name: "Minibar rental",
    amount: 3000
  }, {
    name: "DJ Fee",
    amount: 2999
  },
  {
    name: "Yard landscaping",
    amount: 2999
  }
]

const mostExpensive = (listOfTrans) => {
  listOfTrans.sort((a, b) => {
    return a.amount < b.amount;
  })

  return listOfTrans[0].name;
}

// c(mostExpensive(transactions)); // => "Chandelier replacement"
// c(mostExpensive(transactions2)); // => "Minibar rental"

// Frequency Analysis
// Write a function that takes a string of text (containing ONLY lowercase letters) and returns an object containing the count for each letter in the string.

const frequencyAnalysis = (aStr) => {
  const charDict = {};

  for (let i = 0; i < aStr.length; ++i) {
    const currentChar = aStr[i];

    if (charDict[currentChar]) charDict[currentChar] += 1;
    else charDict[currentChar] = 1;
  }

  return charDict;
}

// c(frequencyAnalysis('abca'));
// => {a: 2, b: 1, c: 1}
// Bonus: Write a second function normalizedFrequency that uses your first function but returns the normalized frequency of each letter.

// Bonus:

const normalizedFrequency = (aStr) => {
  const charDict = {};
  const normalizedIncrement = 1 / aStr.length;

  for (let i = 0; i < aStr.length; ++i) {
    const currentChar = aStr[i];

    if (charDict[currentChar]) charDict[currentChar] += normalizedIncrement;
    else charDict[currentChar] = normalizedIncrement;
  }

  return charDict;
}

// c(normalizedFrequency('abca'));
// => {a: 0.5, b: 0.25, c: 0.25}

// Sum Cart
// Write a function that accepts a "shopping cart" array and returns the total bill for all the items. Each item is represented by an array, where the first element is the item name, and the second element is an object with two properties: quantity and price.

var cart = [
    ["tofu", {"quantity" : 3,"price" : 4.5} ],
    ["sriracha", {"quantity" : 1,"price" : 5} ],
    ["toilet paper", {"quantity" : 12,"price" : 1.75} ],
    ["Drano", {"quantity" : 1,"price" : 13} ],
    ["orichette", {"quantity" : 2,"price" : 7.5} ],
    ["hummus", {"quantity" : 2,"price" : 5.99} ],
    ["bison meat", {"quantity" : 3,"price" : 20.99} ],
    ["vegan bison meat", {"quantity" : 3,"price" : 24.99} ]
];

// const sumCart = (aCart) => {
//   let sum = 0;

//   for (let i = 0; i < aCart.length; ++i) {
//     const currentItem = aCart[i];

//     sum += currentItem[1].quantity * currentItem[1].price;
//   }

//   return sum.toFixed(2);
// }

// Reduce Version
const sumCart = aCart => aCart.reduce((sum, [name, {quantity, price}]) => sum + (quantity * price), 0);

// c(sumCart(cart));    // => 217.42

/*
Leet Codex:
        A -> @
        B -> 8
        C -> (
        D -> |)
        E -> 3
        F -> ph
        G -> g
        H -> #
        I -> l
        J -> _|
        K -> |<
        L -> 1
        M -> |'|'|
        N -> /\/
        O -> 0
        P -> |D
        Q -> (,)
        R -> |2
        S -> 5
        T -> +
        U -> |_|
        V -> |/
        W -> |/|/'
        X -> ><
        Y -> j
        Z -> 2
*/

var letters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];
var leetChars = ['@', '8', '(', '|)', '3', 'ph', 'g', '#','l', '_|', '|<', '1', "|'|'|", '/\/', '0', '|D', '(,)', '|2', '5', '+', '|_|', '|/', "|/|/'",'><', 'j', '2'];
const leetDict = {};

for (let i = 0; i < letters.length; ++i) {
  const letter = letters[i];
  const leet = leetChars[i];

  leetDict[letter] = leet;
}

const translate = (text) => {
  let translatedWord = '';

  for (let i = 0; i < text.length; ++i) {
    const currentChar = text[i].toLowerCase();

    translatedWord += leetDict[currentChar];
  }

  return translatedWord;
}

c(translate('Fullstack'));    // => 'ph|_|115+@(|<'

// Default Values
// As a breeder, deciding upon the dogs' names is tough! So unless someone names my dog, I always name it Steve.

// Write a function called dogBreeder that takes a name and an age and returns a dog object with those properties attached to it. If someone fails to put a name in, default to Steve. If someone fails to put an age in, default to 0.

// Be careful though, sometimes the people using our function might not have nice input! (you guys asked for it!).

// You should never let a user TELL YOU THE PROGRAMMER WHAT ORDER DATA IS COMING IN.
// The whole reason we write code, is to define the inputs we need to give you an output.
// When we stop caring about this contract, everything falls apart and makes no sense and terrible fucking code like this appears.
// const dogBreeder = (nameOrAge, ageOrName) => {
//   let finalName = 'Steve';
//   let finalAge = 0;

//   if (typeof nameOrAge !== 'undefined') {
//     if (typeof nameOrAge === 'string') finalName = nameOrAge;
//     else finalAge = nameOrAge;
//   }

//   if (typeof ageOrName !== 'undefined') {
//     finalAge = ageOrName;
//   }

//   return { name: finalName, age: finalAge };
// }

/*
{
  name: ''
  age: ''
}
*/

// const dogBreeder = (optionsObj) => {
//   return {
//     name: optionsObj.name ? optionsObj.name : 'Steve',
//     age: optionsObj.age ? optionsObj.age : 0,
//   }
// }

const dogBreeder = (name = 'Steve', age = 0) => {
 return {
   name,
   age,
 }
}

c(dogBreeder("Sam", 12));    // => {name: 'Sam', age: 12}
c(dogBreeder(15));    // => {name:'Steve', age: 15}