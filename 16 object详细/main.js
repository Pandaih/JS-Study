/*
对象，容易看内容以及好组织。
eg：
*/
// 第一种写法
var 人名 = '王花花';
var 狗的年龄 = 3;
var 人的年龄 = 20;
var 狗的职业 = '保卫员';
var 人的部门 = '序员鼓励部';
var 狗名 = '李拴蛋';
var 人的职业 = '序员鼓励师';
var 狗的部门 = '序员保卫处';

// 第二种写法
var 花花 = {
  姓名: '王花花',
  年龄: 20,
  职业: '序员鼓励师',
  部门: '序员鼓励部',
};
var 拴蛋 = {
  姓名: '李拴蛋',
  年龄: 3,
  职业: '保卫员',
  部门: '序员保卫处',
};
// 很明显，第二种写法看的更加清楚。

// 1. 定义对象，左边是键(key，或者叫属性名)右边是值(value)，每一组用英文逗号隔开
var duixiang = {
  键1 : '值1',
  键2 : '值2'
}
// 2 . 使用.获取对象中的属性
var o = {
  name : 'hjj',
  age : 18
}
console.log('name:' + o.name);  //name: hjj
// 3. 嵌套对象
var i = {
  name : 'panda',
  age : 20 ,
  grade : {
    math: 100,
    chinese : 95
  }
}
console.log(i.name+ "的数学成绩为 ：" +i.grade.math);  // panda的数学成绩为 ：100
// 4. 奇葩键名该如何获取？
 var p = {
   'a b 😷': 'mmp'
 }
 console.log(p['a b 😷']);  // mmp
// 4. 这种方式也同样适用与一些动态的键名
 var obj = {
  key1: 'val1',
  key2: 'val2',
  key3: 'val3',
}
function get(id) {
  var key_name = 'key' + id; // 此处将id与'key'拼接在了一起
  return obj[key_name];
}
console.log(get(2));  // val2
// 5. 对象中的数据类型没有限制，以下对象类型都是正确的
var obj = {
  a: [1], // 数组 array
  b: {}, // 对象 object
  c: 1, // 数字 number
  d: true, // 布尔值 boolean
  e: 'yo', // 字符串 string
}
// 6. 对象声明之后还可以加新键
var obj = {};
obj.a = 1;
console.log(obj) // {a: 1}
// 7. 对象中的键名不可重复
var obj = {
  name : hjj,
  sex : '女',
  name :hj
}
console.log(obj.sex);// 报错： ReferenceError: hjj is not defined。因为后一个会覆盖前一个，所以显示hjj未被定义
