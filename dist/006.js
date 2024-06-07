"use strict";
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
//Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
Object.defineProperty(exports, "__esModule", { value: true });
// Store the person's name with whitespace characters
let personName = "\t\n   M.Zain \n\t";
// Print the name with whitespace
console.log(`Name with whitespace ${personName}`);
// Strip the whitespace from the name
let strippedName = personName.trim();
// Print the name after stripping the whitespace
console.log("Stripped name:", strippedName);
