// Lets learn about the ways we can declare constants and varibales in JS

/*
    Lets do it with an example.
    Suppose we want to build an e-commerse and we want to store the user details
    during user registration. So we need to know, how to keep things in memory.

*/

/*
JavaScript has three kinds of variable declarations.

var : Declares a variable, optionally initializing it to a value.
let : Declares a block-scoped, local variable, optionally initializing it to a value.
const : Declares a block-scoped, read-only named constant.
*/


// First, lets try to create an entity which we don't want to change. A CONSTANT!!
const userId = 12345;
/*
userId = 54321 -> TypeError: Assignment to constant variable. 
Re-assignment of a const varibale is not allowed.
*/

let userEmail = "subham@stack.com"
var userPassword = "12345"

/*
    Quick Note :
    Don't use var in JS, because ....

    Variables declared using the var keyword are either globally or functionally scoped, 
    they do not support block-level scope. This means that if a variable is defined in a loop or in an if statement,
    it can be accessed outside the block and accidentally redefined leading to a buggy program.
*/

// You can also declare a varible without specifying either var or let... Like this...
userCity = "Berhampur"

// variables declared but not initislized, when logged, gives "undefined" value
let userState;


// We want to see all these values together. So we'll use a new method.
// It displays the values in form of a table like this.

console.table([userId, userEmail, userPassword, userState])
/*

    ┌─────────┬────────────────────┐
    │ (index) │       Values       │
    ├─────────┼────────────────────┤
    │    0    │       12345        │
    │    1    │ 'subham@stack.com' │
    │    2    │      '12345'       │
    │    3    │     undefined      │
    └─────────┴────────────────────┘

*/



