
var arr = [1, 2, 3, 4, 5, 6]
// arr.forEach((el) => {
//   if (el == 1) return false
//   console.log(el)
// })
try {
  arr.forEach((el) => {
    if (el == 1) throw new Error("错误")
    console.log(el)
  })
} catch (err) {}
