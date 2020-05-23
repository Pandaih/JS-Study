// 作业1：求1-100之间所有数的总和和平均值
var sum= 0;
var aver= 0;
for(var c= 1;c <=100; c++){
  sum+=c;
  aver= sum/100;
}
console.log('1-100之间所有数的总和为：'+sum);
console.log('1-100之间所有数的平均值为：'+aver);

// 作业2：求1-100之间所有偶数的和
var sum2= 0;
for (var i = 0; i <=100; i++) {
  if(i%2==0){
    sum2+=i;
  }
}
console.log('1-100之间所有偶数的和为：'+sum2);

// 作业3：求100以内7的倍数的总和
var sum3= 0;
for (var b = 1; b <=100; b++) {
  if(b%7==0){
    sum3+=b;
  }
}
console.log('100以内7的倍数的总和为：'+sum3);

// 作业4：使用for循环打印以下图形，要求每次只能输出一个☆
// ☆☆☆☆☆
// ☆☆☆☆☆
// ☆☆☆☆☆
// ☆☆☆☆☆
var str6='';
for(var d=1;d<=5;d++){
  for(var f=1;f<=5;f++){
    str6=str6+'☆';
  }
  str6=str6+'\n';
}
console.log(str6);

// 作业5：使用for循环打印三角形：
// ☆
// ☆☆
// ☆☆☆
// ☆☆☆☆
// ☆☆☆☆☆
var str= '';
for(var p=1;p<=5;p++){  // 五行
  for (var q=1;q<=p;q++){
      str=str+'☆';
  }
  str=str+'\n';
}
console.log(str);

// 作业6：使用for循环打印九九乘法表
var str2 = '';
for(var x=1;x<=9;x++){
  for(var y=1;y<=x;y++){
    str2=str2+ y+ 'X' +x +'=' +x*y +'\t';
  }
  str2=str2+'\n';
}
console.log(str2);

// 作业7：接收用户输入的用户名和密码，若用户名为：admin 密码为：123456；
// 则显示用户登录成功，否则一直让用户输入
var m= prompt('请输入用户名：');
var n= prompt('请输入密码：');
while (m!=='admin' && n!=='123456'){
  var m= prompt('请输入用户名：');
  var n= prompt('请输入密码：');
}
alert('登陆成功！');

// 作业8：求整数1-100的累加值，但是要求跳过所有个位为3的数【continue实现】
var sum5 = 0;
for (var v = 1; v <=100; v++) {
  if(v%10==3){
    continue;
  }
  sum5+=v;
}
console.log(sum5);

// // 作业9： 简易ATM
var sum= 100;
do{
var u =parseInt(prompt('请输入您需要办理的业务：\n 1.存款 \n 2.取钱\n 3.显示余额 \n 4.退出'));
switch (u) {
  case 1:
  sum+=parseInt(prompt('请输入你存款的金额：'));
  alert('当前金额为：'+sum);
    break;
  case 2:
  sum-=parseInt(prompt('请输入你取钱的金额：'));
  alert('当前金额为：'+sum);
    break;
  case 3:
alert('当前余额为：'+sum);
    break;
  case 4:
  alert('欢迎下次再来！') ;
  break;
  default:alert('输入数字有误，请重新输入！');
          }
    }
while (u!==4) ;
