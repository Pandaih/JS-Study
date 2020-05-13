// window.setTimeout(function(){
//   console.log('hhh ');
// },2000);


var count=0;
var timer=window.setInterval(function(){
  count++;
  if(count>3){
    window.clearInterval(timer);
    return;
  }
  console.log('xixixi '+count);
},100);

console.log('heiheihei');
