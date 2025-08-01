//
// @ts-ignore
Array.prototype.snail = function(rowsCount:number, colsCount:number):any {
    // 横五  竖四
    var res:[][] = []
    if(this.length && rowsCount*colsCount === this.length ){
        for (var i =0;i<rowsCount;i++){
            for (var j =0;j<colsCount;j++){
                //
                if(i%2===0){// 偶数行
                   // res[i][j] = this.slice()
                }else{

                }
            }
        }
    }

}
