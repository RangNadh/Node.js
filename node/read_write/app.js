var fs = require('fs');

//var readMe  = fs.readFileSync('readMe.txt', 'utf-8');
//fs.writeFileSync('writeMe.txt', readMe);

// Asynchronous method

fs.readFile('readMe.txt', 'utf-8', function(err, data){
 fs.writeFile('writeMe.txt', data);
 console.log(data);
});
