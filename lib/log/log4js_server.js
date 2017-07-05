// file: server.js
var log4js = require('log4js');
var log4js_config = require('./log4js_config.json'); // 配置文件
var express = require('express');
var app = express();

log4js.configure(log4js_config);

var log_access = log4js.getLogger('log_access');

log_access.info('info');
log_access.trace('trace');
log_access.debug('debug');
log_access.error('error');

app.use(log4js.connectLogger(log4js.getLogger('log_access'),{'level': log4js.levels.log_access }));
app.get('/', function(req,res) {
  res.send('logjs4配置');
});
app.listen(5000);

/*levels: 日志的分级。等级从低到高： ALL TRACE DEBUG INFO WARN ERROR FATAL MARK OFF */