/**
 * Created by Bruce on 2017/12/26.
 */

/*
 功能：动画
 参数：
 node 运动谁？  节点对象  必填
 targetValue   目标值   必填
 callback  一个物体运动完之后要执行的代码  函数 可选
 */
function animate(node,targetValue,callback){
  //var flag
  //时间：定时器
  //状态：更改div的状态（更改left值）
  //点击按钮会产生一个新的定时器，新的定时器产生之前，把之前的定时器停止了。
  if(node.flag!=undefined){ //给每一个运动物体添加 一个flag属性表示这个运动物体的定时器标识
    clearInterval(node.flag); //把之前的定时器停止了。
  }
  //给每一个运动物体添加一个定时器标识
  node.flag = setInterval(function(){

    //原有的left值
    var currentValue = node.offsetLeft;
    //步长
    var step;
    //判断步长是正5 还是-5
    //targetValue →b   currentValue→a

    if(currentValue>targetValue){
      step = -5;
    }else if(currentValue<targetValue){
      step = 5;
    }

    //判断是否到达目标
    if(currentValue==targetValue){ //到达目标
      clearInterval(node.flag);//结束定时器,下一时间后定时器不在执行]
      if(callback!=undefined){
        callback();
      }
      return;//结束函数的执行
    }
    node.style.left = currentValue + step + 'px';
  },30);
}
