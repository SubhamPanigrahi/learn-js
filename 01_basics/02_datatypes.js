// "use strict";
/* 
    This statement instructs the runtime environment to treat all JS code as newer version.
    After writing this, you wont be allowed to use undeclared variables.
    for eg :

    "use strict"
    x = 3.14 -> // ReferenceError: x is not defined
*/


// alert("Hello!") --> ReferenceError: alert is not defined
/* 
    this gives error, because we are using nodejs and not a browser. 
    alert(X) in browser brings in a pop up with the X on the window. 

*/

console.log(3
    +
    3
);

// The above code words, but code readability is really bad here -> so should be avoided.



// ECMAScript -> The specification (spec) that defines the standards for JS.



let name = "Subham"
let age = 18
let isLoggedIn = false

// How many dataTypes are there ? 
// number  -> has some range - if required, we can use something like bigInt
// string -> "string" or 'string' <- both are acceptable but use "".
// boolean -> true/false

// null -> its a type / standalone value. {typeof null}
// undefined -> value is not assigned
// symbol -> generally used in ReactJS; unique


// object 

console.log(typeof undefined); // undefined
console.log(typeof null); // object

