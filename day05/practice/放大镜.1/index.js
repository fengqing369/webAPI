//获取元素
var _leftBox = document.getElementById('_leftBox');
var _tool = document.getElementById('_tool');
var _rightBox = document.getElementById('_rightBox');
var _bImg = document.getElementById('_bImg');

//设置鼠标移入左边盒子内时的事件
_leftBox.onmouseenter = function(){
  //小黄盒子、右边盒子显示
  _tool.className = 'tool active';
  _rightBox.className = 'rightBox active';
  //设置鼠标在左边盒子内移动时的事件
  _leftBox.onmousemove = function(e){
    //设置鼠标移动时的事件对象
    var e = e || window.event;
    //获取鼠标移动时的在浏览器中的位置值
    var x1 = e.clientX;
    var y1 = e.clientY;
    //获取小黄盒子相对鼠标的中心位置值
    var x = x1 - _leftBox.offsetLeft - _tool.offsetWidth/2;
    var y = y1 - _leftBox.offsetTop - _tool.offsetHeight/2;
    //设置小黄盒子的移动最小范围
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    //设置小黄盒子的移动最大范围
    if(x > _leftBox.offsetWidth - _tool.offsetWidth){
      x = _leftBox.offsetWidth - _tool.offsetWidth;
    }
    if(y > _leftBox.offsetHeight - _tool.offsetHeight){
      y = _leftBox.offsetHeight - _tool.offsetHeight;
    }
    //获取小黄盒子的移动范围
    _tool.style.left = x + "px";
    _tool.style.top = y + "px";

    //设置右边图片的移动范围
    _bImg.style.left = -x*(_bImg.offsetWidth/_tool.offsetWidth) + "px";
    _bImg.style.top = -y*(_bImg.offsetHeight/_tool.offsetHeight) + "px";
  }
}

//设置鼠标移出左边盒子内时的事件
_leftBox.onmouseleave = function(){
  //小黄盒子、右边盒子隐藏
  _tool.className = 'tool';
  _rightBox.className = 'rightBox';
}