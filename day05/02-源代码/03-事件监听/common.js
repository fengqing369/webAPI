/**
 * Created by Bruce on 2017/12/24.
 */

/*
  功能：绑定事件
  参数：
      node 事件源, 节点对象
      eventName 事件名, 字符串 不加on     click
      handler 事件处理程序 ，函数
*/
function myAddEvent(node,eventName,handler){
  //标准：事件源.addEventListener(事件类型,事件处理程序);
  //IE：事件源.attachEvent(事件类型,事件处理程序);i
  if(node.addEventListener==undefined){
    //IE
    node.attachEvent('on' + eventName,handler);
  }else {
    //标准
    node.addEventListener(eventName,handler);
  }
}

/*
 功能：解绑事件
 参数：
 node 事件源, 节点对象
 eventName 事件名, 字符串 不加on     click
 handler 事件处理程序 ，函数
 */
function myRemoveEvent(node,eventName,handler){
  //标准：事件源.removeEventListener(事件类型,事件处理程序);
  //IE：事件源.detachEvent(事件类型,事件处理程序);i
  if(node.removeEventListener==undefined){
    //IE
    node.detachEvent('on' + eventName,handler);
  }else {
    //标准
    node.removeEventListener(eventName,handler);
  }
}
