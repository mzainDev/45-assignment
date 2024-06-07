"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function describe_city(city, country = 'Unknown') {
    console.log(`${city} is in ${country}.`);
}
// Calling the function for three different cities
describe_city('Karachi', 'Pakistan');
describe_city('New York', 'USA');
describe_city('Sydney'); // Using default country 'Unknown'
