/**
 * Created by Bruce on 2017/12/26.
 */

/*
  功能：动画
  参数：
    node 运动谁？  节点对象
    targetValue   目标值
*/
function animate(node,targetValue){
  //时间：定时器
  //状态：更改div的状态（更改left值）
  //点击按钮会产生一个新的定时器，新的定时器产生之前，把之前的定时器停止了。
  if(num!=undefined){
    clearInterval(num); //把之前的定时器停止了。
  }

  num = setInterval(function(){
    console.log('执行中...');
    //步长
    var step = 5;
    //原有的left值
    var currentValue = node.offsetLeft;
    //判断是否到达目标
    if(currentValue==targetValue){ //到达目标
      clearInterval(num);//结束定时器,下一时间后定时器不在执行
      return;//结束函数的执行
    }
    node.style.left = currentValue + step + 'px';
  },30);
}
