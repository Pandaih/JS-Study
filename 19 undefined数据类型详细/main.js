// "undefined"这个词的字面意思是"未定义"，需要赋值呢，如果你没赋值，那它还是undefined
var a;
console.log(a);  // undefined

var b= 0;
console.log(b);  // 0

/*
undefined == null 返回 true
undefined是个"假值"
*/
console.log(undefined==null);  // true

if(undefined) {
  // 这里永远都不会执行
}
