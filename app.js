var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
    res.send('This is the homepage.');
    //res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req,res){
    res.send('This is the contactpage.');
});

app.get('/profile/:name', function(req,res){
    var data = {age: 29, job: 'software'};
    res.render('profile', {person: req.params.name, data: data});
});
app.listen(3000);