/*
 功能：动画
 参数：
 node  运动哪个元素节点
 targetValue  目标值
 callback  回调函数，当运动到达目标时执行
 */
function animate(node,targetValue,callback){
  //产生新的定时器前先把原有的定时器清除，包证只有一个定时器。
  if(node.num!=undefined){
    clearInterval(node.num);
  }
  //设定步长（每间隔多长时间更改多少）
  var step;
  //设定运动的目标值
  //产生一个定时器,并接收定时器的标识给每个运动物体对象的num属性
  node.num = setInterval(function(){
    //先获取盒子原有的left值
    var v = node.offsetLeft;
    //设定步长：根据目标值和当前值的对比，设定步长为正值 或 负值
    step = (targetValue-v)/20;
    if(step>0){
      step = Math.ceil(step); //保证步长若为（0,1）之间的小数时，步长值取整为1
    }else{
      step = Math.floor(step);//保证步长若为（-1,0）之间的小数时，步长值取整为-1
    }
    //判断是否已经到达目标，若到达则停止定时器并且结束后面代码的执行
    if(v==targetValue){
      clearInterval(node.num); //停止定时器
      //回调函数的执行
      if(callback!=undefined){
        callback();
      }
      return; //结束后面代码的执行
    }
    //更改盒子的left值
    node.style.left =v + step + 'px';
  },10);
}
