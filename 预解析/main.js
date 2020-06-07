// 1. 我们js引擎运行js ，分为两步：  预解析 + 代码执行
        // (1). 预解析 js引擎会把js 里面所有的 var  ，还有 function 提升到当前作用域的最前面
        // (2). 代码执行  按照代码书写的顺序从上往下执行
        // 2. 预解析分为 变量预解析（变量提升） 和 函数预解析（函数提升）
        // (1) 变量提升 就是把所有的变量声明提升到当前的作用域最前面  不提升赋值操作
        // (2) 函数提升 就是把所有的函数声明提升到当前作用域的最前面  不调用函数

// ==================================案例=================================
                // 1问
                console.log(num);  // undefined

                // 2问
                console.log(num); // undefined  坑 1
                var num = 10;
                // 相当于执行了以下代码
                // var num;
                // console.log(num);
                // num = 10;

                // 3问
                function fn() {
                    console.log(11);  //  11
                }
                fn();

                // 4问
                fun(); // 报错  坑2
                var fun = function() {
                        console.log(22);
                    }
                    // 函数表达式 调用必须写在函数表达式的下面
                    // 相当于执行了以下代码
                    // var fun;
                    // fun();
                    // fun = function() {
                    //         console.log(22);
                    //     }

  // ==================================案例 2=================================
                            // 案例 1
                            var num = 10;
                            fun();
                            function fun() {
                                console.log(num);  // undefined
                                var num = 20;
                            }
                            // 相当于执行了以下操作
                            // var num;
                            // function fun() {
                            //     var num;
                            //     console.log(num);
                            //     num = 20;
                            // }
                            // num = 10;
                            // fun();

                            // 案例2
                            var num = 10;

                            function fn() {
                                console.log(num);  // undefined
                                var num = 20;
                                console.log(num);  // 20
                            }
                            fn();
                            // 相当于以下代码
                            // var num;

                            // function fn() {
                            //     var num;
                            //     console.log(num);
                            //     num = 20;
                            //     console.log(num);
                            // }
                            // num = 10;
                            // fn();

                            // 案例3
                            var aa = 18;
                            f1();
                            function f1() {
                                var b = 9;
                                console.log(aa);  // undefined
                                console.log(b);  // 9
                                var aa = '123';
                            }
                            // 相当于以下代码
                            // var a;
                            // function f1() {
                            //     var b;
                            //     var a;
                            //     b = 9;
                            //     console.log(a);
                            //     console.log(b);
                            //     a = '123';
                            // }
                            // a = 18;
                            // f1();

                            // 案例4
                            f1();
                            console.log(c);  // 9
                            console.log(b);  // 9
                            console.log(a);  // not  undefined
                            function f1() {
                                var a = b = c = 9;
                                console.log(a); // 9
                                console.log(b);// 9
                                console.log(c);// 9
                            }
                            // 以下代码
                            // function f1() {
                            //     var a;
                            //     a = b = c = 9;
                            //     // 相当于 var  a  = 9; b = 9; c = 9; b 和 c 直接赋值 没有var 声明 当 全局变量看
                            //     // 集体声明  var a = 9, b = 9, c = 9;
                            //     console.log(a);
                            //     console.log(b);
                            //     console.log(c);
                            // }
                            // f1();
                            // console.log(c);
                            // console.log(b);
                            // console.log(a);
