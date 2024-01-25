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
countriesToUpperCase = countries.map((element) => {
	return element.toUpperCase();
})


