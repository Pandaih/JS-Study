console.log(1+1);  //2
console.log('1'+'1'); //11
// 一般在需要发生数学运算的地方我们都会使用Number类型，如价格、总数、折扣等等。

// 整型数字的判断：
console.log(Number.isInteger(1)); //是整型返回： true
console.log(Number.isInteger(1.5)); //不是整型返回： false

console.log(parseInt('20.9'));//20
console.log(parseInt('24',5)); //14
console.log(parseInt('123', 5)); // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38

/*parseInt()函数，得到的是：整数
如果不是NaN，返回值将是第一个参数的整数，即第一个参数作为指定的 radix 的数字。
16进制：A=11  B=12  C=13  D=14  E=15  F=16
如果第一个字符不能转换为数字，parseInt会返回 NaN。
*/
parseInt('1') // 1
parseInt('1.1') // 1
parseInt('1.9') // 1
parseInt('1a') // 1
parseInt('a1') // NaN
parseInt('.9') // NaN
parseInt('0.9') // 0

console.log(!!0);  //false
console.log(!!-2);//true
console.log(!!1);//true

// parseFloat()函数, 得到的是：小数 浮点数
console.log(parseFloat('1.0'));    // 1
console.log(parseFloat('a1.4'));  // NaN
console.log(parseFloat('.0'));    // 0
console.log(parseFloat('1.5a'));  // 1.5
console.log(parseFloat('3.14'));   // 3.14

//NaN  not a number ,但是是Number数据类型
console.log(NaN==NaN);   //false
// 判断是否为NaN(非数字)可以使用isNaN()函数
console.log(isNaN(1)); // 是数字返回：false
console.log(isNaN(0 / 0)); // 不是数字返回：true

// 在其他类型前加+可以快速将其转换为数字类型
console.log(typeof +'w');  //number
console.log(+'');  // 0
console.log(+true);  // 1

// 八进制的Number如何定义变量
var num1= 0123;    // 八进制的数字写法：需要在数字前加一个 0
console.log('123的十进制为： ',num1);  // 123的十进制为：  83
/*
八进制转十进制的方法
八进制：123 -> 十进制：1*8^2 + 2*8^1 + 3*8^0 = 1*64 + 2*8 + 3*1 = 83
*/

// 十六进制的Number如何定义变量
var num2= 0x123;  // 八进制的数字写法：需要在数字前加一个 0x
console.log('0x123的十进制为： ',num2);  // 0x123的十进制为：  291
/*
十六进制转十进制的方法
十六进制：123 -> 十进制：1*16^2 + 2*16^1 + 3*16^0 = 1*256 + 2*16 + 3*1 = 291
A-10; B-11; C -12; D-13; E-14; F-15
*/

//Number 的最大值、最小值
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
