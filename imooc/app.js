var express=require('express');
var port =process.env.PORT||3000; 
var app=express();

app.set('views','./views');
app.set('view engine','jade');
app.listen(port);
console.log('imooc start'+port);

// inde page
app.get('/',function(req,res){
	res.render('index',{title:'电影 首页'});
})
// detail page
app.get('/detail',function(req,res){
	res.render('index',{title:'电影 详情页'});
})
// list page
app.get('/list',function(req,res){
	res.render('index',{title:'电影 列表页'});
})
// admin page
app.get('/admin',function(req,res){
	res.render('index',{title:'电影 后台录入页'});
})
