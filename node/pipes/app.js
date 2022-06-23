// In this code we wrote the file into the web page using the server and pipes.

var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
  //var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');       //We are writing to the web page directly so we dont need any write stream here.
    myReadStream.pipe(res);      // Here pipe is writing directly to web page.
});
server.listen(3000, '127.0.0.1');
console.log('Hey, now listening to port 3000');
