const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

const sampleArr = [1, 2, 3, 4, 5];

// forEach
// It says: I will loop over every element in the array, and run your callback on each element.
// Almost every HOAM will pass us the array as the final argument - this is so that if we need to MUTATE something, we can. Its a reference mechanic. It is the LEAST USED arg passed to the callback.
// 

const forEachFunc = (elem, i, array) => {
  console.log('elem: ', elem);
  console.log('index: ', i);
  console.log('array: ', array);
  console.log('-----------------------');
}

// sampleArr.forEach(forEachFunc);

// function myForEach(myArray, callback) {
//   for (var i = 0; i < myArray.length; ++i) {
//     var currentElement = myArray[i];

//     callback(currentElement, i, myArray);
//   }
// }

// myForEach(sampleArr, forEachFunc);

// We just have to implicitly trust that these functions (forEach) will pass us certain data.
// In this case we refer to this data as a 'signature'
// Signatures are the promise between a function and a consumer (you) about what data they
// will pass the callback.
// The data promised by forEach is the element, the index, and the original array.
// The second promise which we discussed yesterday is the timing: It promises to call
// our callback every single iteration of the for loop.

// Map
// Map solves a weird but awesome simple problem: I want to go over an array, and return a new array based on it.

// I have an array of numbers. I want an array, with those numbers doubled - but i still want the first array to be the same.

const doubleArray = (num) => {
  return num * 2;
}

// c(sampleArr);
// c(sampleArr.map(doubleArray));

const myMap = (anArray, callback) => {
  const mappedArray = [];

  for (let i = 0; i < anArray.length; ++i) {
    const currentElem = anArray[i];

    const callbackResult = callback(currentElem, i, anArray);

    mappedArray.push(callbackResult);
  }

  return mappedArray;
}

// callback is a name we use because - we can best refer to an action we want some other thing to do at a later time as a 'call back' - because it best infers the same business process. "I want you to sell this ice cream. Say its cold, delicious, and has cookie doug." - at some point later in time, we find out how much they sold, how well it sold, and a bunch of other info. We can think about this process as 'calling me back' - which is why we colloquially refer to this entire process in programming as a 'callback'. We are telling some other function, "I want you to do this later with the job that you wanted done." Map wants use to create a new array. It says it will call us every time it has a new element - we take that element and create a new one. Thats maps callback.

// c(sampleArr);
// c(myMap(sampleArr, doubleArray));

// Filter
// Filter promises us that it will take a callback function, and whatever fails the callback function (i.e. returns a falsy value) will not be in the new array it is creating.

// const evens = sampleArr.filter(elem => elem % 2 === 0);
// c(sampleArr);
// c(evens);

const myFilter = (anArray, callback) => {
  const filteredArray = [];

  for (let i = 0; i < anArray.length; ++i) {
    const currentElement = anArray[i];

    if (callback(currentElement, i, anArray)) {
      filteredArray.push(currentElement);
    }
  }

  return filteredArray;
}

// const evens = myFilter(sampleArr, num => num % 2 === 0);
// c(sampleArr);
// c(evens);

// Reduce
// e.g. how do I solve everything with one function?


// reduce handles the most common pattern of them all: "Given any collection, after iterating over it, return something."

// This is literally what reduce does. It looks at a collection and based on its content, builds a new value.

// The contrived example:
// This is the easiest form of adding an array together youve ever seen, and it confuses you, and rightfully so.
// c(sampleArr.reduce((sum, num) => sum + num, 0));

// What is the pattern here?

// We have a function
// It takes a collection
function doSomething (collection) {
  // it needs to make this collection into something else...
  const somethingElse = null;

  // To do so, it needs to iterate over the collection, like we always do.
  for (var i = 0; i < collection.length; ++i) {
    var currentElement = collection[i];

    // trever said += which we in code refer to as accumulation
    // dan said if (e.g. conditional logic) so if something - do this otherwise - do that
    // sam said mutate the elements in the array
    // The point is that we do every single thing we ever want to do right here.
    // WE can do anything here.
    // Thats the friggin point.
    // We can define ANY BEHAVIOR WE WANT RIGHT HERE.
    // WE CAN GET ANY RESULT WE WANT RIGHT HERE.
  }
  
  return somethingElse;
}

function myReduce(anArray, callback, initialValue) {
  var something = initialValue;

  for (var i = 0; i < anArray.length; ++i) {
    var currentElement = anArray[i];

    something = callback(something, currentElement, i, anArray);
  }

  return something;
}

// c(myReduce(sampleArr, (sum, elem) => {  
//   return sum + elem;
// }, 0));


// Method Chaining

// As long as we return an array, we can use another array method. Example:

const returnValue = sampleArr
  .map(elem => elem.toString())
  .map(string => parseInt(string) + Math.ceil(Math.random() * 5))
  .filter(string => parseInt(string) >= 5);

console.log(returnValue);


// As long as arrays are being returned, we can keep calling ARRAY METHODS ON THEM.
// If enough of the class shows up this saturday, i promise i will show why and how this is the case.

// Classes
// Prototypal Inheritance (i.e. this)
// and a bunch of other cool stuff.














