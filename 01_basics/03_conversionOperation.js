let score = 33

console.log(typeof score); // number
console.log(typeof(score)); // number
// both can be used. with / without paranthesis

console.log("-----------------------------------------------");

// Input taken as string
let scoreInParanthesis = "33"
console.log(typeof scoreInParanthesis); // string

console.log("-----------------------------------------------");

// convert string to number
let valueInNumber = Number(scoreInParanthesis);
console.log(typeof valueInNumber);

console.log("-----------------------------------------------");

// but its not safe!!!
let a = "33abc";
a = Number(a);
console.log(typeof(a)); // number
console.log(a); // NaN <- handle with care

console.log("-----------------------------------------------");

// whatif we try to convert null
let b = null;
b = Number(b);
console.log(typeof(b)); // number
console.log(b); // 0


console.log("-----------------------------------------------");

// whatif we try to convert null
let c = undefined;
c = Number(c);
console.log(typeof(c)); // number
console.log(c); // NaN

console.log("-----------------------------------------------");

// let a = true -> (number, 1);
// let a = "subham" -> (number, NaN);

// Truthy and Falsy value ->
// 1 -> true; 0 -> false;
// "" -> false; "something" -> true;

let num = 33;
let stringNum = String(num);
console.log(typeof(stringNum)); // number