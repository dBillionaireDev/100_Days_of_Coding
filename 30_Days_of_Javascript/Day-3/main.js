// this is your main.js script

//Task 1: Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
console.log('Task 1');
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
console.log('Task 2');
console.log(typeof '10' === typeof 10);

//Task 3: Check if parseInt('9.8') is equal to 10
console.log('Task 3');
console.log(parseInt('9.8') === 10);

/*Task 4: Boolean value is either true or false.

Write three JavaScript statement which provide truthy value.
Write three JavaScript statement which provide falsy value.
*/
console.log('Task 4');

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

/*Task 5: Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3
4 >= 3
4 < 3
4 <= 3
4 == 4
4 === 4
4 != 4
4 !== 4
4 != '4'
4 == '4'
4 === '4'
Find the length of python and jargon and make a falsy comparison statement.*/
console.log('Task 5');

let goat = 'Python';
let snake = 'Jargon';

console.log(goat.length);
console.log(snake.length);
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
console.log(goat.length > snake.length);

/*Task 6: Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
There is no 'on' in both dragon and python
*/

console.log('Task 6');
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
console.log(goat.includes('on'));
console.log(snake.includes('on'));

alert('Task six is done');
