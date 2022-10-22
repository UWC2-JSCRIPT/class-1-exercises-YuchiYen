///**
// * MATH
// */aeoubhaefobnadpkfgbn

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

//

function getPizzaSize(r) {
    return Math.PI * (r ** 2);
}

let pizzaSize13 = getPizzaSize(13 / 2);
let pizzaSize17 = getPizzaSize(17 / 2);

console.log('Answer Number 1:');
console.log(`Pizza Size 13 is ${pizzaSize13} square inch.`);
console.log(`Pizza Size 17 is ${pizzaSize17} square inch.`);


// 2. What is the cost per square inch of each pizza?
function getCostPerSqInch(cost, size) {
    return (cost / size).toFixed(2);
}

console.log('Answer Number 2: (Round up to the 2nd decimal)');
console.log(`Pizza Size 13 cost $ ${getCostPerSqInch(16.99, pizzaSize13)} per square inch.`);
console.log(`Pizza Size 17 cost $ ${getCostPerSqInch(19.99, pizzaSize17)} per square inch.`);

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

console.log('Answer Number 3:');
const rndInt = Math.floor(Math.random() * 13) + 1
console.log(`Random Number: ${rndInt}`)


// 4. Draw 3 cards and use Math to determine the highest
// card

let card1 = Math.floor(Math.random() * 13) + 1;
let card2 = Math.floor(Math.random() * 13) + 1;
let card3 = Math.floor(Math.random() * 13) + 1;
console.log('Answer Number 4:');
console.log(`The largest number in ${card1}, ${card2}, ${card3} is ${Math.max(card1, card2, card3)}`);

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

let firstName = 'FirstName';
let lastName = 'LastName';
let streetAddress = 'StreetAddress';
let city = 'City';
let state = 'State';
let zipCode = 'ZipCode';

let formatAddressBlock =
 
`     ${firstName} ${lastName}
     ${streetAddress}
     ${city}${state}${zipCode}`;

console.log('Address Line answer # 1:');
console.log(formatAddressBlock);

// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring
console.log('Address Line answer # 2:');
let addrArray = formatAddressBlock.trim().split(' ');
let extractedFirstName = formatAddressBlock.trim().split(' ')[0];
console.log(extractedFirstName);


/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
// const endDate = new Date(2019, 3, 1);

console.log('Find the Middle Date Answer:')

const date1 = new Date(2020, 1, 1);
const date2 = new Date(2020, 4, 1);

let dateTimeStamp1 = date1.getTime();
let dateTimeStamp2 = date2.getTime();

let midTimeStamp = (dateTimeStamp1 + dateTimeStamp2) / 2;

let midDate = new Date(midTimeStamp);
console.log(`The middle DateTime is ${midDate}`);
