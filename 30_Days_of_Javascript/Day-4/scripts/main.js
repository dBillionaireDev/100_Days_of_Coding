// this is your main.js script

//Task 1: Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

let clientAge = prompt('Please input your age', 'Your age in years');
let legalAge = 18 - clientAge;
 if (clientAge >= 18){
alert('You are old enough to drive.');
} else {
alert(`You are left with ${legalAge} years to drive.`);
}

//Task 1: Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 23;
let yourAge = prompt('Enter your age','Your age in years please');
const myAgeDifference = myAge - yourAge;
const yourAgeDifference = yourAge - myAge;

if (myAge > yourAge){
alert(`I am ${myAgeDifference} years older than you.`);
} else alert(`You are ${yourAgeDifference} years older than me.`);
}



