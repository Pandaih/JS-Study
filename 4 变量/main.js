var a = 123;
a = 'hello';
console.log(a);   // hello

var b = [1,2,3];
console.log(b.length);  // 3

// 布尔型,boolean 和number相加时， true当做1来看， false当做 0
var a= true;
var b= false;
console.log('结果是：',a+ 1 );  // 结果是： 2
console.log('结果是：',b+ 1 );  // 结果是： 1

// undefined 和数字相加，结果是 NaN
var c;
console.log(c+ 1);  // NaN
