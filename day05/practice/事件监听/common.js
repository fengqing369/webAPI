//兼容处理 绑定事件监听
function myaddEvent(node,name,fn){
  if(node.addEventListener == undefined){
    node.attachEvent('on'+ name,fn);
  }else{
    node.addEventListener(name,fn);
  }
}


//兼容处理 解绑事件监听
function mymoveEvent(node,name,fn){
  if(node.removeEventListener == undefined){
    node.detachEvent('on' + name,fn);
  }else{
    node.removeEventListener(name,fn);
  }
}