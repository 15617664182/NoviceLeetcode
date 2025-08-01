function Parent() {
    this.name = "父亲的名字"
    this.like = ["唱歌","跳舞","打篮球"]
}
Parent.prototype.sayName = function() {
    console.log(this.name)
}

// 第一 原型链继承  ***重点***
// 弊端：1. 引用类型属性会造成所有子类共享属性。
//      2. 在创建Child的子类的时候,无法向父类构造函数传参

 function Child() {}
Child.prototype = new Parent()

var child = new Child()
var child2 = new Child()
child.name = "child1"
child2.name = "child2"
// 此处修改了 原型上的属性，会导致  child2.like 也变成了["唱歌","跳舞","打篮球","踢足球"]
// child.like.push("踢足球")


// console.log("child====",child.like)
// console.log("child2====",child2.like)
 // 第二 构造函数继承   ***重点***
//  解决了  原型继承时引用类型属性共享的问题，无法向父类构造函数传参的问题
//  弊端：1.  无法继承父类原型上的方法，无法实现方法的复用


function Parent2(){
    this.name = '父亲2'
    this.like = ["唱歌","跳舞","打篮球"]
}
Parent2.prototype.sayName = function (){
    console.log("构造函数继承")
}
function Son() {
    Parent2.call(this)
}
var son1 = new Son()
var son2 = new Son()
son1.like.push("踢足球")
// son1.sayName() //son1.sayName is not a function
// console.log("son1====",son1.like)
// console.log("son2====",son2.like)

//  第三 组合继承    ***重点***
//  使用原型链继承，构造函数继承，解决原型链继承时无法向父类构造函数传参的问题
//  本质： 使用构造函数继承实例属性  使用原型链继承原型上的方法和属性
//  缺点： 调用了两次 构造函数  第一次为 创建子类的实例属性  第二次为创建原型链
function A(name,like){
    this.name = name
    this.like = like
}
A.prototype.sayName = function (){
    console.log("组合式继承的方法",this.name)
}
function B(name,like){
    A.call(this,name,like)
}
B.prototype = new A()
 var b = new B("S1",['唱','跳','rap'])
// b.sayName()
var b2 = new B("S2",['唱歌','跳舞','打篮球'])
// b2.sayName()
// console.log("b====",b.like)
// console.log("b2====",b2.like)
 // 第四 原型式继承
function obj(target){
    function O(){ }
    O.prototype = target
    return new O();
}
var person={
    name:"小李",
    friends:["小a","小b"],
    sayname:function(){
        console.log(this.name)
    }
}
var person={
    name:"小赵",
    friends:["小米","小兰"],
    sayname:function(){
        console.log(this.name)
    }
}

   var p1 = obj(person)
   var p2 = obj(person)

 // 第五 寄生式继承
 // 第六 寄生组合式继承
 // 第七 es6类继承
