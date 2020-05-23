/*
1. 函数是什么？
函数就是封装了一段可以被重复执行调用的代码块，目的：让大量代码可以重复使用，节约开发时间
例如：求和函数
2. 函数使用：
（1）函数声明：
function 函数名(){
  函数体
}
例子：*/
function sayHi(){
  console.log('hi~~');
}
/*（2）调用函数
函数名();
*/
sayHi();
sayHi();

/*
3. 函数封装 ：把一个功能或多个功能通过函数的方式封装起来，对外只提供一个接口
类似于把电脑配件组装到机箱里面
*/

/*
4.实参和形参个数匹配问题：
实参数=形参数：正常输出结果
实参数>形参数：多出来的实参不计算，只取到形参的个数
实参数<形参数：多的形参定义为undefined，结果为：NaN
在JS中，形参的默认值为：undefined
*/

/*
5. return
1.不要在函数里面直接输出log；
函数返回值格式：
function 函数名(){
  return 需要返回的结果；
}
函数名();
输出;
2. return 后面的语句不会被执行
3. return只能返回一个值，返回形参最后面的那个数
4. 如果函数需要返回多个值，可以使用数组形式
5. 如果没有return 返回结果为：undefined
6. break:结束当前的循环体，switch
continued:退出本次循环，继续执行下次循环
return:不仅可以退出循环，还可以返回return里面的值，同时还可以结束当前函数体内的代码块
*/

/*
函数的本质：传入参数(形参、实参)-> 内部处理（函数体）-> 输出结果(return)
类比榨汁机：输入原料-> 内部处理-> 输出果汁
*/

// 练习1 ：不规范写法
function getSum(num1,num2){  //在声明函数的小括号里面的是形参（形式上的参数），形参是接受实参的； num1 、num2 是形参
  var sum =0;
  for(var i= num1;i<=num2; i++){
    sum+= i;
  }
  console.log(sum);
}

getSum(1,100);  //在调用函数的小括号里面的是实参 （具有实际意义的参数）；1, 100 是实参
getSum(1,10);

// 练习2 ：规范写法
function sum(num3,num4){
  return num3+num4;
}
console.log(sum(3,7));

// 练习3：利用函数求两个数之间的最大值
function getMax(num5,num6){
  return num5>num6 ? num5 :num6 ; // 三元表达式
}
console.log(getMax(5,6));

// 练习4： 利用函数求任意一个数组中的最大值
function getmax(arr){
  var max= arr[0];
  for(var ff=1;ff<=arr.length; ff++){
    if(arr[ff]>max){
      max= arr[ff];
    }
  }
  return max;
}
var ss=getmax([1,2,34,56,77,567]);
console.log(ss);

// 练习5： return 后面的语句不会被执行
function haha(aa,bb){
  return aa+bb;
  alert('pick me~~');
}
console.log(haha(1,2));  // alert语句没有被执行

// 练习6：return只能返回一个值，返回形参最后面的那个数
function xixi(cc,dd){
  return cc,dd;
}
console.log(xixi(33,44));  // 44

// 练习7：如果函数需要返回多个值，可以使用数组形式
function heihei(hh,jj){
  return [hh+jj,hh-jj,hh*jj,hh/jj,hh%jj];
}
var tt=heihei(100,10);  // 尽量用一个变量来装函数里面的值，规范写法
console.log(tt);

// 练习8：如果没有return 返回结果为：undefined
function yy(){
  return 123;
}
console.log(yy());

function uu(){
}
console.log(uu()); // undefined


// 函数的课后练习：
// 1.用户输入两个任意数字的任意算术运算，并能弹出运算后的结果
var nn= prompt('请输入第一个数字：');
var mm= prompt('请输入第二个数字：');
var kk= prompt('请输入第三个数字：');
var jj= parseInt(prompt('请输入第一个数字：'));


function jisuan(nn,mm){
  return '加减乘除结果分别为：'+[parseInt(nn)+parseInt(mm),parseInt(nn)-parseInt(mm),parseInt(nn)*parseInt(mm),parseInt(nn)/parseInt(mm)];
}
alert(jisuan(nn,mm));

// 2.判断用户输入的两个数，弹出比较大的数字
function zuidazhi(nn,mm){
  return nn>mm ? nn :mm;
}
alert(zuidazhi(nn,mm));

// 3.判断用户输入的3个数，弹出比较大的数字
// 方法1：
function sangeshu(nn,mm,kk){
  return ((nn>mm) ? nn :mm ) >kk ? (nn>mm ? nn: mm):kk;  // 三元运算符太绕了，建议使用if else
}
alert(sangeshu(nn,mm,kk));
//方法2：
function sangeshu2(nn,mm,kk){
  var max = nn;
  if(mm>nn){
    max= mm;
  }
  if(kk>nn){
    max=kk;
  }
  return max;
}
alert(sangeshu2(nn,mm,kk));

// 练习4：判断用户输入的数字是不是一个素数，如果是的话，弹出框提示是素数。否则反之
