module.exports=function(app){
	app.get('/include',function(req,res){
		res.render('include');
	})
}