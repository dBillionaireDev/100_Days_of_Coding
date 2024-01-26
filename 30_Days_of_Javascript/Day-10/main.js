console.log("JavaScript is Cool");

//DAY 10 CHALLENGES

/*create an empty set
Create a set containing 0 to 10 using loop
Remove an element from a set
Clear a set
Create a set of 5 string elements from array
Create a map of countries and number of characters of a country
*/

//Task 1: create an empty set

const emptySet = new Set();
console.log(emptySet);

//Task 2: Create a set containing 0 to 10 using loop

const emptySet = new Set();
for (let i = 0; i <= 10; i++) {
	emptySet.add(i);
}
console.log(emptySet);

//Task 3: Remove an element from a set

emptySet.delete(6);
console.log(emptySet);

//Task 4: Clear a set
emptySet.clear();

console.log(emptySet);

//Task 5: Create a set of 5 string elements from array

const nameArray = ['Nezer', 'Zeile', 'Dozzy', 'Emylex', 'DeWind'];
const nameSet = new Set(nameArray);

console.log(nameSet);

//Task 6: Create a map of countries and number of characters of a country

const countries = [
['Nigeria', 7],
['Algeria', 7],
['Australia', 9],
]

const countriesMap = new Map();

console.log(countriesMap);

//LEVEL 2
/*
Find a union b
Find a intersection b
Find a with b
*/

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//Task 7: Find a union b

const c = [...a, ...b]

let A = new Set(a);
let B = new Set(b);
Let C = new Set(c);

console.log(C);


//Task 8: Find a intersection b

let A = new Set(a);
let B = new Set(b);

const c = a.filter((num) => B.has(num));
Let C = new Set(c);

console.log(C);

//Task 9: Find a with b

let A = new Set(a);
let B = new Set(b);

const c = a.filter((num) => !B.has(num));
Let C = new Set(c);

console.log(C);
