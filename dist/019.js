"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dinnerGuest = [
    'zain',
    'karim',
    'rizwan',
];
const numberofPeople = (guest, index) => {
    guest.forEach(guest => {
        console.log(`Dear${guest} your are invited to dinner`);
    });
};
