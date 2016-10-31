module.exports=function(app){
	app.get('/query',function(req,res){
		res.send("query?value="+req.query.q);
	})
}