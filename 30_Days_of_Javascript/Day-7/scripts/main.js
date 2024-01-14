console.log(countries)
alert('Open the console and check if the countries has been loaded')

//Function Declaration
function fullName(firstName, lastName){
	const name = `My name is ${firstName} ${lastName}, and I am a developer from Abuja, Nigeria.`;
	return name;
}

	fullName('Ebenezer', 'Ekunke');
const myName = fullName('Ebenezer', 'Ekunke');
const dominionName = fullName('Dominion', 'Ikorishor');
const eliezerName = fullName('Eliezer', 'Ekunke');

//Function expressions
const officialName = function(firstName, lastName){
	const name = `My name is ${firstName} ${lastName}, and I am a developer from Abuja, Nigeria.`;
	return name;
}

officialName('Ebenezer', 'Ekunke');
const myName = officialName('Ebenezer', 'Ekunke');
const dominionName = officialName('Dominion', 'Ikorishor');
const eliezerName = officialName('Eliezer', 'Ekunke');

console.log(myName);
console.log(eliezerName);
console.log(dominionName);

/*
 UDEMY CHALLENGE #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).

A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!



Your tasks:

Create an arrow function calcAverage to calculate the average of 3 scores. This function should have three parameters and return a single number (the average score).

Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them (you will need to call this function, and pass scores as arguments).

Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above. Example: Koalas win (30 vs. 13) (use avgDolphins and avgKoalas instead of hard-coded values).

Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.

Ignore draws this time. Instead, log No team wins... to the console if there is no winner.



TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.

TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.
	*/

//ANSWER

const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

 const checkWinner = function(avgDolphins, avgKoalas){
    if(avgDolphins >= 2 * avgKoalas){
        return `Dolphin win (${avgDolphins} vs. ${avgKoalas})`;
    }else if(avgKoalas >= 2 * avgDolphins){
        return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
    } else{
        return `No team wins....`
    }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));

scoreKoalas = calcAverage(23, 34, 27);
scoreDolphins = calcAverage(85, 54, 41);

console.log(checkWinner(scoreDolphins, scoreKoalas));

/*CHALLENGE #2
Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

Your tasks:

Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

And now let's use arrays! So, create an array called bills containing the test data below.

Create an array called tips containing the tip value for each bill, calculated from the function you created before.

BONUS: Create an array totals containing the total values, so the bill + tip.

TEST DATA: 125, 555, and 44.
*/

//ANSWER

const calcTip = function(bill){
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
    
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
const total = [`${bills + tips}`];
console.log(bills, tips, total);

//Declare a function addNumbers and it takes two two parameters and it returns sum.

const addNumbers = function(numOne, numTwo){
	let numOne = 4;
	let numTwo = 8;

const sum = numOne + numTwo;
return sum;

}

console.log(addNumbers);// 12

//An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle

const areaOfRectangle = function(length, breadth){
	const area = length * breadth;
	return area;
}

console.log(areaOfRectangle(10, 6));

//A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

const perimeterOfRectangle = function(length, breadth){
	const perimeter = (length + breadth) * 2;
	return perimeter;
}

console.log(perimeterOfRectangle(10, 6));

//A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism

const volumeOfRectPrism = function(length, breadth, height){
	const volume = length * breadth * height;
	return volume;
}

console.log(volumeOfRectPrism(10, 6, 8));

//Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

const convertCelsiusToFahrenheit = function(celsius){
	const fahrenheit = (celsius * 9 / 5) + 32;
	return fahrenheit;
}

console.log(convertCelsiusToFahrenheit (0));

//Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

const solveLinEquation = function(a, b, c, x, y){
	const equation = (a * x) + (b * y) + c;
	return equation;
}

console.log(solveLinEquation(2, 4, 1, 3, 7));
