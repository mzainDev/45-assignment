function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`Shirt size: ${size}`);
    console.log(`Message on the shirt: ${message}`);
}

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt('Medium');

// Making a small shirt with a different message
make_shirt('Small', 'Hello, World! This is my custom shirt message.');
