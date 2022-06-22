console.log("Hello World!")

// This timeout is used to give the output after that timeout.

setTimeout(function(){
    console.log("3 seconds have passed");
}, 3000);

// time interval will print after a time interval gap
//For this program there is stopping that time we have to use ctrl + c in terminal to stop that process.

var time = 0;
setInterval(function(){
    time += 2;
    console.log(time + " seconds have passed")
}, 2000);

// As per the condition it will stop there.

var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + " seconda have passed")
    if (time > 5){
        clearInterval(timer);
    }
},2000);

// This will tell us in which directory we are there.

console.log(__dirname);

//It gives the filename in which we are there and along with directory

console.log(__filename);