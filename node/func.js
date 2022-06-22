// Normal function statement

function sayHi(){
    console.log("Hello");
};
sayHi();

// Function Expression

var sayBye = function(){
    console.log("Bye");
};
sayBye();

// 2 functions used to print the one value.

function callFunction(fun){
    fun();
}
var sayBye = function(){
    console.log("Bye");
};
callFunction(sayBye);