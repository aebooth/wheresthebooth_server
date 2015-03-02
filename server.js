var fs = require("fs");
var express = require("express");

var app = express();

app.get("/",function(req, res){
	fs.readFile("location.txt", function(err,data){
		if(err) throw err;
		res.send(data.toString('ascii'));
	});
});

app.post("/",function(req, res){
	fs.writeFile("location.txt", req.body ,function(err,data){
		if(err) throw err;
	});
});

app.listen(3000);
