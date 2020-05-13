/*
如何定义一段字符串？
很简单，用引号包起来就好
"yo" 双引号  'yo' 单引号
在JS中单双引号没有任何区别
*/
 console.log("yo" === 'yo'); // true
 // `我是个模板字符串，我叫 ${name} `; 使用`（反引号）定义模板字符串，可以传入变量，还可以直接断行


//常用方法 1：获得字符串中的某一个字符
console.log('hello' .charAt(0)); // 程序员是从0开始数的 ，结果：h
console.log('ha'[1]);   //a
// 2 : 检查一段字符是否包含另一段字符
console.log('我是胖胖'.includes('胖胖'));  // true
console.log('我是胖胖'.includes('哈哈'));  // false
// 3 : 用字符串将字符串分割为数组
console.log('花花→_→拴蛋→_→背背'.split('→_→')); // ["花花", "拴蛋", "背背"]
// 4 : 连接字符串
console.log('hello'.concat(' world ',' tomorrow'));  // hello world  tomorrow,依次连接传入的字符，传参数量不限
// 5 : 截取字符串
var str = '王花花和小熊跳舞跳呀跳呀一二一';
console.log(str.slice(3, 8)); // "和小熊跳舞"，第一个数字3传参为开始索引，第二个数字8传参为结束索引
str.slice(3); // "和小熊跳舞跳呀跳呀一二一"，若省略第二个传参将会截取至最后一个字符
// 6 ：.trim 移除两头的空格
console.log('    ha  '.trim());

 // 注意点：
 // 1.不加引号的字符会被JS认为是变量，所以字符串一定是加引号的
 // var greet = yo; // yo is not defined
 var greet = 'yo';  //正确写法
 // 2 . 单双引号定义的字符串不可直接断行，断行可以需使用加号连接
 var x ='他好'+
       '我也好';
console.log(x);
// 3 .字符串与数字运算时需要格外小心
/*
第一种: 加号“+”：
"12" + 12 = 12 + "12" = "1212"
第二种，第一个（无论是字串还是数字）前面有符号：
+"12" + 12 = +12 + 12 = 24 	因为"12"前面有+号（或者叫连字符），+号前面没有别的东西了，所以就判断它表示的是 一个“正”数，进而将“12”转换成了数字。
第三种，其他运算符：
"12" - 12 = 0   "12" * 12 = 144   "12" / 12 = 1
其他运算符仅此一种作用，因而当字串遇到它们时，就自转为数字了。
*/
console.log('12'+12);  //string
console.log(+'12'+12); // number
console.log(12-'12');  // number 
