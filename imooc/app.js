var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

console.log('imooc start'+port);


/*app.get('/',function(req,res){
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
})*/

// index page
app.get('/', function(req, res){
	res.render('index', {
		title:'imovie首页', 
		movies: [{
			title: '机械战警', 
			_id: 1, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警', 
			_id: 2, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警', 
			_id: 3, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警', 
			_id: 4, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警', 
			_id: 5, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		},{
			title: '机械战警', 
			_id: 6, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5'
		}]
	})
})

//detail page
app.get('/movie/:id', function(req, res){
	res.render('detail', {
		title:'imovie详情页',
		movie: {
			director: '何塞·帕蒂利亚',
			country: '米国',
			title: '机械战警',
			year: 2014, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '《机器战警》，又称《机械战警》《铁甲威龙》。电影描述的故事发生在2020年间的底特律市，犯罪十分严重，该市的警务工作由1家都市发展公司整个承包下来。该公司的副总裁首先设计了1种巨无霸的机器人警察，可是在展示时出了毛病，新进的官员逮住了这个机会，向董事长建议他的机器战警计划——把1个因公殉职但脑部功能沿存的警察改装上机器人的身体，变成1个具有超强战斗力的特级警察。'
		}
	})
})

//list page
app.get('/admin/list', function(req, res){
	res.render('list', {
		title:'imovie列表页',
		movies: [{
			title: '机械战警',
			_id: 1,
			director: '何塞·帕蒂利亚',
			country: '米国',
			title: '机械战警',
			year: 2014, 
			poster: 'http://r3.ykimg.com/05160000530EEB63675839160D0B79D5',
			language: '英语',
			flash: 'http://player.youku.com/player.php/sid/XNjA1Njc0NTUy/v.swf',
			summary: '《机器战警》，又称《机械战警》《铁甲威龙》。电影描述的故事发生在2020年间的底特律市，犯罪十分严重，该市的警务工作由1家都市发展公司整个承包下来。该公司的副总裁首先设计了1种巨无霸的机器人警察，可是在展示时出了毛病，新进的官员逮住了这个机会，向董事长建议他的机器战警计划——把1个因公殉职但脑部功能沿存的警察改装上机器人的身体，变成1个具有超强战斗力的特级警察。'
		}]
	})
})
//admin page
app.get('/admin/movie', function(req, res){
	res.render('admin', {
		title:'imovie后台录入页',
		movie: {
			title: '',
			director: '', 
			country: '',
			year: '',
			poster: '',
			flash: '',
			summary: '',
			language: ''
		}
	})
})