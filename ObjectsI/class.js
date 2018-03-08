const chalk = require('chalk');

const returnRandomColor = () => {
  const colors = ['red', 'cyan', 'magenta', 'green', 'yellow'];

  const randomIndex = Math.floor(Math.random() * colors.length);

  return colors[randomIndex];
}

console.log(chalk[returnRandomColor()]('------------------------------'));

const c = (...args) => console.log(...args);

const someArray = [];

someArray.push('first');
someArray.push('second');

// c(someArray);

// c(someArray[0]);

// const someObjArray = {
//   0: 'first',
//   1: 'second',
// }

// c('obj: ', someObjArray[0]);

// var and value/assignment
const someString = 'something';

// in an object we say:
// key: value
// sometimes longer, key value pair
// how do we reference any given value inside an object?
// With arrays we were promised numbers. We use numbers as keys to access a value.

// Our First Dictionary

const classBDayMonthDict = {
  'March': ['Sarah', 'Trevor'],
  'November': ['Sam'],
  'April': ['Adam'],
  'September': ['Blair'],
};

// c(classBDayMonthDict['March']);

// The first benefit to dictionaries/objects is that they enable us to access data understanding only fragments of the greater picture.
// Here, I only know the month of the class Im teaching - but I can reliably discover whos birthday is this month.

const classArray = [{name: 'Sarah', birthday: 'March'}, {name: 'Trevor', birthday: 'March'}, /* ...Everyone Else */];

// Time complexity.
// How many 'units' of time will it take to perform this operation?
// Big O
// We consider an algorithms time complexity to be ITS WORST CASE SCENARIO.

// Get me all students whose birthdays are this month.

const getStudents = (anArr, month) => {
  const studentsWithBDays = [];

  for (let i = 0; i < anArr.length; ++i) {
    const currentStudent = anArr[i];

    if (currentStudent.birthday === month) {
      studentsWithBDays.push(currentStudent.name);
    }
  }

  return studentsWithBDays;
}

// c(getStudents(classArray, 'March'));

// With an array, we might say that the worst possible situation this algoirthm could get into, is if the students with March in their object were the last students in the array.

// We refer to the number of elements being iterated over as N
// We might then say, that the array solution will take O(n)


// Meanwhile here is our dictionary:

// const classBDayMonthDict = {
//   'March': ['Sarah', 'Trevor'],
//   'November': ['Sam'],
//   'April': ['Adam'],
//   'September': ['Blair'],
// };

// const getStudentsObj = (dict, month) => {
//   return dict[month];
// }

// The size of this collection DOES NOT MATTER.
// O(1) -> O(1) is the dream of every programmer.

// The computer might not be doing as much work when it GETS the people, but it takes fair amount of work to PLACE those people in the right month. I had to ask all of you, then type it, then form it into an object.
// Some people would say that I am taking on some of the work of the computer to in exchange make the computer run faster.
// This process that were talking about has a name:
// Hashing
// Hashing: Do a lot of work upfront, to make everything faster from that point forward.

// Example: Google. Do you really think Google is 'searching' the internet every time you search?
// What google does is they are endlessly hashing the entire internet. On a per hour - day basis because what they do is they click on a hyperlink, load that website, then click on all of that websites hyperlinks, if it ends up somewhere its been before, it ignores it, if it ends up somewhere new - it adds it to what we might think of as a GIANT OBJECT.

// Log In To a Fake Website.
// Some website needs to have lots of users (theres lots of websites). But... they dont want to do a for loop over every single user in the entire world (of their website) to find a currentTerm === currentLogin. That means if we had 1,000,000 users the O(n) is 1,000,000.
// Their hash... is your password.

const fakeUserDatabase = {};

const ourSecretHash = (str) => {
  const arrayString = str.split('');
  let ourHash = '';

  for (let i = 0; i < arrayString.length; ++i) {
    const currentCharacter = arrayString[i];

    const stringCharacter = (currentCharacter.charCodeAt(0) * 7).toString();

    ourHash += stringCharacter;
  }

  return ourHash;
}

const login = (email, password) => {
  const hashEmail = ourSecretHash(email);
  const hashPassword = ourSecretHash(password);

  if (fakeUserDatabase[hashEmail]) {
    if (fakeUserDatabase[hashEmail] === hashPassword) {
      console.log(`You're logged in as ${email}.`);
    } else {
      console.log('Wrong password please try again.');
    }
  } else {
    console.log('User does not exist.');
  }
};

// emails are unique because of this problem - we need unique ways to look up things in giant things (in the case of email, the entire internet)
const signup = (email, password) => {
  const hashEmail = ourSecretHash(email);
  const hashPassword = ourSecretHash(password);

  if (fakeUserDatabase[hashEmail]) {
    console.log('This email is already taken! Please try again.')
  } else {
    fakeUserDatabase[hashEmail] = hashPassword;
    console.log('Success signing up!');
  }
};

// signup('sarah@awesome.com', 'awesome');
// signup('sam@radical.com', 'radical');

// c(fakeUserDatabase);

// login('sarah@awesome.com', 'awesome');
// login('sam@radical.com', 'radicl');

// The reason this works is simpler then you think - our hash given a ALWAYS RETURNS b (arbitrary a and b). There is no difference given some input, that it will deliver a different output. This means, that as long as YOU the user give us the same INPUT we can always log you in. WE DONT NEED TO KNOW YOUR ACTUAL PASSWORD OR EMAIL. SCARILY, NOBODY NEEDS TO KNOW IT BUT YOU.

// That being said, Im not a crumedegeony person, arrays are certainly easier. Objects tend to win at two things you rarely think about:

// Performance
// Security

// Arrays are the lazy womans/mans tool to deal with collections. And theyre awfully convenient for it. But, you dont get the ability to customize how they are placed in those collections, nor do you get the ability to define how you get them out of those collections. THAT IS WHERE OBJECTS WIN.

// The reason you cant say like...

const arbitraryArray = [1, 2, 3];

// The reason we cant do this is NOT because its an array, its because 0 is a mathematical operator. You're not allowed to start any variable with a number.

// arbitraryArray.0

arbitraryArray.thing = 'eliot';

// Dot notation is a way to reference a key/value pair within an object. IF that key does not yet exist -> you are creating and assigning a new key a value.

// delete arbitraryArray[1];

// c(arbitraryArray.length);


const thing = 'name';

const newObj = {
  name: 'Eliot',
  0: {
    name: 'dan',
  },
}

// When you use dot notation you are describing a string
// When you use bracket notation you are describing some string in javascript
// c(newObj[0]);

// c(JSON.stringify(newObj));

c(newObj[0].name)








