// 观察者模式
interface IObserver{
      update(o:any):void;
}
class ConObserver implements  IObserver{
    data:any
    constructor(){
    }
    update(o :any) {
        console.log("接收到了通知-->",o)
        this.data  = o
    }
}

interface ISubject {
    append(o:any):any;
    remove(o:any):any;
    notify(data:any):any;
}
class Subject implements  ISubject{
    observers:any[] = [];
    constructor() {
    }
    append(o:any){
        this.observers.push(o);
    };
    remove(o:any){
        this.observers = this.observers.filter(item => item !== o);
    };
    notify(data:any){
        this.observers.forEach(item => item.update(data));
    };
}

function test(){
    let subject = new Subject();
    let observer1 = new ConObserver();
    let observer2 = new ConObserver();
    var m1 =new Map();
    m1.set('name','zhangsan');
    subject.append(observer1);
    subject.append(observer2);
    subject.notify(m1);
    console.log(observer1.data);
    console.log(observer2.data);
}

 test()
