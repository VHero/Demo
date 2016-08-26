var express=require('express');
var http=require('http');
var app=express();

app.all("*", function(request, response, next) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  next();
});

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about/:who", function(req, res) {
  res.end("Hello, " + req.params.who + ".");
});

app.get("*", function(request, response) {
  response.end("404!");
});

http.createServer(app).listen(1337,function(){
	console.log("Server Start")
});