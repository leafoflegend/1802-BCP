const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Values and Immutability

// "All primitives are immutable."

// Some things within Javascript cant and shouldnt be changed.
// true = false;

// ... a little later.

// Array Methods
// Some array methods are 'mutative'. e.g. splice()
// Mutative meaning I am in fact changing the value of "something"

// Today is about that something...

// When we built grids:

const someRow = [1, 2, 3];

const grid = [];

for (let i = 0; i < 3; ++i) {
  grid.push(someRow);
}

// c(grid);

someRow[1] = 'Treasure!';

// c(grid);

// This is a reference. We are "referring" to someRow in 3 different places grid[0], grid[1], and grid[2] are all looking at the same thing: someRow

// const arr = [1, 2, 3];
// const newArr = arr;

// newArr.push(4);

// c(arr); // => [1, 2, 3, 4]
// c(newArr); // => [1, 2, 3, 4]

// In a lot of languages we refer to newArr not as an array, but as something called a 'pointer'.

const arr = [1, 2, 3];

const doStuff = (arr) => {
  const newArr = arr;
  newArr.push(4);
  arr = [4, 5, 6];
  arr.push(7);

  return {
    arr: arr,
    newArr: newArr,
  };
}

const returnObj = doStuff(arr);

// c('innerArr: ', returnObj.arr);
// c('newArr: ', returnObj.newArr);
// c('outerArr: ', outerArr);

// References and Pointers

// So in early programming there was actually an issue with the opposite of what we are suggesting is problematic today...
// There was NO WAY to pass around a 'reference' for different parts of the code to look at the same thing.
// Everything was 'Passed by value'. You passed the actual value you needed everywhere it was needed. You couldn't do something like say...
// "Go to 1 forest avenue, at that house you will find the following book."
// instead in early programming we said: 'heres that book.'

// we've been storing these 'values' that we want to pass around our code inside of objects to make things easier for us to reference.
// A variety of things references are helping you with:
// Every method on arrays is a reference
// Every time you use an arrays index

// This was a big part of the revolution of OOP (Object oriented programming) which we dont do too much of in JS.
// But this is a huge benefit of that line of thought. The grandfather of OOP is the C language (pretty rare to use these days)
// But the father of OOP is C++ which is still very very common
// C++ has a concept of 'pointers' which is what were going to talk about.

// Memory
// What exactly is happening when I say "const someVar = 'something'"?

// const someVar = 'something';
// Javascript does the following steps right now:
// 1. I need memory for something called someVar
// 2. "Okay heres memory"
// 3. I need to store a string of value 'something' at this spot in memory.
// 3 1/2: "this value looks like characters I ALREADY KNOW ABOUT. I CAN FIND THEM HERE AND HERE AND HERE AND HERE."
// 4. "Okay heres your reference to it": 0x457623 (memory address)
// 5. Javascript being smart says 'ok, my dude programming me doesn't want to know that, why dont i map the name someVar to equal that memory address.'
// 6. It does that, and then returns that reference and whatever is stored aat it to you, every time you say that name.

// The above is for primitives and thats because i left out a piece

// You -> you type someVar -> Javascript goes to 0x457623 -> it finds 'something' -> returns 'something';

// Lets look at objects:

const someVar = {
  hi: {
    bye: 'bye'
  },
};
// Javascript does the following steps right now:
// 1. I need memory for something called someVar
// 2. "Okay heres memory"
// 3. I need to store a reference to other values here.
// 3 1/2: "Okay, I am going to need to make additional memory for this thing to put other stuff at later..."
// 4. "Okay heres your reference to the front door of a large house": 0x457627 (memory address)
// 5. Javascript being smart says 'ok, my dude programming me doesn't want to know that, why dont i map the name someVar to equal that memory address.'
// 6. It does that, and then returns that reference and whatever is stored aat it to you, every time you say that name.

// You type 'someVar' -> javascript goes looking for 'someVar' -> it gets returned 0x457627 -> it finds MORE MEMORY ADDRESSES HIDDEN INSIDE OF 0x457627.
// -> PART 2
// Okay, I have a bunch of stuff inside 0x457627 -> what do you want?
// Inside of 0x457627 I see: [0x675432] which is a string referenced by 'hi' pointing at -> 0x789123 that is 'hi' as a string value.
// Part 3 -> and this chain can go on and on and on and on and on and on....


// I hope youre starting to follow and hate it.
// So what is a reference?

// A reference is when we follow these chains and two different things are pointing at the same memory address. If I make the following object:

const otherObj = {
  anotherObj: someVar,
}

// we say 'otherObj' javascript sees a memory address -> it goes there finds another reference 'anotherObj' with a value of 0x457627 -> and know were pointing right back to the last chain that we drew out. This isnt a new object were looking at, its the same memory address, with the exact same stuff inside of it.


// Linked Lists
// Which are exactly what im describing as real code.

const createNode = (value) => {
  return {
    next: null,
    value: value,
  }
}

// This was all there was before arrays.
// Linked list is the OG array/
const linkedList = {
  head: null,
  add: function (value) {
    const newNode = createNode(value);
    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
    }

    if (!this.head) this.head = newNode;
  },
  traverse: function () {
    let nextNode = null;

    if (this.head) {
      nextNode = this.head;
      while (nextNode) {
        console.log(nextNode.value);
        nextNode = nextNode.next;
      }
    }
  }
};

linkedList.add(5);
linkedList.add(10);
linkedList.add(15);

linkedList.traverse();

// Linked list contains only one reference - to the most recent thing added.
// But! Each thing we add contains one reference... To the next thing.
// Because each thing knows about the next thing, we can follow the references all the way through the chain.
// What I built here is called a singly linked list -> it goes one direction and can only ever know about one more reference.
// When there are no more references to look at - were done. Thats the end of the array.

// How else would we keep track of relationships between data?

// Two really fun things to try if you want to master references are to:
// Introduce a 'length' method that returns how long the linked list is (not as easy as it sounds)
// And introduce a 'delete' method that finds a value and deletes that node. The hard part is to reconnect the node before it and the node after it so that the chain does not get broken.




























