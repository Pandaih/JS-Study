/*
1.arguments是函数已经内置好的对象，函数都有的
里面存放着所有实参
2.返回的值是一个伪数组，具有的功能如下：
（1）arguments.length
（2）数组的索引值，也是从0开始的
（3）没有数组的一些函数功能，例如 pop push
*/

// // 例子1：
// function haha(){
// console.log(arguments);
// console.log(arguments.length);
// console.log(arguments[2]);  //  3
// }
//
// haha(1,2,3,4,5);
//
// // 例子2： 打印arguments的数组元素
// function dayin(){
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// dayin(6,7,8);

// 例子3： 利用函数求任意个数的最大值
function getMax(){
  var max= arguments[0];
  for(var xx=1; xx<arguments.length; xx++){
    if(arguments[xx]>max){
      max= arguments[xx];
    }
  }
  return max;
}
var re= getMax(1,22,33,434,5,6);
console.log(re);


// 例子4： 利用函数封装，冒泡排序
function sort(arr){
  for(var bb=0; bb<arr.length-1; bb++){
    for(var cc=0; cc< arr.length-bb-1;cc++){
      if(arr[cc]>arr[cc+1]){
        var temp=arr[cc];
        arr[cc+1]=arr[cc];
        arr[cc]=temp;
      }
    }
  }
  return arr;
}
 var  ff=sort([1,2,33,67,5]);
 console.log(ff);

 // 例子5：判断闰年
 // var oo= parseInt(prompt('请输入年份：'));
 function isRun(oo){
   var uu=false;
   if(oo%4==0 && oo % 100 !=0  || oo % 400==0){
     uu=true;
   }
   return uu;
 }
console.log(isRun(2000));
