var http = require('http');
var fs = require("fs")


// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, { 
//         'Content-Type': 'text/plain',

    
//     });
//     let txt=null
//     let data=fs.readFileSync('input.txt')

//     var events = require('events');
//     var emitter = new events.EventEmitter();
//     emitter.on('someEvent', function (arg1, arg2) {
//         console.log('listener1', arg1, arg2);
//     });
//     emitter.on('someEvent', function (arg1, arg2) {
//         console.log('listener2', arg1, arg2);
//     });
//     emitter.emit('someEvent', 'arg1 参数', 'arg2 参数'); 
//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n' + `${data.toString()}`);
// }).listen(8888);

var http = require("http");
var url = require("url");

function start() {
    function onRequest(request, response) {
        response.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        var params = params = url.parse(request.url, true).query;
        response.write("网站名：" + params.name);
        response.write("\n");
        response.write("网站 URL：" + params.url);
        response.end();
       
        // console.log("Request for " + pathname + " received.");
    
        // response.write("Hello World");
        // response.end();
    }



    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
    console.log(__filename, __dirname)
    var setTime= function(){
        console.log("数据")
    }

    // setTimeout(setTime,1000)
    // setInterval(setTime,1000)
    // clearTimeout(setTime,10000)
    process.on('beforeExit', (code) => {
        console.log('进程 beforeExit 事件的代码: ', code);
    });

    process.on('exit', (code) => {
        console.log('进程 exit 事件的代码: ', code);
    });

    console.log('此消息最新显示');

}

exports.start = start;

// 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8888/');