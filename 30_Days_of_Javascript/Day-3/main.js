// this is your main.js script

//Task 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Nezer'; 
const lastName = 'Ekunke'; 
const country = 'Nigeria'; 
let city = 'Abuja'; 
let age = 23; 
let isMarried = false;
let year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

//Task 2: Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10);

//Task 3: Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10);

/*Task 4: Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/

let count = 5;
console.log(++count);

let a = 3;
let b = 4;

console.log(10 < 12);
console.log(count === 6);
console.log(a ** 4 === 81);

console.log(20 > 23);
console.log(count === 5);
console.log(a * b === 81);

alert('Task four is done');
