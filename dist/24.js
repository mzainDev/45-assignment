"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Tests for equality and inequality with strings
let color = "blue";
console.log("Is color equal to 'blue'? I predict True.");
console.log(color === "blue"); // True
let fruit = "apple";
console.log("Is fruit not equal to 'banana'? I predict True.");
console.log(fruit !== "banana"); // True
// Tests using the lower case function
let city = "New York";
console.log("Is city in lowercase 'new york'? I predict False.");
console.log(city.toLowerCase() === "new york"); // False
// Numerical tests
let num1 = 10;
let num2 = 5;
console.log("Is num1 greater than num2? I predict True.");
console.log(num1 > num2); // True
console.log("Is num1 less than or equal to num2? I predict False.");
console.log(num1 <= num2); // False
// Tests using "and" and "or" operators
let isDay = true;
let isSunny = true;
console.log("Is it day and sunny? I predict True.");
console.log(isDay && isSunny); // True
let isRainy = false;
console.log("Is it day or rainy? I predict True.");
console.log(isDay || isRainy); // True
// Test whether an item is in an array
let fruits = ["apple", "banana", "orange", "grape"];
console.log("Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes("banana")); // True
// Test whether an item is not in an array
console.log("Is 'watermelon' not in the fruits array? I predict True.");
console.log(!fruits.includes("watermelon")); // True
