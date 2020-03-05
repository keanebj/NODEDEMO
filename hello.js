function Hello(){
    var name;
    this.setName=function(setName){
        name=setName
    }
    this.sayName=function(){
        console.log("hello",name)
    }

}
module.exports=Hello