"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Define the arrow function show_magicians
const show_magicians = (magicians) => {
    magicians.forEach(magician => console.log(magician));
};
// Define the function make_great to modify the array of magicians
const make_great = (magicians) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `${magicians[i]} the Great`;
    }
};
// Array of magician's names
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
// Call make_great to modify the array of magicians
make_great(magicians);
// Call show_magicians to see that the list has been modified
show_magicians(magicians);
