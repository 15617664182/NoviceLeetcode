var ConObserver = /** @class */ (function () {
    function ConObserver() {
    }
    ConObserver.prototype.update = function (o) {
        console.log("接收到了通知-->", o);
        this.data = o;
    };
    return ConObserver;
}());
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = [];
    }
    Subject.prototype.append = function (o) {
        this.observers.push(o);
    };
    ;
    Subject.prototype.remove = function (o) {
        this.observers = this.observers.filter(function (item) { return item !== o; });
    };
    ;
    Subject.prototype.notify = function (data) {
        this.observers.forEach(function (item) { return item.update(data); });
    };
    ;
    return Subject;
}());
function test() {
    var subject = new Subject();
    var observer1 = new ConObserver();
    var observer2 = new ConObserver();
    var m1 = new Map();
    m1.set('name', 'zhangsan');
    subject.append(observer1);
    subject.append(observer2);
    subject.notify(m1);
    console.log(observer1.data);
    console.log(observer2.data);
}
test();
