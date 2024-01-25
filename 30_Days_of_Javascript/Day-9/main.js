console.log(countries)
alert('Open the console and check if the countries has been loaded')

/* Day 9 CHALLENGE
const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
*/

//Use forEach to console.log each country in the countries array.
countries.forEach((element) => {
	console.log(element)
})

//Use forEach to console.log each name in the names array.
names.forEach((element) => {
	console.log(element)
})

//Use forEach to console.log each number in the numbers array.
numbers.forEach((element) => {
	console.log(element)

//Use map to create a new array by changing each country to uppercase in the countries array.
const countriesToUpperCase = countries.map((element) => {
	return element.toUpperCase();
	console.log(countriesToUpperCase);
})

//Use map to create a new array by changing each number to square in the numbers array
const numbersSquare = numbers.map((number) => number ** 2);
	console.log(numbersSquare);

//Use map to create an array of countries length from countries array.
const countriesLength = countries.map((country) => country.length);
	console.log(countriesLength);

//Use map to change to each name to uppercase in the names array
const namesToUpperCase = names.map((name) => name.toUpperCase());
	console.log(namesToUpperCase);

//Use filter to filter out countries containing land.
const countriesContainingLand = countries.filter((country) => country.includes('land'));
	console.log(countriesContainingLand);

//Use filter to filter out countries having six character.
const countriesWithSix = countries.filter((country) => country.length === 6);
	console.log(countriesWithSix);

