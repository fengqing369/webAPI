/**
 * Created by Bruce on 2017/12/24.
 */
/*
 第一件事：实现隐藏和显示
 */
//① 获取要操作的节点对象 div.leftBox  div.tool  div.rightBox
var _leftBox = document.getElementById('_leftBox');
var _tool = document.getElementById('_tool');
var _rightBox = document.getElementById('_rightBox');
var _bImg = document.getElementById('_bImg');

//② 给div.leftBox 绑定鼠标进入和离开事件（onmouseenter onmouseleave）
_leftBox.onmouseenter = function(){
  //③ 在onmouseenter事件中，显示小黄盒子div.tool 和 右侧大的盒子 div.rightBox （加类名 active）
  _tool.className = 'tool active';
  _rightBox.className = 'rightBox active';
};
_leftBox.onmouseleave = function(){
  //④ 在onmouseleave事件中，隐藏小黄盒子div.tool 和 右侧大的盒子 div.rightBox （去掉类名 active）
  _tool.className = 'tool';
  _rightBox.className = 'rightBox';
};
/*
 第二件事：实现小黄盒子div.tool跟着鼠标移动
 */
//⑤ 给div.leftBox 绑定一个鼠标移动事件onmosuemove
_leftBox.onmousemove  = function(e){
  //⑥ 在鼠标移动事件中，根据鼠标的移动获取鼠标相对于浏览器的的坐标，根据当前鼠标的坐标，计算出小黄盒子的位置
  var _e = window.event||e; //事件对象
  var x = _e.clientX - _leftBox.offsetLeft -_tool.offsetWidth/2;
  var y = _e.clientY - _leftBox.offsetTop-_tool.offsetHeight/2;
  //控制x和y值的边界
  x=x<0?0:x;
  y=y<0?0:y;

  if(x>_leftBox.offsetWidth-_tool.offsetWidth){
    x = _leftBox.offsetWidth-_tool.offsetWidth;
  }

  if(y>_leftBox.offsetHeight-_tool.offsetHeight){
    y=_leftBox.offsetHeight-_tool.offsetHeight;
  }


  //更改小黄盒子的left 和 top
  _tool.style.left = x + 'px';
  _tool.style.top = y + 'px';
  console.log(_leftBox.offsetLeft);

  /*
   第三件事情：小黄盒子移动的时候，右侧大盒子中大图片应当向相反的方向走2倍的间距
   */

  //⑦ 在移动事件中，更改谁大图片的left 和 top值
  _bImg.style.left = -2 * x + 'px';
  _bImg.style.top = -2 * y + 'px';
};




