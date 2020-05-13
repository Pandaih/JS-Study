console.log(1+1);  //2
console.log('1'+'1'); //11
// 一般在需要发生数学运算的地方我们都会使用Number类型，如价格、总数、折扣等等。

// 整型数字的判断：
console.log(Number.isInteger(1)); //true
console.log(Number.isInteger(1.5)); //false

console.log(parseInt('20.9'));//20
console.log(parseInt('24',5)); //14
console.log(parseInt('123', 5)); // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38

/*parseInt()函数
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

// parseFloat()函数
console.log(parseFloat('1.0'));    // 1
console.log(parseFloat('a1.4'));  // NaN
console.log(parseFloat('.0'));    // 0
console.log(parseFloat('1.5a'));  // NaN

//NaN  not a number ,但是是Number数据类型
console.log(NaN==NaN);   //false
// 判断是否为NaN可以使用isNaN()函数
console.log(isNaN(1)); // false
console.log(isNaN(0 / 0)); // true

// 在其他类型前加+可以快速将其转换为数字类型
console.log(typeof +'w');  //number
console.log(+'');  // 0
console.log(+true);  // 1
