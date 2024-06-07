"use strict";
//If you could invite anyone, living or deceased, to dinner, 
//who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
//Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
// Store the names of people you'd like to invite to dinner in an array called dinnerGuests
const guestList = [
    'Albert Einstein',
    'Maya Angelou',
    'Newton'
];
//function to send dinner invitation
const sendInvitation = (guest) => {
    guest.forEach(guest => {
        console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place`);
    });
};
//Send invitation
sendInvitation(guestList);
