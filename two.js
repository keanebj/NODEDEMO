var BB = require("./index")
BB.a()

var hello = require("./hello")
xiao = new hello()
xiao.setName("xiaohang")
xiao.sayName()
function say(word) {
    console.log(word);
}

function execute(someFunction, value) {
    someFunction(value);
}

execute(say, "Hello");