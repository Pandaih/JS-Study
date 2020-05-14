// 先在弹出框输入信息，alert再输出一个
// var name = prompt('你叫什么名字？');
// alert('我的名字是  ' +name);

// 声明多个变量
var age= 18,
    address= "广州",
    sex= '男';
    console.log(age);

// 变量声明规则
 // 1. 不能以数字开头
  // var 18age = 0;  // missing variable name
// 2. 遵守驼峰命名法，首字母小写，后面单词首字母大写
var myName= 'hjj';
var myCurrentAge = 18;
// 3. 变量交换，把a给b
var a= 'string';
var b= 20;
b=a;
console.log(b);  // string

/*
课后知识
1. 解释性语言  js：同时进行的，就好像吃火锅，边吃边刷
2. 编译性语言  java：具有先后顺序，只有所有菜都做好了，才能上桌吃饭
3. 标识符： var num1=0; (num1就是标识符)
4. 关键字：js中已经有了特殊意义的，eg：break var...
4. 保留字： 就是保留的关键字
*/
