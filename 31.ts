let usernames: string[] = ['admin', 'Eric', 'Alice', 'Bob', 'Charlie'];

// Clear the array to test the empty condition
usernames = [];

// Check if the list of users is empty
if (usernames.length === 0) {
    console.log('We need to find some users!');
} else {
    // Loop through the array and print a greeting to each user
    for (let username of usernames) {
        if (username === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
}
