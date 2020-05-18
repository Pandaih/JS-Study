// var i ;
// for (var i = 0; i < 100; i+=2) {
//   console.log(i);
// }

/*
1. 循环的目的：循环使用，节省开发时间
2. 循环语句：for（王者） 、while do while（青铜）
3. for循环：重复执行某些代码，通常和计数有关系
      结构：for(初始化变量;条件表达式；操作表达式){
        // 循环体
      }
4. 双重for循环：外层循环一次，里面的循环执行全部。
    想起for结构的1 2 3 4 顺序，1只执行一次，才到 2 3 4；
    当不满足条件的时候，从 2 跳出来了。
*/
//
// var result = ['baidu','sohu','taobao','ali'];
// for (var i = 0; i < 4; i++) {
//   console.log(result[3]);
// }

// 练习1:1-100的累加和
var sum1=0;
for (var i1 = 1; i1 <= 100; i1++) {
  sum1 += i1;
}
console.log(sum1);

// 练习2：求1-100之间所有数的平均值
var sum2= 0;
var average= 0;
for (var i2 = 0; i2 <=100; i2++) {
  sum2+=i2;
}
average=sum2/100;
console.log(average);

// 练习3：求1-100之间所有偶数和、奇数和
var double= 0;
var single= 0;
for (var i3 = 0; i3 <=100; i3++) {
  if (i3%2 == 0) {
    double+=i3;
  }else {
    single+=i3;
  }
}
console.log('1-100之间偶数和：'+double);
console.log('1-100之间奇数和：'+single);

// 练习 4：求1-100之间所有能被3整除的数字的和
var sum3= 0;
for (var i4 = 0; i4 <=100; i4++) {
      if (i4%3==0) {
        sum3+=i4;
      }
}
console.log('1-100之间能被3整除的数字的和：'+sum3);

// 练习5：先输入班级人数，依次输入分数，求出总和，再求平均数
var sum4=0;
var aver=0;
var num1=prompt('请输入班级总人数：');
for (var a = 1; a <=num1; a++) {
  var b=parseFloat(prompt('请输入第'+a+'个同学的成绩'));
   sum4+=b;
  aver=sum4/num1;
}
alert('班级总分为：'+sum4);
alert('班级平均分为：'+aver);

// 练习6： 一行打印五个星星
var str='';
for (var r = 1; r <= 5; r++) {
  str=str+'★';
}
console.log(str);
