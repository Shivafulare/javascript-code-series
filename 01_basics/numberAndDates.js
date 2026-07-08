const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const othernumber = 23.3456

// console.log(othernumber.toPrecision(3));

const numberOne = 1000000
// console.log(numberOne.toLocaleString('en-IN'))

// +++++++++++++++++++++++++Math++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));  //it will round up value
// console.log(Math.ceil(4.2));   //it will chose top value
// console.log(Math.floor(4.2));   //it will bottom top value
// console.log(Math.min(4,3,6,8));
// console.log(Math.max(4,3,6,8));


console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1))+min)


// Dates

let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

// console.log(typeof(myDate));


// let myCreatedDate = new Date(2026, 1, 23)
// let myCreatedDate = new Date(2026, 1, 23, 5, 3)
// let myCreatedDate = new Date("2026-01-14")
let myCreatedDate = new Date("01-14-2026")
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatenDate.getTime());
// console.log(Math.floor(Date.now()/1000));      // It gives the date till now in milisecond

