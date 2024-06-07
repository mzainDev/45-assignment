// Define the function to create a sandwich with variable number of ingredients
const make_sandwich = (...items: string[]) => {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => console.log(`- ${item}`));
    console.log("Your sandwich is ready!\n");
};

// Call the function three times with different numbers of arguments
make_sandwich('Ham', 'Cheese', 'Lettuce', 'Tomato');
make_sandwich('Turkey', 'Avocado', 'Bacon');
make_sandwich('Peanut Butter', 'Jelly');
