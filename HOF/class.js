const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);



const someArray = [1, 2, 3];

// What the hell is this?
// someArray.forEach((elem) => { console.log(elem); });

// Functions are just objects. That means we can return them from functions, and pass them into functions.

const functionOne = (numOne, numTwo) => {
  return numOne + numTwo;
}

const functionTwo = (num) => {
  return `$${num.toFixed(2)}`;
}

// I am not invoking those functions.
// I am not saying functionOne()
const functionArray = [functionOne, functionTwo];

// console.log('Result: ', result);

// This is just one example of using functions in a really cool way. But, what if I wanted to make this a function instead of hardcoding it...

const runAFunc = (aFunc, argOne, argTwo) => {
  const result = aFunc(argOne, argTwo);

  return result;
}

// Does this syntax look like anything else we know?
// e.g. have you seen something like this before?
// This is a lot of Array Methods.
// console.log(runAFunc((numOne, numTwo) => numOne + numTwo, 2, 2));

// Callbacks - What are they, why do they exist?
// Firstly I want to make something clear - Functions as things that can be passed into arguments, and returned from functions, is a BIG DEAL.
// This is one of the things that makes Javascript really powerful. This feature is not available in most languages.
// This ability allows us to do a very very important thing - explain to a computer what to do at SOME (indiscernable) later time.
// An example:


// I want to have a function that does something 5 seconds from now.

const logDone = () => { console.log('Im done!'); };

// setTimeout(logDone, 5000);

// How else would we describe to a computer how to do something later?
// The word 'callback' it literally is referring to a phone. Think about a conversation at work with someone...

// Hey, I need this thing.
// Okay, one second here, Im gonna look into that and call you back.
// Alright.

// Things we can expect:
// More information
// Might be busy right now
// Now you're on their schedule
// You probably have some context about the content of the upcoming conversation
// Most of the time, we have a fair degree of certainity about the time frame it will take them to call us back

// Importantly to all of our points above - there is an assured scary amount of 'maybe' which is not something were used to with code.
// Callbacks definitely introduce some amount of 'maybe' to a codebase, which can be scary.

// The Challenge: I want a function that calls me back every single time it loops over a new element. Its also making us a promise. Its promising us that it will also call us back with certain information. Namely: what the value of the element it is calling us back about is.
// The function exists its called 'forEach'

const myForEach = (anArray, callback) => {
  for (let i = 0; i < anArray.length; ++i) {
    const currentElem = anArray[i];

    callback(currentElem, i, anArray);
  }
}

const sillyArray = ['Dan', 'Adam', 'Sarah', 'Sam', 'Trevor'];

// myForEach(sillyArray, (elem, i, array) => { console.log('I got called back with: ', elem, i, array); })

// forEach is promising us two things: to call us back at a certain time, and with certain information.
// The 'real' for each calls us back with the elements value, the index of the element, and the array itself as the arguments.

// I would actually summarize all callbacks that way. They are doing something very important:
// They promise us that they will call our function at a certain time.
// They promise us that they will call our function a certain amount of times (above, per element).
// They promise us that they will call our function with certain arguments.

// Its entirely up to us, to decide what to do with the information and timing of when someone calls us back. Just like in real life.

// If someone calls you at 3 in the afternoon, youll probably pick up. They call you at 3 AM not so likely. But, they called you.

// Asynchronous Callbacks

// You only know synchronous programming.
// Synchronous is when stuff happens in order. Thats something you should want of your code.

// console.log('First');
// console.log('Second');

// There is code that doesnt happen in any particular order.

// setTimeout(() => { console.log('First') }, (Math.random() * 5) * 1000);
// The Javascript didn't wait on setTimeout above to finish before continuing.
// console.log('Second');

// ^ is asynchronicity. This is when we do not do things in order of code execution.

// This is kind of why callbacks exist and why they're important.
// Javascript is primarily used on the internet. The internet is not always reliable.
// What if your connection goes down?
// What if a site is having problems?
// What if a site is slow?

// Those are important because, you might need to get information from those sites.
// What if I have website hackerman.com and it needs to go and ask google to do a search on 'coolest hackers'

// We're going to simulate this for now, if you want to have a deeper conversation about that we can do so this coming weekend.



const getStuffFromGoogle = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Could not fetch data.');
    }, (Math.random() * 10) * 1000);
    setTimeout(() => {
      resolve('Google search completed: Coolest hacker is Eliot.');
    }, 5000);
  })
}

// We need to be able to explain to the computer what to do in different situations.
// The above code isn't really important for this demonstration for you to understand.
// Heres the TLDR of that code: If it succeeds, we can have a callback hear that.
// If it fails, we can have a callback for that.
// Ive introduced random failures to the above function.

// getStuffFromGoogle()
//   // Then is what do we do if we succeed?
//   .then((message) => {
//     console.log(message);
//   })
//   // What do we do if we error?
//   .catch((error) => {
//     console.log(error);
//   })

// console.log('You clicked on something!');

// A real website call, has no length thats too long.
// In real javascript (like youre building a site with people with credit cards and they are paying you)
// Do you want people to have to wait on the above thing before other things happen?

// Everything we just spoke about is well above this courses intention, Asynchronicity is very difficult and you will tackle this at Immersive,
// But I think it makes a great Value statement for why callbacks exist.
// How else would we deal with complex behavior?
// We need to be able to define future functionality and behavior, given some 'promises'


// const intervalId = setInterval(() => { console.log('I ran!') }, 1000);

// setTimeout(() => {
//   clearInterval(intervalId);
// }, 5001)


// Weve spoken at length about callbacks, but what about the reverse -> returning a function from a function.

// Scope/Closure

// We're gonna make a function that creates a counter.

// let counter = 1;

// const increment = () => {
//   ++counter;
//   console.log(counter);
// }

// increment()
// increment()
// increment()

// This is fine, but we kind of dont want counter on the global scope.

// Closure

// When we return a function out of another function something really awesome (and confusing) happens in Javascript magic.

const createCounter = () => {
  let counter = 0;

  return () => {
    ++counter;
    console.log(counter);
  };
}

// const counterFunc = createCounter();
// const secondCounterFunc = createCounter();
// counterFunc();
// secondCounterFunc();
// secondCounterFunc();
// secondCounterFunc();
// counterFunc();
// counterFunc();
// console.log(counter); -> how am I accessing counter if its not available out here?
// Remember that rule about scope? And how we can't look into another functions scope to access data.
// closure is a process by which - if a function EVER HAD ACCESS TO ANY DATA. It will ALWAYS HAVE ACCESS TO THAT DATA. This process is called closure because what it means is that this function has secretly 'closed over the scope' that it was once in.
// Closure was the original OG way to 'hide' data from consumers. Nothing and no one can access the data that was closed over in a scope, except for your function. And whatever you defined that behavior to be. For example: Can I ever decrement or delete the counter inside of counterFunc or secondCounterFunc?
// I defined one and only one behavior against counter - to add one. That is all you will ever be able to do to it.

const createBankAccount = (name) => {
  const account = {
    value: 0,
    name: null,
  };

  if (!name) {
    console.log('A name must be added to a bank account.');
    return;
  }
  account.name = name;

  return {
    withdraw: (amount) => {
      if (account.value > amount) {
        account.value -= amount;
        console.log(`${account.name}'s account value is now ${account.value}.`);
        return amount;
      } else {
        console.log(`${account.name} you do not have enough money in your account.`);
        return 0;
      }
    },
    deposit: (amount) => {
      account.value += amount;
      console.log(`Thanks for your deposit ${account.name}! Your account value is now ${account.value}`);
      return account.value;
    }
  };
}

const myAccount = createBankAccount('Eliot');
myAccount.deposit(1500);
myAccount.withdraw(500);
myAccount.withdraw(5000);

// Can I change the account value without using deposit
// This is actually how your banking application (kind of lol) works.
// You are allowed to access defined behaviors against data, obviously you are not allowed to say account.value = 10000000000000000
// The only access you ever get to closed over data - is the behaviors WE the developer define.
// Thats why closure is so important and cool. It enables us to protect data from being misused, or used in ways we didnt intend.
// By returning functions out of another scope -> we have protected that data by hiding it from prying behaviors and eyes.

// I highly highly suggest reading Kyle Simpsons Scopes and Closures for more information, its free online on Github if you can stand to read a large PDF. But he does sell paperbacks.

// Callbacks are when we give a function to another function to use later - in return for some sort of promise: normally, when it will be called, and with what data.
// Closure and returning functions is about bringing data from one scope into another in a protected way.




































