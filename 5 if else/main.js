var isAdmin = !!0 ;
if(isAdmin){
  console.log('他是管理员');
}
  else {
    console.log('他不是管理员');
  }

var c=!!function(){
};
console.log(c);  // true
/*
只有 !!0 !!null !!undefined !!NaN !!'' 的布尔值为false，其他都为true
例如：!!'0'  !！-1  !!function(){}  !![] !!{} 都为true
*/

/*多分支语句
if(表达式1){
  // 语句 1
}else if (表达式2) {
  // 语句 2
}else if (表达式3) {
  // 语句 3
}else{
  // 最后的语句
}
*/

/* 三元运算符 ？：
1. 结构 ：条件表达式 ？ 表达式 1 ：表达式 2
2. 执行 ：如果条件表达式为真，则返回 表达式 1；为假，则返回表达式 2
*/

// 练习 1
var age=prompt('请输入你的年龄：');
if(age>18){
  alert('可以进入网吧~');
}else {
  alert('小孩子好好学习');
}

// 练习2 ：判断闰年
var num1= prompt('请输入查询的年份：');
if(num1%4==0 && num1 % 100 !=0  || num1 % 400==0){
  alert(num1+'是闰年');
}
else {
  alert(num1+'是平年');
}

// 练习3 ：判断是否中奖
var num2= prompt('请输入你的姓名：');
if(num2=='刘德华'){
  alert('恭喜你，中了五块钱！');
}
else {
  alert('再接再厉！');
}

// 练习4：判断成绩
var grade=prompt('请输入你的成绩：');
if(grade>=90){
  alert('你的成绩等级为：A');
}else if (grade>=80) {
  alert('你的成绩等级为：B');
}else if (grade>=70) {
  alert('你的成绩等级为：C');
}else if (grade>=60) {
  alert('你的成绩等级为：D');
}else {
  alert('你的成绩等级为：F');
}

练习5：三元运算符 ？：
var sanyuan= 6;
var result= sanyuan < 5 ? '这是表达式1'  : '这是表达式2';
console.log(result);

// 练习6：三元运算符自动补 0
var num3 = prompt('请输入一个0-59之间的数字');
var result= num3<=9 ? '0' +num3 : num3;
alert('你输入的数字是：'+ result);
