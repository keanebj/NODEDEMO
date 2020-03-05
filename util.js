var util = require('util');
function Base() {
    this.name = 'base';
    this.base = 1991;
    this.sayHello = function () {
        console.log('Hello ' + this.name);
    };
}
Base.prototype.showName = function () {
    console.log(this.name);
};
function Sub() {
    this.name = 'sub';
}
util.inherits(Sub, Base);
var objBase = new Base();
objBase.showName();
objBase.sayHello();
console.log(objBase);
var objSub = new Sub();
objSub.showName();
//objSub.sayHello(); 
console.log(objSub); 

function Person() {
    this.name = 'byvoid';
    this.toString = function () {
        return this.name;
    };
}
var obj = new Person();
console.log(util.inspect(obj));
console.log(util.inspect(obj, true)); 

util.isArray([])
// true

console.log(util.isArray(new Array))
// true
console.log(util.isArray({}))
  // false

util.isRegExp(/some regexp/)
// true
util.isRegExp(new RegExp('another regexp'))
// true
util.isRegExp({})

util.isDate(new Date())
// true
util.isDate(Date())
// false (without 'new' returns a String)
util.isDate({})

util.isError(new Error())
// true
util.isError(new TypeError())
// true
util.isError({ name: 'Error', message: 'an error occurred' })
  // false