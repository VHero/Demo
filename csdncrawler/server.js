// 一些依赖库
var http = require("http"),
    url = require("url"),
    superagent = require("superagent"),
    cheerio = require("cheerio"),
    async = require("async"),
    eventproxy = require('eventproxy');
 
var ep = new eventproxy(),
    urlsArray = [], //存放爬取网址
    pageUrls = [],  //存放收集文章页面网站
    pageNum = 20,  //要爬取文章的页数
    catchDate = []; //爬取的内容
for(var i=1 ; i<= 5 ; i++){
    pageUrls.push('https://cnodejs.org/?tab=all&page='+i);
}
// 处理函数
function personInfo(url){
    superagent.get(url).end(function(err,res){
        if(err){
             // console.log(err);
            return ;
        }
        var $=cheerio.load(res.text);
        var info={};
        var title=$(".topic_full_title").text();
        info.title=title;
        catchDate.push(info);
    })
}
// 主start程序
function start(){
    function onRequest(req, res){  
        // 轮询 所有文章列表页
        pageUrls.forEach(function(pageUrl){
            superagent.get(pageUrl)
                .end(function(err,pres){
              // pres.text 里面存储着请求返回的 html 内容，将它传给 cheerio.load 之后
              // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
              // 剩下就都是利用$ 使用 jquery 的语法了
              var $ = cheerio.load(pres.text);
              var curPageUrls = $('.topic_title');
 
              for(var i = 0 ; i < curPageUrls.length ; i++){
                var articleUrl = "https://cnodejs.org"+curPageUrls.eq(i).attr('href');
                // console.log(articleUrl);
                urlsArray.push(articleUrl);
                // 相当于一个计数器
                ep.emit('BlogArticleHtml', articleUrl);
              }
            });
        });
 
        ep.after('BlogArticleHtml', pageUrls.length*20 ,function(articleUrls){
        		// 当所有 'BlogArticleHtml' 事件完成后的回调触发下面事件
             var curCount = 0;
             var reptileMove = function(url,callback){
             //延迟毫秒数
             var delay = parseInt((Math.random() * 30000000) % 1000, 10);
             curCount++;
             console.log('现在的并发数是', curCount, '，正在抓取的是', url, '，耗时' + delay + '毫秒');    
             superagent.get(url).end(function(err,sres){
             // var $ = cheerio.load(sres.text);
             // personInfo(url);
            // var title=$(".topic_full_title").html();
            // res.write("标题"+title);
            // console.log($);
            // 收集数据
            // 拼接URL
            // 具体收集函数
            personInfo(url);
            });
            setTimeout(function() {
                curCount--;
                callback(null,url +'Call back content');
            }, delay);
               /* res.write('<br />');
                res.write('articleUrls.length is'+articleUrls.length+'<br />');
                for(var i=0;i<articleUrls.length;i++){
                	res.write('https://cnodejs.org'+articleUrls[i]+'<br />');
                }*/
            }
            async.mapLimit(articleUrls, 5 ,function (url, callback) {
                reptileMove(url, callback);
            }, function (err,result) {
            // 4000 个 URL 访问完成的回调函数
            // ...
            console.log('final:');
            // console.log(result);
            res.writeHead(200, {'Content-Type': 'text/html'});  
            res.write('<head><meta charset="utf-8"/></head>'); 
            for(var index in catchDate){
                res.write("<p>标题"+catchDate[index].title+"</p>");
            }
        });
        });
    }
    http.createServer(onRequest).listen(3000,function(){
    	console.log("success");
    });
}
exports.start= start;
