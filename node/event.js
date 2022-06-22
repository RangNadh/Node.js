var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', "The event was emitted");

var util = require('util');

var Person = function(name){
    this.name = name;
};
util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];
people.forEach(function(Person){
    Person.on('speak', function(mssg){
        console.log(Person.name + " said: " + mssg);
    });
});
james.emit('speak', 'Hello Friends');