var counter = function(arr){
    return "There are " + arr.length + " elements in the array";
};

var adder = function(a, b){
    // This `` is used to concatenate directly without using + .
    return `The sum of 2 numbers is ${a + b}`;
}

var pi = 3.142;

//This will indicate that counter is belongs to counter function
//module.exports.counter = counter;
//module.exports.adder = adder;
//module.exports.pi = pi;
// Instead of using like this we can directly export from the var. like module.exports.counter = function

// We can export like this also simllar to literal notation

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};