// 1. 把其他类型的数据转换为字符串类型有三种方法：.toString()、String()、+号(隐式转换)
var a= 123;
var b= a.toString();
console.log(typeof b);  // string

var c= true;
console.log(typeof String(c));   // string

console.log(a+'');

/*
2. 把其他类型的数据转换为Boolean类型  Boolean()函数
代表空的、否定的值会转换成false，其他转换为true
*/
console.log(Boolean(''));  // false
console.log(Boolean(NaN));  // false
console.log(Boolean(null));  // false
console.log(Boolean(0));   // false
console.log(Boolean(undefined));  // false
console.log(Boolean('hah'));  // true
console.log(Boolean(123));    // true

/*
相关练习：
1.计算年龄的弹出框
*/
var r= prompt('你是在哪一年出生的呢？');   // 用户输入
var t= 2020- r;   // 系统内部处理，r取过来的值是string，这里有一个隐式转换。变成了数字型的
alert('你今年'+t+'岁了~');   // 弹出提示框

/*
2.简单加法器
*/
var x= prompt('请输入第一个数x');
var y= prompt('请输入第二个数y');
var z= parseFloat(x) + parseFloat(y);  // 注意数据类型转换
alert('x+y= '+z);

/*
3.依次获取用户输入的信息，并以弹出框列出信息
*/
var a= prompt('请输入你的姓名：');
var o= prompt('年龄');
var p= prompt('性别');
alert('你的姓名是:'+a +'\n你的年龄是:'+ o +'\n你的性别是:'+p);
