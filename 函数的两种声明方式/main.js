
      // 1. 利用函数关键字自定义函数(命名函数)
        function fn() {  // 函数名就为 ：fn

        }
        fn();

        // 2. 函数表达式 (匿名函数)
        // var 变量名 = function() {};
        var fun = function(aru) {  // aru为形参
            console.log('我是函数表达式');
            console.log(aru);
        }
        fun('pink老师');  // pink老师为实参

        // (1) fun是变量名 不是函数名
        // (2) 函数表达式声明方式跟声明变量差不多，只不过变量里面存的是值 ，而 函数表达式里面存的是函数
        // (3) 函数表达式也可以进行传递参数
