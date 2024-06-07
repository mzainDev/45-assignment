"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the arrow function show_magicians
const show_magicians = (magicians) => {
    magicians.forEach(magician => console.log(magician));
};
// Define the function make_great to return a new array with "the Great" added to each magician's name
const make_great = (magicians) => {
    return magicians.map(magician => `${magician} the Great`);
};
// Array of magician's names
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call make_great with a copy of the array of magicians
let great_magicians = make_great([...magicians]);
// Call show_magicians with the original array
console.log("Original magicians:");
show_magicians(magicians);
// Call show_magicians with the new array of great magicians
console.log("\nGreat magicians:");
show_magicians(great_magicians);
