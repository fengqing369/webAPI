/**
 * Created by Bruce on 2017/12/18.
 */

/*
  ���ܣ���ָ���Ľڵ�����趨�ı�����
  ������
    node ָ���Ľڵ����  Node�ڵ����
    content �ı�����    string
  ����ֵ����
*/
function setText(node,content){
  if(node.innerText==undefined){
    //��֧��
    node.textContent = content;
  }else{
    node.innerText = content;
  }
  node.innerText = content;
}

/*
  ���ܣ���ȡ��ǩ֮����ı����������ı�
  ������
    node һ���ڵ����
  ����ֵ���� �ַ���
*/
function getText(node){
  if(node.innerText==undefined){
    return node.textContent;
  }else {
    return node.innerText;
  }

}

/*
  ���ܣ�����id��ȡ�����ڵ����
  ������
    id idֵ string
  ����ֵ���� ����һ���ڵ����
*/
function $(id){
  return document.getElementById(id);
}

/*
 ���ܣ�����id��ȡ�����ڵ����
 ������
 id idֵ string
 ����ֵ���� ����һ���ڵ����
 */
function $TN(tagName){
  return document.getElementsByTagName(tagName);
}


