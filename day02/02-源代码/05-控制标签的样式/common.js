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
