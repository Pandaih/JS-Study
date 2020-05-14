 /*
为什么会有null这种类型？
因为有时候我们需要明确的说明一个量只有壳没有瓤，也就是空
*/

/*
使用
null只有在需要明确指定（或清空）一个量时才使用，如删除用户介绍：user.intro = null。
null只能手动设置，JS本身不会将任何量的默认值设为null。
*/

console.log(typeof null);  // object

// null是个"假值"
if(null) {
  // 这里永远都不会执行
}


console.log('null'+11);  // null11
console.log(null+11);   //  11
