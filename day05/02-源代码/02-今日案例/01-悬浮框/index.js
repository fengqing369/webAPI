/**
 * Created by Bruce on 2017/12/24.
 */

//① 获取今日团box2 div节点对象
var box2 = document.getElementById('box2');
//② 获取在今日团没有定位之前距离文档顶部间距  今日团div.offsetTop
var v1 = box2.offsetTop;
//③ 给window绑定滚动条滚动事件 onscroll
window.onscroll = function(){
  //④ 在滚动事件中，做判断。当前被卷去的距离  和 今日团div.offsetTop比较    如果当前被卷去的距离 >=今日团div.offsetTop 让今日团这个div固定定位（加active类名）。否则恢复今日团原有的样式（去掉active）
  //console.log(window.scrollTop) 无法获取被卷起的间距,针对最外层的滚动条比较特殊 undefined
  //console.log(document.body.scrollTop);//0 有兼容性问题
  //console.log(document.documentElement.scrollTop);//针对最外层滚动条，可以选用
  var v = document.documentElement.scrollTop||document.body.scrollTop;
  if(v>=v1){
    box2.className = 'box2 active';
  }else {
    box2.className = 'box2';
  }


};

