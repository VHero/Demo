var express = require("express");
var http = require("http");

var app = express();


app.use('/admin',function(request, response, next) {
    response.writeHead(200, { 'Content-type': 'text/plain' });
        response.end('Wellcome to Admin');
})
app.use('/home',function(request, response, next) {
    response.writeHead(200, { 'Content-type': 'text/plain' });
        response.end('Wellcome to Home');
})
app.use(function(request, response) {
    response.writeHead(404, { 'Content-type': 'text/plain' });
    response.end('404 Error');
})
http.createServer(app).listen(1337,function(){
	console.log("Server Start");
});
