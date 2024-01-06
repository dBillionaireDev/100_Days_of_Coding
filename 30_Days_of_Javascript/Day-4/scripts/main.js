// this is your main.js script

//Task 1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let clientAge = prompt('Please input your age', 'Your age in years');
let legalAge = 18 - clientAge;
 if (clientAge >= 18){
alert('You are old enough to drive.');
} else {
alert(`You are left with ${legalAge} years to drive.`);
}

//Task 2: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 23;
let yourAge = prompt('Enter your age','Your age in years please');
const myAgeDifference = myAge - yourAge;
const yourAgeDifference = yourAge - myAge;

if (myAge > yourAge){
alert(`I am ${myAgeDifference} years older than you.`);
} else {alert(`You are ${yourAgeDifference} years older than me.`);
}

/*Task 3: If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in two ways

using if else
ternary operator.
*/

let a = 8;
let b = 15;

//Using if else...

if (a > b){
console.log('a is greater than b');
} else {
console.log('a is less than b');
}

//Using ternary operator.....

a > b
? alert('a is greater than b')
: alert('a is less than b')

//Task 4: Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

let number = prompt('Enter number', 'Enter a random number')
number % 2 === 0
? console.log(`${number} is an even number`)
: console.log(`${number} is an odd number`)

//Level 2
/*Task 1: Write a code which can give grades to students according to theirs scores:
80-100, A
70-79, B
60-69, C
50-59, D
0-49, F
*/

let num = prompt('Enter your score', 'Student grade');
switch (true) {
  case num >= 80:
    console.log('You have an A');
    break;
  case num <= 79 >= 70:
    console.log('You have a B');
    break;
case num <= 69 >= 60:
    console.log('You have a C');
    break;
case num <= 59 >= 50:
    console.log('You have a D');
    break;
  case num <= 49:
    console.log('You have an F');
    break;
  default:
    console.log('You have no grade');
}
