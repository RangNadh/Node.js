var counter = function(arr){
    return "There are " + arr.length + " elements in the array"
};

// This counter is available now to use externally in any other module.

module.exports = counter;