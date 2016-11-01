var setting=require('../setting.js');
var mongodb=require('mongodb');
var Db=mongodb.Db,
	Connection=mongodb.Connection
	Server=mongodb.Server;

module.exports=new Db(setting.db,new Server(setting.host,setting.port))