// 函数是可以相互调用的
        function fn1() {
          fn2(); // 在fn1 函数里面调用了 fn2 函数
            console.log(11);
        }
        fn1();

        function fn2() {
            console.log(22);

        }
        //
        // function fn1() {
        //     console.log(111);
        //     fn2();
        //     console.log('fn1');
        // }
        //
        // function fn2() {
        //     console.log(222);
        //     console.log('fn2');
        // }
        // fn1();

// 自己写的，典型例子
        function fun1(){
          console.log(777);
          fun2();
        }

        function fun2(){
          console.log(888);
        }

        fun1();

// 判断用户输入的年份是否为闰年，输出二月份有多少天
function backDay(){
 var time = prompt('请输入年份');
 if (isRun(time)) {
  alert('当前年份为闰年，二月有29天');
}else{
  alert('当前年份为平年，二月有28天');

}
}

function isRun(year){
  var flag= false;
  if(year%4==0 && year%100!=0 || year%400 == 0){
    flag = true;
  }
  return flag;
}
backDay();
