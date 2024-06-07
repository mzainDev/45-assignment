// Define the arrow function show_magicians
const show_magicians = (magicians: string[]) => {
    magicians.forEach(magician => console.log(magician));
};

// Array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];

// Calling the arrow function to show each magician's name
show_magicians(magicians);
