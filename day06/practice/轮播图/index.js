//获取元素
var rightBtn = document.getElementById('rightBtn');
var leftBtn = document.getElementById('leftBtn');
var content = document.getElementById('content');
var control = document.getElementById('control');
var lis = control.children;
var banner = document.getElementById('banner');
var index = 0;//设置位置索引值

var flag = true;
var temp;
//点击右按钮
rightBtn.onclick = function(){
  if(flag){
    flag = false;
    index++;
    temp = index;
    var targetValue = index * -790;
    animate(content,targetValue,function(){
      if(index == 7){
        content.style.left = 0;
        index = 0;
      }
      flag = true;
    });

    if(index == 7){
      temp = 0;
    }
    //小圆点
    for(var i = 0;i<lis.length;i++){
      lis[i].className = "";
    }
    lis[temp].className = "active";
  }
}

//点击左按钮
leftBtn.onclick = function(){
  if(flag){
    flag = false;
    index--;
    if(index < 0){
      content.style.left = "-5530px";
      index = 6;
    }
    var targetValue = index * -790;
    temp = index;
    animate(content,targetValue,function(){
      flag = true;
    });
    //小圆点
    for(var i = 0;i<lis.length;i++){
      lis[i].className = "";
    }
    lis[temp].className = "active";
  }
}

//点击小圆点
for(var i = 0;i < lis.length;i++){
  lis[i].weizhi = i;
}
control.onclick = function(e){
  var e = e || window.event;
  var t = e.target || e.srcElement;
  if(t.tagName == "LI"){
    index = t.weizhi;
    var targetValue = index * -790;
    animate(content,targetValue);
    for(var j = 0;j < lis.length;j++){
      lis[j].className = "";
    }
    lis[index].className = "active";
  }
}

//自动轮播
var timer;
function autoPlay(){
  timer = setInterval(function(){
    rightBtn.onclick();
  },2000);
}
autoPlay();

banner.onmouseenter = function(){
  clearInterval(timer);
};
banner.onmouseleave = function(){
  autoPlay();
}


  
