const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Array Sum
// Write a fuction that accepts an array and returns the sum of all the numbers in the array (no matter how nested!).

// const arraySum = (anArr) => {
//   let sum = 0;

//   anArr.forEach((numOrArray) => {
//     if (Array.isArray(numOrArray)) {
//       sum += arraySum(numOrArray);
//     } else {
//       sum += numOrArray;
//     }
//   })

//   return sum;
// }

const arraySum = anArr => anArr.reduce((sum, numOrArray) => {
  return Array.isArray(numOrArray) ? sum + arraySum(numOrArray) : sum + numOrArray;
}, 0);

// c(arraySum([1, [2, 3, [4]]]));    // => 10

// Palindromes
// A palindrome is a word that is spelled the same forward and backward. For example, "LEVEL", "RACECAR", and "KAYAK" are all palindromes, while "MOTOR", "RUDDER", and "DOGGED" are not palidromes.

// Write a recursive function to check if a string is a palindrome or not.

  // edge to middle solution
  // start at both ends
  // inspect that each end is the same (after changing the case to be the same case)
  // if they are look at a string of everything except the last and first character
  // if we get to <= 1 characters - we know that it is in fact a palindrome
  // if the two ends are ever not the same, then we lost and it isnt a palindrome
  // the name for the pattern here is falsification (were trying to disprove its a palindrome with code)

const isPalindrome = (aStr) => {
  if (aStr.length <= 1) return true;
  if (aStr[0].toLowerCase() !== aStr[aStr.length - 1].toLowerCase()) return false;

  return isPalindrome(aStr.slice(1, -1));
}

// c(isPalindrome("Kayak"))    // => true
// c(isPalindrome("NEVERODDOREVEN"))    // => true
// c(isPalindrome("Tacocat"))    // => true
// c(isPalindrome("SELFLESS"))    // => false

// All Systems Go
// Confirm that every final value is true.

const systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: true
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

  // We agree that the keys do not matter.
  // So now we have an array of values.
  // We know they are 1 of 2 things:
  // a boolean
  // Or an object
  // Every boolean must be true
  // Every object is our recursive case
  // If a boolean is false, we fail immediately

const allSystemsGo = (systemTree) => {
  const systemValues = Object.values(systemTree);

  for (let i = 0; i < systemValues.length; ++i) {
    const systemDiagnosis = systemValues[i];

    if (typeof systemDiagnosis === 'object') {
      const subSystemDiagnosis = allSystemsGo(systemDiagnosis);

      if (!subSystemDiagnosis) return false;
    } else if (!systemDiagnosis) return false;
  }

  return true;
}

// c(allSystemsGo(systems)); // => false

// Sugar Smash
// You are developing the next big mobile game "Sugar Smash", a thinly-disguised knock off of "Candy Crush".

// Write a function that takes and returns a string. If any character is repeated three or more times in a row, remove (or "smash") those characters from the string before returning it. For example:

// sugarSmash('abbccca'); // => 'abba'
// Things get interesting when you have to chain multiple "smashes" together. For example:

// sugarSmash('abbcccba');
// // smash the c's and you're left with 'abbba'
// // smash the b's and you're left with 'aa'
// Use recursion to make sure the game keeps smashing characters until the string has reached a stable state and no more smashing is required!

// Here are some interesting test cases you can use to see if your game is ready for the app store:

const sugarSmash = (aStr) => {
  // Grab first character.
  let currentCharacter = aStr[0];
  // Set initial count to 1, because we have a character.
  let currentCount = 1;

  // Start iterating from the character after the first.
  for (let i = 1; i < aStr.length; ++i) {
    // Store that character.
    const nextCharacter = aStr[i];

    // If they're equal, simply increment.
    if (nextCharacter === currentCharacter) ++currentCount;
    // If theyre not equal, see if it exceeds or matches 3 in a row
    else if (currentCount >= 3) {
      // If so, use 4 annoying lines of code, to split out the row of consecutive characters.
      let copyString = aStr.slice();
      let stringArray = copyString.split('');
      stringArray.splice(i - currentCount, currentCount);
      copyString = stringArray.join('');

      // Then, return the recursive call, of this same function on the string without those consecutive characters.
      return sugarSmash(copyString);
    } else {
      // If the count was never greater then three in a row, just reset the current character and count.
      currentCharacter = nextCharacter;
      currentCount = 1;
    }
  }

  // Theres a very weird edge case where we dont catch the final characters being 3 or more, so we handle for it here.
  if (currentCount >= 3) {
    return aStr.slice(0, aStr.length - currentCount)
  }

  // If were lucky enough to have not had an edge case, nor any consecutive characters, just return the string.
  return aStr;
}

// c(sugarSmash('aaabbcccbddeefffedbffgfffgg')); // => 'bff'
// c(sugarSmash('aabbccddeeffgghhiijjkkllmmnnooppponmlkjihgfedcba')); // => ''

// Group Sum (bonus)
// This is a bonus problem that is more challenging than the problems you will encounter as an applicant to a competitive bootcamp. Apply help tickets liberally!

// Given an array of numbers and a non-zero target number, is it possible to choose a group of some of the numbers, such that the group sums to the given target?

const groupSum = (collectionOfNums, target) => {
  // If we have gotten the target down to zero, we successfully added some combination of numbers to the target.
  if (target === 0) return true;
  // If, there are no more numbers to add we failed.
  if (!collectionOfNums.length) return false;

  // Brute Force - always trying to do things the obvious way
  const bruteResult = groupSum(collectionOfNums.slice(1), target - collectionOfNums[0]);

  if (bruteResult) return true;

  // Permutative Branch - Force the next run of brute forces to run against a different opportunity
  return groupSum(collectionOfNums.slice(1), target);
} 

c(groupSum([2, 4, 8], 10)); // => true, because 2 + 8 = 10
c(groupSum([2, 4, 8], 9)); // => false, because no combination of 2, 4, and 8 equals 9
c(groupSum([1, 2, 3, 4, 101, 5, 6, 7, 8, 9, 10, 692], 794)); // => true cause 1, 101, 692 === 794

// fail on [8], 4
// that was called by [4, 8], 8
// groupSum([4, 8], 8) => line 202: fail
// line 205: groupSum([8], 8)

// if that had failed for whatever reason (the total was different)
// fail on [4, 8], 8
// groupSum([2, 4, 8], 10)
// line 205: groupSum([4, 8], 10)
// brute force ([8], 10)
// fail
// permutative [4, 8], 10
// brute ([8], 10)