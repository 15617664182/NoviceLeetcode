let activeEffect
let effectTack =[];
const effect = (fn:Function)=>{
    const effectFn = ()=>{
        activeEffect = effectFn;
        effectTack.push(activeEffect)
        return fn();
    }
    effectFn()
    return effectFn;
}
var targetMap = new WeakMap();
// 收集依赖
// 他会将函数加入到targetMap中
const track = (target:object,key:string | symbol) =>{
        if(!activeEffect) return
        let depMap =  targetMap.get(target);
        if(!depMap){
            targetMap.set(target,(depMap = new Map()))
        }
        let deps = depMap.get(key)
        if(!deps){
            depMap.set(key,(deps = new Set()))
        }
        deps.add(activeEffect)
}
// 触发依赖
const trigger = (target:object,key:string | symbol)=>{
        let depMap = targetMap.get(target)
        if(!depMap)return
        let deps =  depMap.get(key)
        if(!deps)return
        const depsSet  = new Set(deps);
        if(depsSet && depsSet.size>0){
            depsSet.forEach((fn:Function) =>fn())
        }
}
const refactive = (target:object)=>{
      const proxy = new Proxy(target,{
            get(target: object, key: string | symbol, receiver: object): any {
                track(target,key);
                return Reflect.get(target,key)
            },
            set(target: object, key: string | symbol, newValue: object, receiver: object):any {
                const result = Reflect.set(target,key,newValue,receiver)
                if(result){
                    trigger(target,key)
                }
                return result;
            }
      });
    return proxy
}
