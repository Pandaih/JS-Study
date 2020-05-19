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

var result = ['baidu','sohu','taobao','ali'];
for (var i = 0; i < 4; i++) {
  console.log(result[3]);
}

// 练习1:1-100的累加和
var sum1=0;
for (var a = 1; a <= 100; a++) {
  sum1 += a;
}
console.log(sum1);

// 练习2：求1-100之间所有数的平均值
var sum2= 0;
var average= 0;
for (var b = 0; b <=100; b++) {
  sum2+=b;
}
average=sum2/100;
console.log(average);

// 练习3：求1-100之间所有偶数和、奇数和
var double= 0;
var single= 0;
for (var d = 0; d <=100; d++) {
  if (d%2 == 0) {
    double+=d;
  }else {
    single+=d;
  }
}
console.log('1-100之间偶数和：'+double);
console.log('1-100之间奇数和：'+single);

// 练习 4：求1-100之间所有能被3整除的数字的和
var sum3= 0;
for (var e = 0; e <=100; e++) {
      if (e%3==0) {
        sum3+=e;
      }
}
console.log('1-100之间能被3整除的数字的和：'+sum3);

// 练习5：先输入班级人数，依次输入分数，求出总和，再求平均数
var sum4=0;
var aver=0;
var num1=prompt('请输入班级总人数：');
for (var f = 1; f <=num1; f++) {
  var g=parseFloat(prompt('请输入第'+f+'个同学的成绩'));
   sum4+=g;
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

// 练习7：打印五行五列星星
var str2 ='';
for(var i=1;i<=5;i++){  // 外循环负责打印五行
  for(var j=1;j<=5;j++){  // 内循环负责打印一行打印五个星星
    str2=str2+'★';
  }
  str2=str2+'\n';
}
    console.log(str2);

//练习8：打印n行n列
var str5 ='';
var s= prompt('请输入打印的行数：');
var t= prompt('请输入打印的列数：');
for(var p =1;p <=s;p++){
  for(var q=1;q<=t;q++){
    str5=str5+'★';
  }
  str5=str5+'\n';
}
console.log(str5);

// 练习9：打印倒三角形
var str3='';
for(var k=1;k<=10;k++){
  for(var l=k;l<=10;l++){
    str3=str3+'★';
  }
  str3=str3+'\n';
}
console.log(str3);

// 练习10：打印正三角形
var str4='';
for(var k=1;k<=10;k++){
  for(var l=1;l<=k;l++){
    str4=str4+'★';
  }
  str4=str4+'\n';
}
console.log(str4);

// 练习11：打印九九乘法表
var str6='';
for(var x=1;x<=9;x++){
  for(var y=1;y<=x;y++){
    str6=str6+ y +'x'+ x + '=' + x*y + '\t';
  }
  str6= str6 +'\n';
}
console.log(str6);
