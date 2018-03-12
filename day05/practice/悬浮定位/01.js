
//获取元素
var box2  = document.getElementById('box2');
//获取元素高度
var h1 = box2.offsetTop;
//添加滚动事件,给window添加滚动事件是为了避免浏览器兼容问题
window.onscroll = function(){
  //获取滚动高度
  var h = document.documentElement.scrollTop || document.body.scrollTop;
  //比较高度大小,判断是否添加类名，进行固定定位
  if(h>=h1) {
    box2.className = "box2 active";
  }else{
    box2.className = "box2";
  }
}