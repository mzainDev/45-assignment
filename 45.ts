function create_car(manufacturer: string, model: string, ...options: { [key: string]: any }[]): { manufacturer: string, model: string, [key: string]: any } {
    // Start with the basic car information
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    
    // Add the additional options to the car object
    options.forEach(option => {
        Object.assign(car, option);
    });

    return car;
}

// Call the function with required information and two additional name-value pairs
let myCar = create_car('Tesla', 'Model S', { color: 'Red' }, { autopilot: true });

// Print the object to make sure all information is stored correctly
console.log(myCar);
