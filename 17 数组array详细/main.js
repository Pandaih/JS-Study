/*
数组，容易看内容以及好组织。将一组数据存储在单个变量名下
eg：  【第二种写法看的清楚】
1.数组创建：
var b =new Array();
var arr=[];
*/
// 第一种写法
var 同学1 = '王花花';
var 科目1 = '传呼机打蜡指南';
var 同学2 = '李拴蛋';
var 科目2 = '上网冲浪必修';
var 同学3 = '刘备备';
var 科目3 = '网络词汇必修';

// 第二种写法
var 同学 = [
  '王花花',
  '李拴蛋',
  '刘备备',
];
var 科目 = [
  '传呼机打蜡指南',
  '上网冲浪必修',
  '网络词汇必修',
];

// 1. 定义数组[],[]里面的每一项叫元素,元素类型不限
var a= [
  123,
  '字符串',
  true,
  {},   // 对象
  function(){}  // 函数
];
console.log(a[2]);  // true
// 2. 数组还可以嵌套
var b= [ 1, ['a', 'b', 'c']];
var c = [[[[[[[[['yo']]]]]]]]];   // 就是有这种操作
// 3. 获取元素，每一个元素都有一个用于定位的索引 (index；也就是元素的身份证号，从0开始)，知道索引就能获取元素
// 3.1 一维数组
var d = [123,'hjj',true];
console.log(d[0]);  // 123
console.log(d[1]); // hjj
console.log(d[2]); // true
// 3.2 二维数组
var e = [[11,12],[21,22],[31,32]];  //第一行： 11,12  第二行： 21,22  第三行： 31，32
console.log(e[0][1]);  //第一行的第二个元素 12
console.log(e[2][1]);  //第三行的第二个元素 32
// 3.3 多维数组
var 各种排排坐 = [['a1', 'a2'], ['b1', 'b2'], ['c1', ['c2']]];
各种排排坐[2][1][0] // 'c2'
// 4. 通过.length获取数组的长度（里面有几个元素）
var r = [1,2,3,4,5,6,9,8,12,15,20,62,58,92];
console.log('该数组共有'+r.length +'个元素');  // 该数组共有14个元素
for (var f = 0; f < r.length; f++) {
  console.log(r[f]);  // 打印全部数组内容
}

// 给数组新增元素（1）：通过length长度
var t= ['red','blue','pink'];
t.length=4;
console.log(t);
console.log(t[3]);

// （2）修改索引号，追加数组元素
var u= ['red','blue','pink'];
u[3]= 'orange';  // 追加一个元素
console.log(u);  // ["red", "blue", "pink", "orange"]

u[2]='purple';  // 替换掉了原来的元素
console.log(u); // ["red", "blue", "purple", "orange"]

//常用方法 1 ：使用 .push(新元素) 从末尾添加
var a = [1,2,3];
a.push(4);
console.log(a);  // [ 1, 2, 3, 4 ]
//2: 使用.unshift(新元素) 从开头添加
var a = [1,2,3];
a.unshift(0);
console.log(a);  //  [ 0, 1, 2, 3 ]
// 3: 使用.pop() 从末尾删
var a= [1,2,3,4,5,6,7,8];
a.pop();
a.pop();
a.pop();
console.log(a);  // [ 1, 2, 3, 4, 5 ]
// 4. 使用.shift() 从开头删
var a= [1,2,3,4,5,6,7,8];
a.shift();
a.shift();
console.log(a);  // [ 3, 4, 5, 6, 7, 8 ]
// 5. 使用.reverse() 颠倒顺序
var b= [1,2,3];
b.reverse();
console.log(b);  // [ 3, 2, 1 ]

// 5.2 :数组元素翻转
var bb=[1,2,3,4,5,6];
var ff= [];
for(var k=bb.length-1; k>=0; k--){
  ff[ff.length]=bb[k];
}
console.log(ff);

// 6. 使用.slice(从哪剪，在哪停) 剪裁
var c= [1,2,'薯条','鸡块','鸡腿儿',3];
var d=c.slice(2,5);  //从第3个开始剪，第6个就停止，剪了：3 4 5
console.log(d);   // 返回剪裁的新数组，不影响原数组。  [ "薯条", "鸡块", "鸡腿儿" ]
// 7. 使用.splice(从哪剪, 剪多长, 替换元素1, 替换元素2) 剪接
var 肯德基= [1,2,'薯条','鸡块','鸡腿儿',3];
肯德基.splice(2,2);  // 在数组肯德基的第3个元素开始剪，长度为2个元素。系统返回减掉的东西
console.log(肯德基);  // [ 1, 2, "鸡腿儿", 3 ]

// 现在肯德基数组已经被剪成： [ 1, 2, "鸡腿儿", 3 ]
// 从第2格开始剪，剪1格，进两个广告
肯德基. splice(1,1,'薯条买一送一','鸡翅免费吃');
console.log(肯德基);   //  [ 1, "薯条买一送一", "鸡翅免费吃", "鸡腿儿", 3 ]

//  8. 使用.forEach(回调函数) 迭代
var c= ['a','b','c','d','e'];
c.forEach(function(key,index){     // c.forEach(function(value(值),index(索引)){  });
  console.log('第' + index + '条：' + key);
})
//------Console------
// 第0条：a
// 第1条：b
// 第2条：c
// 第3条：d
// 第4条：e

//  9. 使用.filter(回调函数) 过滤器，通过你给他的条件返回一个新数组
var 旧数组 = [1, 2, 3, 4];
var 新数组 = 旧数组.filter(
  // 传入一个函数，每迭代一个元素就执行一次
  function(元素, 索引, 原始数组) {
    // 只要大于2的元素
    var 条件 = 元素 > 2;
    return 条件;
  }
);

console.log(新数组); // [3, 4]

// 10 使用.every(回调函数) 每一条，每一条都满足你给的条件
var 满足 = [1, 2, 3].every(
  // 传入一个函数，每迭代一个元素就执行一次
  function(元素, 索引, 原始数组) {
    // 是否小于10
    var 条件 = 元素 < 10;
    return 条件;
  }
);
/*只有当所有条件都满足时才返回true*/
console.log(满足); // true

// 11 :for循环遍历数组
var tt= ['123','456','789'];
for (var k = 0; k<3; k++) {
  console.log(tt[k]);
}

// 12: 求数组的和 和平均值
var sum= 0;
var arr=[1,2,3,4,5];
var aver= 0;
for (var i = 0; i < arr.length; i++) {
  sum+=arr[i];
  aver=sum/ arr.length;
}
console.log(sum,aver);

// 13：求数组的最大值
var arra= [12,23,45,67,78,99,676];
var max= arra[0];
for(var r=1;r<arra.length;r++){  // r是计数器，用来判断循环多少次
  if(max<arra[r]){  // 判断语句
    max=arra[r];
  }
}
console.log(max);

// 14：把数组转换成字符串，并用特殊符号串起来
var aa=['pink','blue','red','yellow'];
var fenge='~';
var stri='';
for(var t=0; t<aa.length;t++){
  stri += aa[t] + fenge;
}
console.log(stri);

// 15: 把1~10 存进去数组里面
var hhh= [];  // 定义一个空数组
for (var v = 0; v < 10; v++) { // 数组的索引值从0开始，计数器也从0开始
//   hhh= v;  千万不要这样写
  hhh[v]= v + 1;
}
console.log(hhh);

// 16：在一个数组找出大于10的元素，并把它存放在新数组里面（方法1）
var xx=[1,23,12,45,3,4,5,6,77];
var yy= [];
var cc=0;
for(var zz=0; zz<xx.length; zz++){
  if(xx[zz]>=10){
    yy[cc]=xx[zz];
    cc++;
  }
}
console.log(yy);

// 方法（2）
var xx2=[1,23,12,45,3,4,5,6,77];
var yy2= [];
for(var zz2=0; zz2<xx2.length; zz2++){  // 数组索引值
  if(xx2[zz2]>=10){
    yy2[yy2.length]=xx2[zz2];
  }
}
console.log(yy2);

// 练习17：删除指定数组元素
var qq= [1,2,3,12,0,99,0,9];
var pp= [];
for(var gg=0; gg<qq.length; gg++){
  if(qq[gg]!=0){
    pp[pp.length]=qq[gg];
  }
}
console.log(pp);

// 冒泡排序：一次比较两个顺序，如果顺序反了，就换过来，可进行多趟
// 冒泡排序实例：
var jj=[1,3,45,2,4];
for(var ll=0; ll<=jj.length-1;ll++){  // 外循环，记录经过多少趟
  for(var mm=0; mm<=jj.length-ll-1;mm++){  // 内循环，每一趟里面经历多少次两两交换
    if(jj[mm]<jj[mm+1]){
      var temp= jj[mm];
      jj[mm]=jj[mm+1];
      jj[mm+1]=temp;
    }
  }
}
console.log(jj);
