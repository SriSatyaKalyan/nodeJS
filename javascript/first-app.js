// let name = "Max";
// let age = 29;
let hasHobbies = true;

//normal function
function summarizeUser(name, age, hasHobbies) {
	return (
		"Name is " +
		name +
		" aged " +
		age +
		". Does he have any hobbies?: " +
		hasHobbies
	);
}

// console.log(summarizeUser(name, age, hasHobbies));

//arrow function
const summarizeUserArrow = (name, age, hasHobbies) => {
	return (
		"Name is " +
		name +
		" aged " +
		age +
		". Does he have any hobbies?: " +
		hasHobbies
	);
};
// console.log(summarizeUserArrow(name, age, hasHobbies));

//objects, properties & methods
const person = {
	name: "Max",
	age: 29,
	greet: () => {
		console.log("Hi! This is " + name + " aged " + age);
	},
};

// person.greet();

//arrays
const hobbies = ["Sports", "Cooking", "Music"];
// for (let hobby of hobbies) {
// 	console.log(hobby);
// }
// console.log(
// 	hobbies.map((hobby) => {
// 		return "Hobby: " + hobby;
// 	})
// );
// console.log(hobbies);

//spread operator
const copiedArr = hobbies.slice();
// console.log(copiedArr);

const copyArr = [...hobbies, "Programming"];
// console.log(copyArr);

//rest operator
const toArray = (...args) => {
	return args;
};
// console.log(toArray(1, 2, 3, 4));

//destructuring
const printName = ({ name }) => {
	console.log("The name is: ", name);
};
printName(person);

const { name, age } = person;
console.log(name, age);

const [hob1, hob2, hob3] = hobbies;
console.log(hob1, hob2, hob3);

setTimeout(() => {
	console.log("Timer is done");
}, 2000);
