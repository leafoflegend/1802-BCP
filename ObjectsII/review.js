const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

// Foreign Loops
// Create a function that takes an animal name and iterates over the petSounds array below and logs all the international sounds that animal makes to the console along with the country of origin.

var petSounds =    [
    { "dog": {
        "America" : "Woof! Woof!",
        "Germany" : "Wau Wau!",
        "England" : "Bow wow!",
        "Uruguay" : "Jua jua!",
        "Afrikaans" : "Blaf!",
        "Korea" : "Mong mong!",
        "Iceland" : "Voff voff!",
        "Albania" : "Ham!",
        "Algeria" : "Ouaf ouaf!"
        }
     },
     { "cat": {
        "America" : "Meow",
        "Germany" : "Miauw!",
        "England" : "mew mew",
        "Uruguay" : "Miau Miau!",
        "Afrikaans" : "Purr",
        "Korea" : "Nyaong!",
        "Iceland" : "Kurnau!",
        "Albania" : "Miau",
        "Algeria" : "Miaou!"
        }
     },
     { "chicken": {
        "America" : "Cluck cluck",
        "Germany" : "tock tock tock",
        "England" : "Cluck Cluck",
        "Uruguay" : "gut gut gdak",
        "Afrikaans" : "kukeleku",
        "Korea" : "ko-ko-ko",
        "Iceland" : "Chuck-chuck!",
        "Albania" : "Kotkot",
        "Algeria" : "Cotcotcodet"
        }
  }
]

// The log should follow the format: "[animal]s in [country] say [sound]".

// Like many programming problems, this exercise is simple but tricky. When faced with uncertainty, programmers will often reference a language's documentation for further insight.

// Think carefully about what kind of for loop to use. Check out the 'Iterations' section of the MDN JavaScript documentation for different loop styles.

// { 
//   "chicken": {
//     "America" : "Cluck cluck",
        // ...
//   },
// }

// for In way
// let animalName = '';

// for (let name in animalObject) {
//   animalName = name;
// }

// Simple Version
// Searching through deeply nested objects is never fun. Thats the whole point of this problem.
// One of the first problems where if you have been forgoing best practices it probably bite you in the ass.
// const makeNoise = (petType) => {
//   for (let i = 0; i < petSounds.length; ++i) {
//     const animalObject = petSounds[i];

//     const animalType = Object.keys(animalObject)[0];

//     const animalSoundsPerCountry = animalObject[animalType];
    
//     if (animalType === petType) {
//       for (let country in animalSoundsPerCountry) {
//         const sound = animalSoundsPerCountry[country];

//         console.log(`${animalType} in ${country} say ${sound}`);
//       }
//     }
//   }
// }

// Nicer Version
// const makeNoise = (petType) => {
//   for (let i = 0; i < petSounds.length; ++i) {
//     const animalObject = petSounds[i];

//     const currentAnimal = animalObject[petType];

//     if (currentAnimal) {
//       const countrySounds = Object.entries(currentAnimal);

//       for (let j = 0; j < countrySounds.length; ++j) {
//         const [country, sound] = countrySounds[j];

//         console.log(`${petType} in ${country} say ${sound}`);
//       }
//     }
//   }
// } 

// Nicest Version

const makeNoise = (petType) => petSounds
  .forEach((animalObj) => {
    if (animalObj[petType]) {
      Object.entries(animalObj[petType])
        .forEach(([country, sound]) => {
          console.log(`${petType} in ${country} say ${sound}`);
        })
    }
  })

// makeNoise('dog');
/*
Dogs in America say Woof! Woof!
Dogs in Germany say Wau Wau!
Dogs in England say Bow wow!
Dogs in Uruguay say Jua jua!
Dogs in Afrikaans say Blaf!
Dogs in Korea say Mong mong!
Dogs in Iceland say Voff voff!
Dogs in Albania say Ham!
Dogs in Algeria say Ouaf ouaf!
*/

// Compare Objects
// Consider the following statement.

// { name: 'zeke' } === { name: 'zeke' }
// What do you think the output will be? You might assume true. It is, however, false. This isn't a mistake, it's intentional. Every object is unique from every other object. The usefulness of this will become clear over time. But, it does make it difficult to know if objects contain the same data.

// Right now you're going to write a function that determines if two objects contain the same data.

// In order for the function to return true, ALL the properties that exist in object 1 must exist and be equal to those in object 2. Similarly, ALL the properties in object 2 must exist and be equal to those in object 1.

const compareObjects = (a, b) => {
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);

  if (aKeys.length !== bKeys.length) return false;

  for (let i = 0; i < aKeys.length; ++i) {
    const currentKey = aKeys[i];

    const aValue = a[currentKey];
    const bValue = b[currentKey];

    if (aValue !== bValue) return false;
  }

  return true;
}

// c(compareObjects({ name: 'nick' }, { name: 'nick' }));
//         // -> true

// c(compareObjects({ name: 'zeke' }, { name: 'zeke', age: 12 }));
        // -> false

// Attendance Check
// Create a function that takes a weekday String as an argument. It then iterates over a classRoom array and returns an array of all the students present for class on that weekday.

var classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    },
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    },
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    },
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }
];

// Variable naming is realllllllly important when it comes to dealing with very nested objects.
// In a "real" production codebase you are going to have control over the shape of these arrays and objects to some degree.
// So were kind of fighting half the battle. Were fighting a battle to get the data, but if we had full control, we might fight the other half
// in how we actually originally store the data. Arguably, we could have come up with a better shape for this data.
// const classCheck = (dayOfTheWeek) => {
//   const presentStudents = [];
  
//   for (let i = 0; i < classRoom.length; ++i) {
//     const studentAttendance = classRoom[i];

//     for (let studentName in studentAttendance) {
//       const daysOfAttendance = studentAttendance[studentName];

//       for (let j = 0; j < daysOfAttendance.length; ++j) {
//         const dayAttendance = daysOfAttendance[j];

//         for (let dayName in dayAttendance) {
//           if (dayName === dayOfTheWeek && dayAttendance[dayName]) presentStudents.push(studentName);
//         }
//       }
//     }
//   }

//   return presentStudents;
// }

const classCheck = (dayOfTheWeek) => classRoom.reduce((presentStudents, studentObj) => {
  const [studentName, studentAttendance] = Object.entries(studentObj)[0];

  const dayOfInterest = studentAttendance.find((day) => Object.keys(day)[0] === dayOfTheWeek);

  if (dayOfInterest[dayOfTheWeek]) return presentStudents.concat([studentName]);
  else return presentStudents; 
}, []);

c(classCheck('Monday'));    // => ['Marnie', 'Shoshanna']