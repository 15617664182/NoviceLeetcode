// 睡眠函数
// 请你编写一个异步函数，它接收一个正整数参数 millis ，并休眠 millis 毫秒。要求此函数可以解析任何值。

// 实际打印会有误差
async function sleep(millis:number):Promise<number> {
     return new Promise((resolve,reject):void=>{
       var res:number =  new Date().getTime()
               setTimeout(():void=>{
                   resolve(res)
               },millis)
           })
}
sleep(100).then((t:number):void=>{
    console.log(new Date().getTime()-t )
})
