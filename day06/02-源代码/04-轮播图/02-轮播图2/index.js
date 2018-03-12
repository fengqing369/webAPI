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
    var temp = count; //代表控制小圆点按钮的位置
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


    if(temp==7){
      temp = 0;
    }
    //更改对应的小圆点的样式
    for(var i = 0;i<lis.length;i++){
      lis[i].className = '';
    }
    lis[temp].className = 'active';
    console.log(temp)
  }
};


//问题：切换小圆点样式无效
//原因：小圆点和切换项没有同步
//解决：通过count标识同步小圆点


