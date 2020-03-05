exports.a=function() {
    console.log("hello world")
} 
var server = require("./server");
var router = require("./router");

server.start(router.route);
