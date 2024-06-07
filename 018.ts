let dinnerTable = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
let moreGuests = ["Frank", "Grace", "Henry"];

// Adding more guests to the dinner table
dinnerTable.push(...moreGuests);

console.log("Updated Dinner Table:");
console.log(dinnerTable);

// Print a message saying that you can invite only two people for dinner
console.log("\nSorry, I can only invite two people for dinner.\n");

// Remove guests from the list one at a time until only two names remain
while (dinnerTable.length > 2) {
    let removedGuest = dinnerTable.pop();
    console.log(`Sorry ${removedGuest}, I can't invite you to dinner.`);
}

// Print a message to each of the two people still on your list, letting them know they’re still invited
dinnerTable.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to the dinner.`);
});

// Remove the last two names from the list
dinnerTable.pop();
dinnerTable.pop();

// Print the list to make sure it's empty
console.log("\nFinal Dinner Table:");
console.log(dinnerTable);
