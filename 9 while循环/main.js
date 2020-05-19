/*
while 循环
1. 结构：
while(条件表达式){
  循环体
}
*/

var i= 0;
while (i<9) {
  console.log(i);
  i++;  // 如果没有这个语句，会死循环
}
console.log('loop stopped');

 // 练习 1: 打印人的一生 1-100岁
 var a=1;
 while(a<=100){
   console.log('小妹现在'+a+'岁');
   a++;
 }

 // 练习2：计算1~100の整数和
 var b=1;
 var sum=0;
 while (b<=100) {
   sum+=b;
   b++;
 }
 console.log(sum);

 // 练习3：弹出一个提示框：你爱我吗？如果答案不是我爱你，一直弹出来
 var c=prompt('你爱我吗？');
 while (c !=='我爱你') {
   c=prompt('你爱我吗？');
 }
 alert('我也爱你呀');

/* do while 循环
1. 结构：
do{
  循环体
}while(条件表达式)
2. do while 和 while 的区别：
while 语句先判断表达式的值，值为true时，再执行循环体；
do while 语句先执行循环体，然后再判断表达式的值；
3.大多数情况下，do while 和 while 的结果是一样的。
只有当while的值为false时，结果就不一样。
do while 至少执行一次循环体，但是 while 一次都不执行
*/

// 练习4：do while 打印人的一生
var d= 1;
do{
  console.log('我今年'+d+'岁了');
  d++;
}while (d<=100)

 // 练习5：do while计算1~100の整数和
 var sum2=0;
 var e= 1;
 do{
   sum2 += e;
   e++;
 }
 while(e<=100);
 console.log(sum2);

 // 练习6：do while弹出一个提示框：你爱我吗？如果答案不是我爱你，一直弹出来
do{
  var f=prompt('你爱我吗？');
}while (c !=='我爱你');
alert('我也爱你呀');
