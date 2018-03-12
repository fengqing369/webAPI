/**
 * Created by Bruce on 2017/12/26.
 */
//准备：获取要操作的节点对象
var leftBtn = document.getElementById('leftBtn');
var rightBtn = document.getElementById('rightBtn');
var content = document.getElementById('content');
var controlUl = document.getElementById('control');
var lis = controlUl.children;
var banner = document.getElementById('banner');
var count = 0;  //当前显示哪一项的标识


/*-------------------------------*/

//一.功能1：点击右侧按钮实现轮播
//① 给右侧按钮绑定点击事件
var lock = true;  //默认是true表示是有效的，false→无效
rightBtn.onclick = function(){
  if(lock){
    lock = false; //先把门锁一下
    //② 在事件中更改标识count++
    count++;
    //③ 根据count计算目标值
    var targetValue = count * -790;
    //④ 实现动画 animate
    animate(content,targetValue,function(){
      //判断count是否==7
      if(count==7){
        content.style.left = 0;
        count=0;
      }
      //alert('上完了');
      lock = true;
    });
    console.log(count);
  }
};


//问题：疯狂点击右侧按钮时，count无限制自增，虽然在动画中写了限制，但是这个限制这能在动画完的时候，才能被限制
//原因：这个限制这能在动画完的时候，才能被限制
//解决方法： 点击右侧按钮有效时，必须等动画运动完。没有运动完点击按钮无效。  设定一个全局变量lock表示锁，控制按钮点击是否有效


