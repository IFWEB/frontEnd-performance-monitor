/*

  log4js： log4js日志模块，需引入
  log4js_config.json： log4js日志模板的配置文件
  logger: { fun } 对外暴露日志实例接口，参数日志名

  log4js_config.json:
    levels: 日志的分级，等级从低到高： ALL TRACE DEBUG INFO WARN ERROR FATAL MARK OFF ，譬如设置 login: INFO 时，TRACE DEBUG 类型的日志输入不会输出;

*/

var log4js = require('log4js'),
    config = require('./log4js_config.json');

log4js.configure(config);

exports.logger=function(name){
    var logger = log4js.getLogger(name);
    return logger;
}



