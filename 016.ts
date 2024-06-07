//You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 

//You’ll have to think of someone else to invite.

// Start with your program . Add a print statement at the end of your program stating the name of the guest who can’t make it.

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// Print a second set of invitation messages, one for each person who is still in your list.


let dinnerGuests = ['Albert Einstein', 'Marry', 'Marie Curie'];

// Print the initial set of invitations
console.log(`Dear ${dinnerGuests[0]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${dinnerGuests[1]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${dinnerGuests[2]}, you are cordially invited to dinner at my place.`);

// One of the guests can't make it
let unableToAttend = dinnerGuests[1];
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the name of the guest who can’t make it with the name of the new person you are inviting
dinnerGuests[1] = 'Newton';

// Print the second set of invitation messages
console.log(`Dear ${dinnerGuests[0]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${dinnerGuests[1]}, you are cordially invited to dinner at my place.`);
console.log(`Dear ${dinnerGuests[2]}, you are cordially invited to dinner at my place.`);
