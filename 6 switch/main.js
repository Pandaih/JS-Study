/*
1. switch适用于固定值
2. day的值和 case里面的值相匹配，需要是全等关系：值和数字类型都匹配成功===
3. 如果当前case里面没有break，则不会退出switch
*/
var  day  = 3;
switch (day) {
  case 1:
  console.log('今天星期一，去巴黎');
    break;
  case 2:
  console.log('今天星期2，去华盛顿');
    break;
  case 3:
  console.log(' 今天星期3，去白宫');
    break;
  case 4:
  console.log('今天星期4，去广州塔');
    break;
  case 5:
  console.log(' 今天星期5，去伦敦');
      break;
  default:
  console.log('待在家里');
}


// 练习1：查询水果价格
var fruit =prompt('请输入查询的水果：');
switch (fruit) {
  case '苹果':
    alert('苹果一斤15元');
    break;
  case '榴莲':
    alert('榴莲一斤55元');
    break;
  case '香蕉':
    alert('香蕉一斤5元');
    break;
  case '布林':
    alert('布林一斤10元');
    break;
  default:
      alert( '没有该水果的价格。');
}

// 练习2：判断时间阶段
var num1 = prompt('请输入现在的时间（24小时制）：');
if (num1==12) {
  alert('中午好~');
}else if (num1==18) {
  alert('傍晚好~');
}else if (num1==23) {
  alert('深夜好~');
}else {
  alert('现在是：'+num1+'点');
}

// 练习3：比较两个数的大小（用户依次输入两个数，弹出较大的数）
var num2= prompt('请输入第一个数：');
var num3= prompt('请输入第二个数：');
var result = num2>num3 ? num2+' '+num3+'中较大的数字为：'+num2  : num2+' '+num3+'中较大的数字为：'+num3;
alert(result);

// 练习4：判断奇数偶数
var num4= prompt('请输入一个数：');
if (num4 % 2 == 0) {
  alert('该数字为偶数');
}else {
  alert('该数字为奇数');
}
