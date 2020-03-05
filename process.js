
var process = require("process")
process.on('beforeExit', (code) => {
    console.log('进程 beforeExit 事件的代码: ', code);
});

process.on('exit', (code) => {
    console.log('进程 exit 事件的代码: ', code);
});

// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function (val, index, array) {
    console.log(index + ': ' + val);
});

// 获取执行路径
console.log(process.execPath);


// 平台信息
console.log(process.platform);

console.log('此消息最新显示');