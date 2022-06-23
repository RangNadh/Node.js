var fs = require('fs');

//var readMe  = fs.readFileSync('readMe.txt', 'utf-8');
//fs.writeFileSync('writeMe.txt', readMe);

// Asynchronous method

fs.readFile('readMe.txt', 'utf8', function(err, data){
    if (err) console.log(err);
    fs.writeFile('writeMe.txt', data, (err) => {
        if (err) console.log(err);
    });
});
