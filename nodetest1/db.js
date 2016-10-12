var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongodb.Db('mydb', server, { safe: true });
db.open(function(err, db) {
    if (!err) {
        console.log('connect');
        // db.collection("users",function(err,collection){
        // 	collection.find().toArray(function(err,docs){
        // 		console.log(docs);
        // 	})
        // })
        // if (!err) {
        //         db.collection("users", function(err, collection) {
        //             collection.insert({ username: "盼盼", firstname: "李" }, function(err, docs) {
        //                 console.log(docs);
        //                 db.close();
        //             });
        //         });
        //     } else {
        //         console.log(err);
        //     }
    } else {
        console.log(err);
    }
});
