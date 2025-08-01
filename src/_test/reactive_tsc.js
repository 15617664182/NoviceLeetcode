var activeEffect;
var effectTack = [];
var effect = function (fn) {
    var effectFn = function () {
        activeEffect = effectFn;
        effectTack.push(activeEffect);
        return fn();
    };
    effectFn();
    return effectFn;
};
var targetMap = new WeakMap();
var track = function (target, key) {
    if (!activeEffect)
        return;
    var depMap = targetMap.get(target);
    if (!depMap) {
        targetMap.set(target, (depMap = new Map()));
    }
    var deps = depMap.get(key);
    if (!deps) {
        depMap.set(key, (deps = new Set()));
    }
    deps.add(activeEffect);
};
var trigger = function (target, key) {
    var depMap = targetMap.get(target);
    if (!depMap)
        return;
    var deps = depMap.get(key);
    if (!deps)
        return;
    var depsSet = new Set(deps);
    if (depsSet && depsSet.size > 0) {
        depsSet.forEach(function (fn) { return fn(); });
    }
};
var refactive = function (target) {
    var proxy = new Proxy(target, {
        get: function (target, key, receiver) {
            track(target, key);
            return Reflect.get(target, key);
        },
        set: function (target, key, newValue, receiver) {
            var result = Reflect.set(target, key, newValue, receiver);
            if (result) {
                trigger(target, key);
            }
            return result;
        }
    });
    return proxy;
};
