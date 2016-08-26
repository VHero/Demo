var express = require('express');
var app = express();

// 设定port变量，意为访问端口 process.env.PORT系统默认的端口
app.set('port',process.env.PORT||3000);
