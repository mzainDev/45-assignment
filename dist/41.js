"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the arrow function show_magicians
const show_magicians = (magicians) => {
    magicians.forEach(magician => console.log(magician));
};
// Array of magician's names
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Calling the arrow function to show each magician's name
show_magicians(magicians);
