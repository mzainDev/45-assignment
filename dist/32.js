"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let current_users = ['Alice', 'Bob', 'Charlie', 'Dave', 'Eve'];
let new_users = ['Eve', 'Frank', 'GEORGE', 'charlie', 'Hannah'];
// Convert current users to lowercase for case-insensitive comparison
let current_users_lowercase = current_users.map(user => user.toLowerCase());
// Loop through the new users to check if each username is available
for (let new_user of new_users) {
    if (current_users_lowercase.includes(new_user.toLowerCase())) {
        console.log(`The username ${new_user} is already taken. Please enter a new username.`);
    }
    else {
        console.log(`The username ${new_user} is available.`);
    }
}
