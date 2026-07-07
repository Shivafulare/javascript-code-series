// let name = "Hitesh"
// let age = 18

// number => 2 to power 53 
// bigint
// string=> ""
// boolean => true/false
// null => standalone value 
// undefined=> 
// symbol => unique 

// object

// console.log(typeof "hitesh");
// console.log(typeof null);

const name = " America"
const repoCount = 50

console.log(`Hello my name is ${name} and my rapo count is ${repoCount}`)

const gamename= new String('pop-up-down')
console.log(gamename[3]);

console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf(2));

const newString= gamename.substring(0,4)
console.log(newString);

const anotherString= gamename.slice(-8,4)
console.log(anotherString);

const newStringOne = "  america   "
console.log(newStringOne.trim());

const url = "https://america.com/hitesh%20ramanand"

console.log(url.replace('%20', "--"))

console.log(url.includes('america'));

console.log(gamename.split("-"));
