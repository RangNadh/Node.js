var http = require('http');

var fs = require('fs');

var server = http.createServer(function(req, res){
    if(req.url == '/'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/home.html').pipe(res);
    }
    if(req.url == '/about'){
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(__dirname + '/about.html').pipe(res);
    }
});