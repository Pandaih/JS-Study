/*
1. continue 退出本次循环，继续执行其他循环体：吃5个包子，吃到第三个，发现有虫子，我就不吃第三个，接着吃第四、第五个。其实我吃了四个包子
2. break; 立即退出整个循环。吃5个包子，吃到第三个，发现有虫子，剩下的都不吃了。其实我只吃了两个包子
*/

// 练习0：吃包子continue
for (var a = 1; a <=5; a++) {
  if(a==3){
    continue;
  }
  console.log('我正在吃第'+a+'个包子'); // 打印只有四条记录
}

// 练习1：求1~100之间，除了能被3整除之外的整数和
var sum= 0;
for (var i = 0; i <=100; i++) {
  if (i%7==0) {
    continue;
  }
  sum+=i;
}
console.log(sum);

// 练习2：吃包子break
for (var a = 1; a <=5; a++) {
  if(a==3){
    break;
  }
  console.log('我正在吃第'+a+'个包子'); // 打印只有两条记录
}
