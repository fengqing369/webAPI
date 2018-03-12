/**
 * Created by Bruce on 2017/12/18.
 */

/*
  功能：给指定的节点对象设定文本内容
  参数：
    node 指定的节点对象  Node节点对象
    content 文本内容    string
  返回值：无
*/
function setText(node,content){
  if(node.innerText==undefined){
    //不支持
    node.textContent = content;
  }else{
    node.innerText = content;
  }
  node.innerText = content;
}

/*
  功能：读取标签之间的文本，仅仅是文本
  参数：
    node 一个节点对象
  返回值：有 字符串
*/
function getText(node){
  if(node.innerText==undefined){
    return node.textContent;
  }else {
    return node.innerText;
  }

}

/*
  功能：根据id获取单个节点对象
  参数：
    id id值 string
  返回值：有 返回一个节点对象
*/
function $(id){
  return document.getElementById(id);
}

/*
 功能：根据id获取单个节点对象
 参数：
 id id值 string
 返回值：有 返回一个节点对象
 */
function $TN(tagName){
  return document.getElementsByTagName(tagName);
}


