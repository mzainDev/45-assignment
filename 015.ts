// Original guest list
const originalGuestList: string[] = [
    "Albert Einstein",
    "Maya Angelou",
    "Leonardo da Vinci"
];

// Function to send dinner invitations
function sendInvitations(guests: string[]): void {
    guests.forEach(guest => {
        console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\n\nSincerely,\n[Your Name]`);
    });
}

// Function to handle changes in the guest list
function handleGuestChange(originalList: string[], guestThatCantMakeIt: string, newGuest: string): void {
    const updatedList = originalList.map(guest => (guest === guestThatCantMakeIt) ? newGuest : guest);
    console.log(`${guestThatCantMakeIt} can't make it to dinner.`); // Print the name of the guest who can't make it
    console.log(`Inviting ${newGuest} instead.`); // Print the name of the new guest
    sendInvitations(updatedList);
}

// Guest who can't make it and the new guest to invite
const guestThatCantMakeIt: string = "Albert Einstein";
const newGuest: string = "Marie Curie"; // New guest to invite

// Handle changes in the guest list
handleGuestChange(originalGuestList, guestThatCantMakeIt, newGuest);
