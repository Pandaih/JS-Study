var  loginCount = 1;
loginCount++;
loginCount++;
console.log('loginCount:',loginCount);

var  logotCount = 3;
logotCount--;
logotCount--;
console.log('logotCount:',logotCount);

console.log('1>2:',1>2);
console.log('1<2:',1<2);
console.log('1>=2:',1>=2);
console.log('1<=2:',1<=2);
console.log('1'==1);
console.log('322<50:','322'<'50');


var 他是制单人 = true,
    他是审核员 = false;
if(他是制单人 || 他是审核员) {
  console.log('转账成功');
} else {
  console.log('转账失败，权限不足');
}
