function animate(node,target,callback){

  if(node.timer != undefined){
    clearInterval(node.timer);
  }
  node.timer = setInterval(function(){
    var current = node.offsetLeft;
    var temp = (target-current)/20;
    if(temp > 0){
      temp = Math.ceil(temp);
    }else if(temp < 0){
      temp = Math.floor(temp);
    }
  
    if(current == target){
      clearInterval(node.timer);
      if(callback != undefined){
        callback();
      }
      return;
    }
    node.style.left = current + temp + "px";
  },10);
}