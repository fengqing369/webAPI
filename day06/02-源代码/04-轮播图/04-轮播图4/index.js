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


/*----------------------------------------*/
//二.功能2：点击左侧按钮实现轮播
//① 给左侧按钮绑定点击事件
leftBtn.onclick = function(){
  if(lock){
    lock = false;
    //② 在事件中更改标识count--
    count--;
    if(count<0){
      content.style.left = '-5530px';
      count = 6;
    }
    //③ 根据count计算目标值
    var targetValue = count * -790;

    //④ 实现动画 animate
    var temp = count;
    animate(content,targetValue,function(){
      lock = true;
    });
    console.log(count);
    //更改对应的小圆点的样式
    for(var i = 0;i<lis.length;i++){
      lis[i].className = '';
    }
    lis[temp].className = 'active';
  }

};

//三.功能3：点击小圆点按钮实现轮播
//给每一个li加一个属性位置
for(var j = 0;j<lis.length;j++){
  lis[j].weizhi = j;
}
//① 给ul绑定点击事件，让所有li都委托给ul
controlUl.onclick = function(e){
  var _e = window.event||e;
  var _t = _e.target||_e.srcElement;
  //② 通过事件对象中target检测是否点击了li
  if(_t.tagName=='LI'){

    //③ 判断当前是第几个li,计算目标值，同步count
    //_t代表li
    console.log(_t.weizhi);
    count = _t.weizhi; //同步count
    var temp = count;
    var targetValue = count * -790;
    //④ 运动
    animate(content,targetValue);
    //更改对应的小圆点的样式
    for(var i = 0;i<lis.length;i++){
      lis[i].className = '';
    }
    lis[temp].className = 'active';

  }


};




