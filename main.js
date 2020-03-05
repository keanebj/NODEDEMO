var fs = require("fs");
var data = '';

// // 创建可读流
var readerStream = fs.createReadStream('input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function (chunk) {
    data += chunk;
});

readerStream.on('end', function () {
    console.log(data);
});

readerStream.on('error', function (err) {
    console.log(err.stack);
});


var writerStream = fs.createWriteStream('ouput.txt');
writerStream.write("修改数据", "UTF8")

// 标记文件末尾
writerStream.end();
// 处理流事件 --> data, end, and error
writerStream.on('end', function (data) {
    console.log("data", data)
});

writerStream.on('error', function (err) {
    console.log(err.stack);
});


// 创建一个可读流
var readerStream = fs.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);


console.log("程序执行完毕");