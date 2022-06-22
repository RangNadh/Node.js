// no need to mention js extension automatically it will take as js file.
// By adding the file we can access the which var we want to use in other file.

// var counter = require("./module")

var stuff = require("./module_patterns");

// Instead of using this 

// console.log(counter(["shuan", "crystal", "ryu"]));

// This type is for multiple functions in one module.
console.log(stuff.counter(["shuan", "crystal", "ryu"]));

console.log(stuff.adder(2,3));

console.log(stuff.pi);

// we can use like this also
console.log(stuff.adder(stuff.pi, 3));