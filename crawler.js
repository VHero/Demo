var http=require('http');
var url="http://www.imooc.com/learn/348";

var cheerio=require('cheerio');
function filterChapters(html){
	var $=cheerio.load(html);
	var chapters=$(".chapter");

	var courseData=[];
	chapters.each(function(item){
		var chapter=$(this);
		var charpterTitle=chapter.find("strong").text();
		var videos=chapter.find(".video").children("li");

		var charpterData={
			chapterTitle:charpterTitle,
			videos:[]
		}

		videos.each(function(item){
			var video=$(this).find(".studyvideo");
			var videoTitle=video.text();
			var id=video.attr("href").split("video/")[1];
			charpterData.videos.push({
				title:videoTitle,
				id:id
			});
		})
	courseData.push(charpterData);
	})
	return courseData;
}
function printCourseInfo(courseData){
	courseData.forEach(function(item){
		var charpterTitle=item.charpterTitle;
		console.log(charpterTitle+'\n');
		item.videos.forEach(function(video){
			console.log('【'+video.id+'】'+video.title+'\n');
		}) 
	})
}
http.get(url,function(res){
	var html="";
	res.on('data',function(data){
		html+=data;
	})
	res.on('end',function(){
		var courseData=filterChapters(html);
		printCourseInfo(courseData);
	})
}).on('error',function(){
	console.log("获取数据出错");
})