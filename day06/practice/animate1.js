function animate(node,target,callback){

  if(node.timer != undefined){
    clearInterval(node.timer);
  }
  var temp;
  node.timer = setInterval(function(){
    var current = node.offsetLeft;
    if(temp > 0){
      temp = Math.ceil((target-current)/20);
    }else{
      temp = Math.floor((target-current)/20);
    }
  
    if(current == target){
      clearInterval(node.timer);
      if(callback != undefined){
        callback();
        return;
      }
    }
    node.style.left = current + temp + "px";
  },10);
}