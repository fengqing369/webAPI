
//获取元素
//左边小盒子
var _leftBox = document.getElementById('_leftBox');
//小黄盒子
var _tool = document.getElementById('_tool');
//右边大盒子
var _rightBox = document.getElementById('_rightBox');
//右边大图片
var _bImg = document.getElementById('_bImg');

//设置鼠标移入事件
_leftBox.onmouseenter = function(){
  //小黄盒子、右边大图片显示
  _tool.className = "tool active";
  _rightBox.className = "rightBox active";
  //设置鼠标移动事件
  _leftBox.onmousemove = function(e){
    //获取事件对象
    var e = e || window.event;
    //设置鼠标在浏览器坐标
    var x1 = e.clientX;
    var y1 = e.clientY;
    // console.log(t);
    //鼠标在小黄盒子中心时，小黄盒子移动的距离
    var x = x1 - _leftBox.offsetLeft - _tool.offsetWidth/2;
    var y = y1 - _leftBox.offsetTop - _tool.offsetHeight/2;
    //设置小黄盒子移动最小距离
    x = x < 0 ? 0 : x;
    y = y < 0 ? 0 : y;
    //设置小黄盒子移动最大距离
    if(x > _leftBox.offsetWidth - _tool.offsetWidth){
      x = _leftBox.offsetWidth - _tool.offsetWidth;
    }
    if(y > _leftBox.offsetHeight - _tool.offsetHeight){
      y = _leftBox.offsetHeight - _tool.offsetHeight;
    }
    //获取小黄盒子跟随鼠标移动时的运动范围
    _tool.style.left = x + "px";
    _tool.style.top = y + "px";

    //设置右边图片移动时的运动方向及范围
    _bImg.style.left = -x*(_bImg.offsetWidth/_leftBox.offsetWidth) + "px";
    _bImg.style.top = -y*(_bImg.offsetHeight/_leftBox.offsetHeight) + "px";
    
  }
}
  //设置鼠标移出事件
  _leftBox.onmouseleave = function(){
    //小黄盒子、右边大图片隐藏
    _tool.className = "tool";
    _rightBox.className = "rightBox";
  }
