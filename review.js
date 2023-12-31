/* 
                     __ 
                  | /   
                  |(___ 
                  )    )
                _/  __/ 
                        
        __                       
       /  |           /          
      (___| ___         ___      
      |\   |___) \  )| |___)|   )
      | \  |__    \/ | |__  |/\/ 

*/

// Instructions: Follow the prompts and make sure to check your answer in the console. Some of the methods I am requiring for you to us we didn't do in class yet. That's on purpose, if you need assistance look back in lessons, and of course Google. :) 

// =================================================
//                     VARIABLES
// =================================================

// 1.) Declare a variable
let success;
// 2.) Change the value of this variable
let success = 'happiness';
// 3.) Change the data type of this variable
let travel = Number(success);
// 4.) Create another variable and the one from above to concatenate
let youGotThis = 'peace and';
let result = youGotThis.concat(" ", success);
console.log(result);
// 5.) Use any of the variables above or create new ones and print using string interpolation
const worthy = 'are love'
const timeless = `Peace and happiness ${worthy}.`;
console.log(timeless);
// ================ Variable Names =================

// • Case-sensitive! Try it out! :O
let pascalcase; (incorrect)
let pascalCase; (correct)
// • Can contain letters, digits, or the symbols $ and _
let pascal_C4ase;
    // • Can't start with 0-9
        let 6p$ascalCase; (incorrect)
let p6ascalCase; (correct)
    // • Can't use reserved keywords in JS such as var, function, return, etc. 
        let function; (incorrect)
let will_believe; (correct)

// =================================================
//                      STRINGS
// =================================================

// Look up the following string methods!

// Using charAt(), print the letter i in Sabrina
let nameV = 'Sabrina';
let letter = nameV.charAt(4);
console.log(letter);
// Define Unicode in a comment, and get the Unicode using charCodeAt() of the third character in Teddy
// Unicode: international character encoding standard that provides a unique number for every character across languages & scripts.
let text = 'Teddy';
let code = text.charCodeAt(text.length - 3);
// Using fromCharCode() - make it readable for us :). You'll see!
let listen = String.fromCharCode(code);
console.log(listen);
// Take your first and last name and concat()
let firstName = 'Kinshasa';
let lastName = 'Polee';
let fullName = firstName.concat(' ', lastName);
console.log(fullName);
// Create a string and make it return true using startsWith()
let beautiful = 'You are Beautiful!';
let nature = beautiful.startsWith('You');
console.log(nature);
// Now use any variable with endsWith() and return false
let beautiful = 'You are Beautiful!';
let charToCheck = 'kryg';
let nature = beautiful.endsWith(charToCheck);
console.log(nature);
// Finish the following sentence. Use includes() and return true.
const ozgur = 'Once upon a time Ozgur looked up at the Moon, '
const result = ozgur.includes('Ozgur');
console.log(result);
// Help! I'm looking for my cow! Using indexOf() help Josh find his cow. What's the index of cow?
const joshHadALittleLambOopsCow = "Josh lives in a farm. Josh was overwhelmed with coding. Josh is stressed out. Josh fed the chickens this morning. He watered his plants. He took his cow Betsy on a walk. Josh went home without Betsy. Josh went to bed that night, and realized he went home alone."
const indexOfCow = joshHadALittleLambOopsCow.indexOf('cow');
console.log(indexOfCow);
// Oh no! The alien doppelgangers are here. Let's use our laserbeam lastIndexOf() to shoot down the last alien named Vanessa in the String Universe.
const vanessa = "I am the Alpha Vanessa. I am the Omega Vanessa. We do not come in peace."
const shootDown = vanessa.lastIndexOf('Vanessa');
console.log(shootDown);
// Can we use length for strings? I don't know, you tell me.
const noWeCantTeo = "but did you try it out though?"
const lengthForString = noWeCantTeo.length;
console.log(lengthForString);
// If only it was this easy to replace() my ex. Totally not joking, LOL. JK
const replaceGokuWithVegeta = "For my DBZ fans, we all know Goku is the best!"
const replacementIsEasy = replaceGokuWithVegeta.replace('Goku', 'Vegeta');
console.log(replacementIsEasy);
// Josh has been forgetful lately. Let's help Josh by using search(), and find their right 'wifey'.
const joshIsLookingForWifey = "WIFEY 1, wifey 2, WiFeY 3, Wifey 4"
const foundWifey = joshIsLookingForWifey.search(/wifey/i);
console.log(foundWifey);
// I guess we can share this pizza sentence. Use slice() to return the other half of pizza.
const pizzaSentence = "pizza, other half of pizza"
const otherHalfOfPizza = pizzaSentence.slice(pizzaSentence.length / 2);
console.log(otherHalfOfPizza);
// Now using the pizza sentence, return only pizza (before the comma)
const firstHalfOfPizza = pizzaSentence.slice(0, pizzaSentence.indexOf(','));
console.log(firstHalfOfPizza);
// Okay, but who decided to go to this expensive restaurant? Yaz, Poornima, and Leshawn decided to split() the bill. Return an array separating Yaz, Poornima, and Leshawn.
const splitTheBill = "Yaz, Poornima, and Leshawn"
const expensive = splitTheBill.split(', ');
console.log(expensive);
// OH NO! The alien invaders from earlier were so against bill splitting so they decided to split() Yaz, Poornima, and Leshawn into pieces. Using splitTheBill, return an array separating all three by characters.
const splitIntoPieces = splitTheBill.split('');
console.log(splitIntoPieces);
// Use this toLowerCase()
const angry = "LOWER YOUR VOICE DOWN IF YOU AIN'T PAYING MY BILLS."
const happy = angry.toLowerCase();
console.log(happy);
// Tuan was angry today. Create a string with words that Tuan would yell out. Now lowercase it, to tell Tuan to chill out. 
const tusanAngry = 'I EVERYONE AND EVERYTHING IN THIS WORLD!';
const tusanChill = tusanAngry.toLowerCase();
console.log(tusanChill);
// toUpperCase()
const jahlunSaidToPutSomeRespectToHisName = "jahlun"
const noRespect = jahlunSaidToPutSomeRespectToHisName.toUpperCase();
console.log(noRespect);
// substring()
// on the chopping block...
const letsTryThisOut = 'on the chopping block...';
const weGotThis = letsTryThisOut.substring(0, 5);
// Returns "ell"
const basicGreeting = "Hello World"
const placeBackEll = placeBackEll.substring(1, 4);
console.log(placeBackEll);
// Returns "JavaScript"
const ohReally = "JavaScript Substring"
const giveMeThat = ohReally.substring(0, 10);
console.log(giveMeThat);
// Returns aol.com
const aslDays = "xXteoWuzHereXx@aol.com"
const comeOn = aslDays.indexOf('@');
const letsDoThis = aslDays.substring(comeOn, + 1);
console.log(letsDoThis);
// trim()
// If only I can use this for my love handles...
// Create a variable with a string value with some extra loving on both sides.
const loveHandles = '        Love Handles.       ';
const getRidOFLoveHandles = loveHandles.trim();
console.log(getRidOFLoveHandles);
// =================================================
//                     BOOLEAN
// =================================================

// I just want my dreams to come true. 
// With the powers of logical and comparison operators, PRINT TRUE please!
// Replace the underscores.

const a = 5;
const b = 10;
const c = 15;
const d = "Keke"

// console.log(a < b)
// console.log(c >= b)
// console.log(d === d)
// console.log(d != a)
// console.log(a <= 15)
// console.log(a < b < c)
// console.log(c !== b && a != d)

// =================================================
//                     LOOPS
// =================================================

// Ken has a headache today and he said the room has been spinning like crazy. Make Ken's room spin 10 times using FOR LOOP. Make him print a sentence.
for (let i = 1; i<= 10 numSpins; i++) {
  console.log(`Ken's room has been spinning ${i} times.`);
}
// Harry said that was so mean of Teo to do Ken dirty like that. Make Teo's vision spin 20 times FOR LOOP.
let teo = {
  vision: {
    spin: function () {
      console.log("Teo's vision is spinning!");
    }
  }
};

for (let spinCount = 0; spinCount < 20; spinCount++) {
  teo.vision.spin();
}
// But wait! Lisa said, while Teo is spinning 20 times. Let's make him say "I'm sorry". Print I'm sorry 20 times using a WHILE loop.
let teo = {
  say: function (message) {
    console.log(message);
  }
};

let apologyCount = 0;

while (apologyCount < 20) {
  teo.say("I'm sorry");
  apologyCount++;
}
// For the next three, look for the syntax of FOR IN and FOR OF loop. Very easy to understand syntax, and very clean :) 
// To The Left! To The Left! Everything I want in the console to the left. Print thing1, thing2, thing 3 using (FOR IN LOOP)
const whateverQueenBeySaid = {
  thing1: 'shoes',
  thing2: 'clothes',
  thing3: 'gaming console'
};
for (let key in whateverQueenBeySaid) {
  console.log(key);
}
// Using (FOR IN LOOP), print the indexes of the array.
const lana = ['l', 'a', 'n', 'a'];
for (let index in lana) {
  console.log(index);
}
// USE (FOR OF LOOP)!
const tia = ['teo', 'the', 'syntax', 'of', 'this', 'is', 'cleaner'];
for (let value of tia) {
  console.log(value);
}
// Look into forEach() loop, it accepts a callback aka a function inside a function. 
// Swathi said don't forget each person. No person left behind! Use forEach() to iterate over the array perscholas. Inside the function, create a variable with the string "PS". Print their name in the console concatenated with the variable. 
const perscholas = ['Amira', 'Arely', 'Jonathan'];
perscholas.forEach(person => {
  let message = "Hi! My name is " + person + ". I am a Per Scholas student.";
  console.log(message);
});
// =================================================
//                     ARRAYS
// =================================================

// Look up the following: Make a note of what each one of these methods do
// push(): adds an element to the end of an array
// pop(): removes the last element from the end of an array
// unshift(): adds an element to the beginning of an array
// shift(): removes the first element from the beginning of an array
// concat(): Combines two or more arrays 
// splice(): Changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// slice(): Returns a copy of a portion of an array into a new array.
// sort(): Sorts the elements of an array in place.
// includes(): Returns true if the array contains a specified element; otherwise, it returns false.
// indexOf():  Returns the first index at which a given element can be found in the array, or -1 if it is not present.
// length: A property that returns the number of elements in an array.

const fruits = ['apple', 'banana', 'orange']

// Print banana
console.log(fruits[1]);
// Let's turn it up a notch. I won't tell you what array methods to use. 
// Join all the elements of the array into a string separated by a space.
const concatenatedString = fruits.join(' ');
console.log(concatenatedString);
// Remove orange
fruits.pop();
console.log(fruits);
// Add strawberry, kiwi, and grapes at the end
fruits.push('strawberry', 'kiwi', 'grapes');
console.log(fruits);
// Remove apple
fruits.shift();
console.log(fruits);
// Add mango at the beginning of the array
fruits.unshift('mango');
console.log(fruits);
// Add lemon, and grapefruit between mango and banana
const indexToInsert = fruits.indexOf('banana');
fruits.splice(indexToInsert, 0, 'lemon', 'grapefruit');
console.log(fruits);
// Remove banana and strawberry
const indexToRemoveBanana = fruits.indexOf('banana');
const indexToRemoveStrawberry = fruits.indexOf('strawberry');
if (indexToRemoveBanana !== -1) {
  fruits.splice(indexToRemoveBanana, 1);
}
if (indexToRemoveStrawberry !== -1) {
  fruits.splice(indexToRemoveStrawberry, 1);
}
console.log(fruits);
// Create a new array called exoticFruits. Add 3 exotic fruits inside of this array. Create a new variable and assign it with the value of concatenating fruits array and exoticFruits array.
const exoticFruits = ['durian', 'persimmon', 'feijoa'];
const combinedArray = fruits.concat(exoticFruits);
console.log(combinedArray);
// Print the last two exotic fruits without altering the newly concatenated array.
const lastTwoExoticFruits = combinedArray.slice(-2);
console.log(lastTwoExoticFruits);
// Monalissa said she needs help re-organizing her items in alphabetical order.
const monalissaIsMessy = ["pencil", "paper", "notebook", "computer"]
monalissaIsMessy.sort();
console.log(monalissaIsMessy);
// Kevin accidentally stepped into the mirror world and needs help reversing his words.
const mirrorMirrorOnTheWall = ["all", "them", "of", "greatest", "the", "is", "who"]
mirrorMirrorOnTheWall.reverse();
console.log(mirrorMirrorOnTheWall);
// ===== HIGHER ORDER METHODS =====
// Rafael said he''s trying to stop cursing so much, and he wants to start with his text messages. Help him write code to eliminate the badword in his sentences. Must return a string sentence. Must use filter(). :) 
const RafaelNoBadWords = "I am so tired of this badword food. I do not want this badword badword food."
const badWord = "badword";
const words = RafaelNoBadWords.split(' ');
const filteredWords = words.filter(word => word.toLowerCase() !== badWord);
const cleanSentence = filteredWords.join(' ');
console.log(cleanSentence);
// Man math is hard. Let's make our computer do it for us. Use reduce() to find the total of the numbers in numbersToAddUp
const numbersToAddUp = [99, 5677, 232, 84, 2, 231]
const total = numbersToAddUp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(total);
// ===== SPREAD OPERATOR ===== 

// Create a variable and assign a value of a copied array using the spread operator
const originalArray = [1, 2, 3, 4, 5];
const copiedArray = [...originalArray];
console.log(copiedArray);
// Create two arrays with any elements and connect both of them using the spread operator. Save the connected arrays into a new variable.
const array1 = [1, 2, 3];
const array2 = ['a', 'b', 'c'];
const connectedArray = [...array1, ...array2];
console.log(connectedArray);
// Using the variable with the newly connected arrays, use spread operator to add something at the end.
const newArrayWithAddition = [...connectedArray, 'newElement'];
console.log(newArrayWithAddition);
// Using the variable with the newly connected arrays, use spread operator to add something at the beginning.
const newArrayWithPrefix = ['hello', ...connectedArray, 'newElement'];
console.log(newArrayWithPrefix);
// ===== ACCESS =====

// Donut Shopping
const donutShop = [
  [
    'firecracker',
    'chocolate',
    'blueberry'
  ],
  [
    ['orange', 'applecrumble'],
    ['cream', 'peanutbutter', 'coconut']
  ],
  [
    [
      [
        [
          ['flavor of the week']
        ], ['ihatethis']
      ]
    ]
  ]
]

// Anthony wants applecrumble. Print please!
const appleCrumble = donutShop[1][0][1];
console.log(appleCrumble);
// Tosi wants ihatethis. :) Print!
const ihatethisFlavor = donutShop[2][0][0][0][1][0];
console.log(ihatethisFlavor);
// =================================================
//                     IF/ELSE
// =================================================

// Teo is a person. I would hope so...
// Check if Teo is a person. If true, print 'Teo is a person!' if not then print 'Teo is not a person!'
const personName = 'Teo';
if (personName === 'Teo') {
  console.log('Teo is a person!');
} else {
  console.log('Teo is not a person!');
}
// If Teo is a person, check to see if he is a male or a female. If male, print 'You got it right!' if not then print 'Wrong. Teo is going to remove you from the class.'.
const personName = 'Teo';
const isMale = true;
if (personName === 'Teo') {
  console.log('Teo is a person!');
  if (isMale) {
    console.log('You got it right!');
  } else {
    console.log('Wrong. Teo is going to remove you from the class.');
  }
} else {
  console.log('Teo is not a person!');
}
// If male, check to see if Teo is hungry. If Teo is 'hungry' then print 'Let's buy Teo some tacos!'. If Teo is 'not hungry' then print 'He doesn't need to eat.'. Anything else, print 'If Teo is not hungry, am I hungry?'
const personName = 'Teo';
const isMale = true;
const isHungry = 'hungry';
if (personName === 'Teo') {
  console.log('Teo is a person!');
  if (isMale) {
    console.log('You got it right!');
    if (isHungry === 'hungry') {
      console.log("Let's buy Teo some tacos!");
    } else if (isHungry === 'not hungry') {
      console.log("He doesn't need to eat.");
    } else {
      console.log("If Teo is not hungry, am I hungry?");
    }
  } else {
    console.log('Wrong. Teo is going to remove you from the class.');
  }
} else {
  console.log('Teo is not a person!');
}
// Create a if/else ternary to check if Gustavo is the coolest. If coolest, print 'You got that right!', else print 'James wants to argue. He says he's the best!'
const personName = 'Gustavo';
const isCoolest = true;
const message = isCoolest ? 'You got that right!' : "James wants to argue. He says he's the best!";
console.log(message);
// =================================================
//                     FUNCTIONS
// =================================================

// Don't forget to call your functions :)

// Create a function called sayGreeting and PRINT 'Hello, ma'amsir!'
function sayGreeting() {
  console.log('Hello, ma\'amsir!');
}
sayGreeting();
// Create a function that takes a string as a parameter. PRINT 'This is my (STRING)'. Please replace the (STRING) with the parameter. Don't play with me haha.
function printMyString(inputString) {
  console.log('This is my ' + inputString);
}
printMyString('awesome string');
// Create a function called add that takes in three number parameters. Create 3 variables and assign numerical values to them. Invoke your add() and pass in those three variables as arguments.
function add(num1, num2, num3) {
  const result = num1 + num2 + num3;
  console.log('The sum is: ' + result);
}
const a = 5;
const b = 10;
const c = 15;
add(a, b, c);
// Create a function called fightClub() that accepts a name parameter.  If the name:
// 'Teo' RETURN '1st rule: You do not talk about Fight Club.'
// 'Manara' RETURN '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.'
// 'Liv' RETURN '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.'
// 'Devin' RETURN '4th rule: Only two guys to a fight.'
// Anything else, RETURN 'No shirts
function fightClub(name) {
  if (name === 'Teo') {
    return '1st rule: You do not talk about Fight Club.';
  } else if (name === 'Manara') {
    return '2nd rule: YOU DO NOT TALK ABOUT FIGHT CLUB.';
  } else if (name === 'Liv') {
    return '3rd rule: If someone yells "Stop!", goes limp, taps out, the fight is over.';
  } else if (name === 'Devin') {
    return '4th rule: Only two guys to a fight.';
  } else {
    return 'No shirts';
  }
}
const result1 = fightClub('Liv');
const result2 = fightClub('Devin');
const result3 = fightClub('SomeoneElse');
console.log(result1);
console.log(result2);
console.log(result3);
// Create a function called hello() that prints 'Hello'. Return an anonymous function inside hello() and have it print 'Goodbye'. Invoke your hello function in some way to see Hello and Goodbye in the console.
function hello() {
  console.log('Hello');
  return function() {
    console.log('Goodbye');
  };
}
const goodbyeFunction = hello();
goodbyeFunction();
// Create a function expression with your first name as the variable and then print your first and last name
const myFirstName = function () {
  const myLastName = 'Polee';
  console.log('My name is ' + myFirstName + ' ' + myLastName);
};
myFirstName('Kinshasa');
// Create an arrow function that accepts a number and have it return that number doubled
const doubleNumber = (number) => {
  return number * 2;
};
const result = doubleNumber(5);
console.log(result);
// =================================================
//                     OBJECTS
// =================================================

// Create an object and call it human. Add a name, age, and location property. Give the properties values.
const human = {
  name: 'Barbie',
  age: 18,
  location: 'Barbieland'
};
console.log('Name:', human.name);
console.log('Age:', human.age);
console.log('Location:', human.location);
// Access the name using dot notation
const humanName = human.name;
// Print the name
console.log('Name:', humanName)
// Access the age using square brackets
const humanAge = human['age'];
console.log('Age:', humanAge);
// Use object destructuring to access location
const { location: humanLocation } = human;
console.log('Location:', humanLocation);
// ACCESS Granted
const bulbasaur = {
  name: 'Bulbasaur',
  abilities: [
    {
      ability: 'overgrow'
    },
    {
      ability: 'chlorophyll'
    }
  ],
  moves: ['razor-wind', 'swords-dance', 'cut'],
  sound: function () {
    console.log('Bulbahhhh!!!!!')
  }
}
// Print overgrow
const overgrowAbility = bulbasaur.abilities[0].ability;
console.log(overgrowAbility);
// Print cut
const cutMove = bulbasaur.moves[2];
console.log(cutMove);
// Print Bulbahhhh!!!!!
bulbasaur.sound();
// Add a height of 7 to bulbasaur using the dot notation. (Don't change bulbasaur object manually)
bulbasaur.height = 7;
console.log(bulbasaur);
// Add a property called order and assign it a value of 1 using the square brackets. (Don't change bulbasaur object manually)
bulbasaur['order'] = 1;
console.log(bulbasaur);
// Print an array that contains every single properties in bulbasaur
const allProperties = Object.keys(bulbasaur);
console.log(allProperties);
// Print every single properties one by one in the console
for (const property in bulbasaur) {
  console.log(property + ':', bulbasaur[property]);
}
// Print an array that contains every single values in bulbasaur
const allValues = Object.values(bulbasaur);
console.log(allValues);