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
