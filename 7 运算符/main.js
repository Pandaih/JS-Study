/*
前置加1和后置加1的区别：但在下面情况，效果就不一样了。
1. ++1 ：先自增，后返回值
*/
var q= 10;
console.log(++q + 10);  // 21
/*
2. 1++ ：先返回值，后自增
*/
var p= 10;
console.log(p++ + 10);  // 20: p++是一个表达式，先返回原来的值10，完成了10+10 ，再自增
console.log(p);   // 11

// 单独使用的时候，效果是一样的
var  loginCount = 1;
loginCount++;   // 递增运算符++、--需要和变量搭配使用，不可以++1...
loginCount++;
console.log('loginCount:',loginCount);// 3

var  logotCount = 3;
logotCount--;
logotCount--;
console.log('logotCount:',logotCount);  // 1

console.log('1>2:',1>2);
console.log('1<2:',1<2);
console.log('1>=2:',1>=2);
console.log('1<=2:',1<=2);
console.log('1'==1);
console.log('322<50:','322'<'50');


var 他是制单人 = true,
    他是审核员 = false;
if(他是制单人 || 他是审核员) {
  console.log('转账成功');
} else {
  console.log('转账失败，权限不足');
}

//浮点数：
// 1. 不可以直接用浮点数运算
console.log(0.1+0.2);  // 0.30000000000000004不等于我们理解的 0.3
// 2. 不可以直接拿浮点数进行比较
console.log(0.1+0.2==0.3);  // false

/*
1. 运算符具有优先级
2. 表达式是先把有右边的算好，传给左边。和我们平时理解的1+1=2不一样
    eg：var num1= 1 + 1;  先把右边的1+1算好，再把2的值返回给num1
*/
