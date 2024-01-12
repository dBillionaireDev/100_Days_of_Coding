//Challenges go here

let emptyArray = []
let arr = [3, 5, 6, 9, 21, 15, 15, 7] 
const arrLength = arr.length

let firstNum = arr[0];
let middleNum = arr[3];
let lastNum = arr.length -1;

console.log(firstNum, middleNum, lastNum);

const mixedDataTypes = [2, 'Man', true,  , 5, 'I am good'];
console.log(mixedDataTypes.length);

let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);

let firstCompany = itCompanies[0];
let midCompany = itCompanies[3];
let lastCompany = itCompanies.length -1;
let lastIndex = itCompanies[lastCompany];

console.log(`The first company is ${firstCompany}`);
console.log(`The middle company is ${midCompany}`);
console.log(`The last company is ${lastIndex}`);

console.log(itCompanies[0]);
console.log(itCompanies[1]);
console.log(itCompanies[2]);
console.log(itCompanies[3]);
console.log(itCompanies[4]);
console.log(itCompanies[5]);
console.log(itCompanies[6]);

console.log(itCompanies[0].toUpperCase);
console.log(itCompanies[1].toUpperCase);
console.log(itCompanies[2].toUpperCase);
console.log(itCompanies[3].toUpperCase);
console.log(itCompanies[4].toUpperCase);
console.log(itCompanies[5].toUpperCase);
console.log(itCompanies[6].toUpperCase);

let singleCompanies = itCompanies.join(', ');
console.log(` ${singleCompanies} are big IT companies`);

if (itCompanies.includes('Facebook')){
	console.log('Facebook is a company');
} else{
	console.log('Facebook is not a company');
}

let short = itCompanies;
console.log(short.sort());
console.log(short.reverse());
console.log(short.slice(3, 5));
console.log(short.splice(5, 3, ));
console.log(short.splice(4, 1, ));
console.log(short.shift());
console.log(short.pop());
