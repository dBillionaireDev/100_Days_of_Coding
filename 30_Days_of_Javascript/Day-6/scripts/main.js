console.log(countries)
alert('Open the console and check if the countries has been loaded')

//For loops

for(let i = 0; i <=10; i++){
	console.log(i)
}

for(let i = 10; i >=0; i--){
	console.log(i)
}

//While loops

let i = 0;
while(i <= 10){
	console.log(i);
	i++;
}

let i = 10;
while(i >= 0){
	console.log(i);
	i--;
}

for (let i = 1; i <= 7; i++) {
  let hashString = '#'.repeat(i);
  console.log(hashString);
}


for(let i = 0; i <=10; i++){
	console.log(`${i} x ${i} = ${i * i}`);
}


for(let i = 0; i <=10; i++){
	console.log(`${i}   ${i ** 2}   ${i ** 3}`);
}

//UDEMY CHALLENGE 1!!!!
/*
Let's improve Steven's tip calculator even more, this time using loops!

Your tasks:

Create an array called bills containing all 10 test bill values.

Create empty arrays for the tips and the totals (tips and totals)

Use the calcTip function we wrote before (included in the starter code) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!



TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.
*/

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}


const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length; i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

