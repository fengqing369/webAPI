/**
 * Created by Bruce on 2017/12/20.
 */

/*
  功能：获取指定节点对象的指定样式属性值
  参数：
    node  节点对象
    pName 样式属性名 string
*/
function myGetStyle(node,pName){
  var styleObj; //可以获取样式属性值的对象
  if(node.currentStyle==undefined){ //在非IE浏览器下使用
    styleObj = getComputedStyle(node,null);
  }else { //在IE浏览器中使用
    styleObj = node.currentStyle;
  }
  //如果要把某个变量当做属性名，此时不要用点的方式，而是选择用中括号
  return styleObj[pName];
}

/*
 功能：计算任意的两个时间差 【扩展】
 参数：
 s 开始的时间  Date类型对象
 e 结束的时间 Date类型的对象
 返回值：有，返回的是一个对象
 */
function getTimeDiff(s,e){
  //① 先创建两个日期对象
  var start = s;  //现在的时间
  var end = e;  //结束时间

  //② 两个日期（对象）相减
  //var time = end-start;
  var time = end.getTime()- start.getTime(); //相差的总毫秒
  var hours = parseInt(time/1000/60/60); //24
  var minutes = parseInt(time/1000/60%60); //零多少分钟
  var seconds = parseInt(time/1000%60);//零多少秒
  var milliSeconds = time%1000;
  hours = hours<10?'0' + hours:hours;
  minutes = minutes<10?'0' + minutes:minutes;
  seconds = seconds<10?'0' + seconds:seconds;
  //return 数据
  //return [hours,minutes,seconds,milliSeconds];
  return {
    hours:hours,
    minutes:minutes,
    seconds:seconds,
    milliSeconds:milliSeconds
  };

}

