
var buffer1 = Buffer.from('ABCDEF99');
var buffer2 = Buffer.from('ABCDEF98765');
let result = buffer1.compare(buffer2) 
if(result){
    console.log(buffer1.toString()+"在"+buffer2.toString()+"之前")
}else {
    console.log(buffer1.toString() + "在" + buffer2.toString() + "之后")
}
console.log(buffer1.compare(buffer2))

