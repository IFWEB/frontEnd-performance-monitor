/*
	log4js.js： log4js日志模块，需引入
	logger： { fun } 获取日志实例方法，传入1个参数： 日志名称
	levels: 日志的分级，等级从低到高： ALL TRACE DEBUG INFO WARN ERROR FATAL MARK OFF ，譬如设置 login: INFO 时，TRACE DEBUG 类型的日志输入不会输出    
*/

var log4js = require('./log4js.js'),
	express = require('express'),
	app = express();

var loginLogger = log4js.logger('login');
var registerLogger = log4js.logger('register');

loginLogger.info('1111');
loginLogger.error('aaaa');

registerLogger.info('2222');
registerLogger.error('bbbb');

app.get('/', function(req,res) {
	res.send('log4js日志测试');
});

app.listen(5000);