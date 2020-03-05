
var fs = require("fs")
// 异步打开文件
// console.log("准备打开文件！");
// fs.open('input.txt', 'r+', function (err, fd) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("文件打开成功！",fd.toString());
// });

// fs.stat('input.txt', function (err, stats) {
//     console.log(stats,stats.isFile());         //true
// })



// console.log("准备写入文件");
// fs.writeFile('input.txt', '我是通 过fs.writeFile 写入文件的内容', function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log("异步读取文件数据: " + data.toString());
//     });
// });


var buf = new Buffer.alloc(1024,"utf8");

console.log("准备打开已存在的文件！");
fs.open('input.txt', 'r+', function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功！");
    console.log("准备读取文件：");
    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.log(err);
        }
        console.log(bytes + "  字节被读取");

        // 仅输出读取的字节
        if (bytes > 0) {
            console.log(buf.slice(0, bytes).toString());
        }
    });
});