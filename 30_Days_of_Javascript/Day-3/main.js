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

/* Task 7: Use the Date object to do the following activities

What is the year today?
What is the month today as a number?
What is the date today?
What is the day today as a number?
What is the hours now?
What is the minutes now?
Find out the numbers of seconds elapsed from January 1, 1970 to now. */

console.log('Task 7');

const time = new Date();
console.log(time.getFullYear());
console.log(time.getMonth());
console.log(time.getDate());
console.log(time.getDay());
console.log(time.getHours());
console.log(time.getMinutes());
console.log(time.getTime());

//Exercises: Level 2

//Task 1: Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt('Enter number here', 'Enter your triangle base');
let height = prompt('Enter number here', 'Enter your triangle height');
const constant = 0.5;
const area = base * height * constant;
alert(`The area of your triangle is ${area}`);

//Task 2: Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

a = prompt('Enter number here', 'Enter side a');
b = prompt('Enter number here', 'Enter side b');
let c = prompt('Enter number here', 'Enter side c');
const perimeter = a + b + c;
alert(`The perimeter of your triangle is ${perimeter}`);

//Task 3: Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt('Enter number here', 'Enter your rectangle length');
let width = prompt('Enter number here', 'Enter your rectangle width');
const distance = length * width;
const total = length + width;
alert(`The area of your rectangle is ${distance}`);
alert(`The perimeter of your rectangle is ${total}`);

//Task 4: Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

let radius = prompt('Enter number here', 'Enter your circle radius');
let pi= 3.14;
const diamter = pi * radius * radius;
const circumference = 2 * pi * radius;
alert(`The area of your circle is ${diamter}`);
alert(`The circumference of your rectangle is ${circumference}`);

//Task 5: Calculate the slope, x-intercept and y-intercept of y = 2x -2

let xOne = prompt('Enter number here', 'Enter the value of X1');
let xTwo = prompt('Enter number here', 'Enter the value of X2');
let yOne = prompt('Enter number here', 'Enter the value Y1');
let yTwo = prompt('Enter number here', 'Enter the value Y2');
const slopeOne = (yTwo - yOne) / (xTwo - xOne);
const xIntercept = 0 + 2 / 2;
const yIntercept = 2 * 0 -2;
alert(`The slope of your graph is ${slopeOne}`);
alert(`The x-intercept of your graph is ${xIntercept}`);
alert(`The y-intercept of your graph is ${yIntercept}`);

//Task 6: Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

yTwo = 2;
yOne = 2;
xTwo = 6;
xOne = 10
const slopeTwo = (yTwo - yOne) / (xTwo - xOne);
alert(`Your slope is ${slopeTwo}`);

//Task 6: Compare the slope of above two questions.
alert(slopeOne === slopeTwo);

//Task 8: Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

let x = prompt('Input', 'Enter your value of x');
let y = x * 2 + 6 * x + 9;
alert(`The value of Y is ${y}`);

alert('Level 2, task eight is done');
