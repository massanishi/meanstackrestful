var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('contactlist', ['contactlist']);


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/contactlist', function(req,res){
	console.log('I received a get request');
	
	db.contactlist.find(function(err, docs){
		console.log(docs);
		res.json(docs);
	})
	// var contactlist = [person1];
	// res.json(contactlist);
})

app.post('/contactlist', function(req, res){
	console.log((req.body));
	db.contactlist.insert(req.body, function(err, docs){
		res.json(docs);
	})
})

app.listen(3000);
console.log('Server running port 3000');