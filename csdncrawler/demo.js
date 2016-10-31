var http=require("http");

http.createServer(function(req,res){
	res.writeHeader(200, {'Content-Type':'text/html'});
	res.write("<p>123456</p>");
	res.write("<marquee>123456</marquee>");

}).listen(3000,function(){
	console.log("success");
})