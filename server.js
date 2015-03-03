var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());

app.get("/",function(req, res){
	fs.readFile("location.txt", function(err,data){
		if(err) throw err;
		res.send(data.toString('ascii'));
	});
});

app.post("/",function(req, res){
	console.log(req.body.dude);
	var body = '';
	fs.writeFile("location.txt", req.body.dude,function(err,data){
		if(err) throw err;
	});
});

app.listen(3000);
