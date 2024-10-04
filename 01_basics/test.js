// function printHello(){
//     for(let i = 0; i<100; i++){
//         console.log("Hello")
//     }
// }

// function printWorld(){
//     for(let i = 0; i<100; i++){
//         console.log("World")
//     }
// }

// printHello();
// printWorld();

const fs = require("fs")

fs.readFile("a.txt", "utf-8", function(err, data) {
    console.log(data);
});

console.log("hi there from here!")