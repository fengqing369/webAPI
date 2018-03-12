/*
  思路：
    第一步：获取要操作的节点对象  content、左右按钮、一组li节点对象
    第二步：声明一个全局变量index 标识当前显示的第几个图片（从0开始）
    第三步：给右侧按钮绑定点击事件【干什么？】index++    求出content要运动的目标值index * -790  。用animate实现动画效果
    第四步：给左侧按钮绑定点击事件【干什么？】index--    求出content要运动的目标值index * -790  。用animate实现动画效果
    第五步：循环遍历每一个li【小点点按钮】绑定onclick事件，给每一个li【小点点按钮】添加下标

   第六步：根据li的num的值，确定content运动的目标值。然后用animate实现动画效果
   第七步：给banner绑定onmosuseenter事件，实现停止自动轮播
   第八步：给banner绑定onmosuseleave事件，开始自动轮播
*/
//第一步：获取要操作的节点对象  content、左右按钮、一组li节点对象
var contentNode = document.querySelector('.content');
var leftBtnNode = document.querySelector('.leftBtn');
var rightBtnNode = document.querySelector('.rightBtn');
var lisNode = document.querySelectorAll('.banner li');
var bannerNode = document.querySelector('.banner');

//第二步：声明一个全局变量index 标识当前显示的第几个图片（从0开始）
var index = 0;
//第三步：给右侧按钮绑定点击事件【干什么？】index++    求出content要运动的目标值index * -790  。用animate实现动画效果\
var lock = true; //开
rightBtnNode.onclick = function(){
  if(lock){
    lock = false;//关
    index++; //变换控制显示那一个内容项的索引【控制运动的目标值】
    var targetValue = index * -790;//目标值
    var temp = index;//第三方变量
    animate(contentNode,targetValue,function(){
      //先运动完追加的最有一个，再闪现第一个
      if(temp==7){ //闪现到最前面
        contentNode.style.left = 0 + 'px';
      }
      lock = true; //完事儿
    });
    if(index==7){
      index = 0;
    }
    for(var j = 0;j<lisNode.length;j++){
      lisNode[j].className = '';
    }
    lisNode[index].className = 'active';
  }



};
//第四步：给左侧按钮绑定点击事件【干什么？】index--    求出content要运动的目标值index * -790  。用animate实现动画效果\
leftBtnNode.onclick = function(){
  if(lock){
    lock = false;//关
    index--; //变换控制显示那一个内容项的索引【控制运动的目标值】
    if(index<0){
      index = 6;
      //先闪现到最后追加的那一个，然后再运动到倒数第二个
      contentNode.style.left = 7 * -790 + 'px';
    }
    var targetValue = index * -790;//目标值
    var temp = index;//第三方变量
    animate(contentNode,targetValue,function(){
      lock = true; //完事儿
    });

    for(var j = 0;j<lisNode.length;j++){
      lisNode[j].className = '';
    }
    lisNode[index].className = 'active';
  }

};

//第五步：循环遍历每一个li【小点点按钮】绑定onclick事件，给每一个li【小点点按钮】添加下标
for(var i = 0;i<lisNode.length;i++){
  lisNode[i].num = i;
  lisNode[i].onclick = function(){
    //alert(this.num);
    index = this.num; //和左右按钮控制同步
    var targetValue = this.num * -790;//目标值
    animate(contentNode,targetValue,10);
    for(var j = 0;j<lisNode.length;j++){
      lisNode[j].className = '';
    }
    this.className = 'active';
  };
}
//第七步：给banner绑定onmouseenter事件，实现停止自动轮播
bannerNode.onmouseenter = function(){
  clearInterval(flag100)
};
// 第八步：给banner绑定onmosuseleave事件，开始自动轮播
bannerNode.onmouseleave = function(){
  autoPlay();
};
var flag100; //自动轮播的定时器的标识
//功能：自动轮播
function autoPlay(){
  flag100 = setInterval(function(){
    rightBtnNode.onclick(); //通过代码触发右侧按钮点击事件
  },2000);
}
autoPlay();

//问题？→原因→调试（经验）→知识点运用解决问题

