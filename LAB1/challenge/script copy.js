// Mild Challenges 
let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;

// 1. If divided evenly, how much would each sibling get for the week?
let eachSiblingGets = weeklyAllowance / 3;
console.log(eachSiblingGets);

// 2. How many games can Jordan buy with their cut?
let gamesJordanCanBuy = Math.floor(eachSiblingGets / game);
console.log(gamesJordanCanBuy);

// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game += 1;
shoes /= 2;
console.log(game, shoes);

// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let combinedAllowance = (eachSiblingGets * 2) * 4;
let shoesTheyCanBuy = Math.floor(combinedAllowance / shoes);
console.log(shoesTheyCanBuy);

// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let gamesTogether = Math.floor(combinedAllowance / game);
let gamesSeparately = Math.floor(eachSiblingGets / game) * 2 * 4;
let moreGames = gamesTogether - gamesSeparately;
console.log(moreGames);

// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log(`The three siblings are ${sibling1}, ${sibling2}, and ${sibling3}.`);

// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
console.log(sibling3.length);

// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
console.log(sibling3.toUpperCase());

// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
console.log(sibling3.toLowerCase());

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
console.log(sibling3.replace(/a/g, ''));

// 11. Use console.log() and a built-in method to print out "De La Rosa"
console.log(sibling3.split(' ').slice(2, 5).join(' '));

// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

const getRandomNum = () => Math.floor(Math.random() * 100);
console.log(getRandomNum());

const greeting = (name) => `Hello ${name}, I'm glad you can make it!`;
console.log(greeting("Alice"));

const perfectRoot = (x) => {
    let root = Math.sqrt(x);
    return Math.floor(root) === root ? root : "No perfect root";
};
console.log(perfectRoot(9)); 
console.log(perfectRoot(10));

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => x + y;
console.log(addNums(4, 6));
console.log(addNums(10, 15));

/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    return name === "Beyonce" ? "Welcome Queen!" : `Sorry ${name}, you're not Beyonce`;
};
console.log(isBeyonce("Beyonce"));
console.log(isBeyonce("Alice"));

/// c. If the number is even, return the number divided by 2, otherwise, return the number
const reduceEvens = (x) => x % 2 === 0 ? x / 2 : x;
console.log(reduceEvens(10));
console.log(reduceEvens(11));

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
const shortenString = (string) => string.length > 10 ? string.slice(0, 10) : string;
console.log(shortenString("Hello World"));
console.log(shortenString("Hi"));

// Spicy Challenges
let burger = 5.00;
let fries = 3.00;
let soda = 1.00;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
const buyBurgers = (budget) => {
    let burgers = Math.floor(budget / burger);
    return burgers > 0 ? burgers : "Sorry, no burgers for you.";
};
console.log(buyBurgers(20));
console.log(buyBurgers(3));

// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
const buyMeals = (budget) => {
    let mealCost = burger + fries + soda;
    let meals = Math.floor(budget / mealCost);
    let remaining = (budget % mealCost).toFixed(2);
    return `You can buy ${meals} meals and have $${remaining} left over.`;
};
console.log(buyMeals(20));
console.log(buyMeals(50));

// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
const missingLeg = (hypotenuse, leg) => {
    let missing = Math.sqrt(hypotenuse**2 - leg**2);
    return missing.toFixed(2);
};
console.log(missingLeg(5, 3));
console.log(missingLeg(13, 12));

// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// Write a function factorial(x) that finds the factorial of any integer.
const factorial = (x) => {
    if (x === 0) return 1;
    return x * factorial(x - 1);
};
console.log(factorial(3));
console.log(factorial(5));
