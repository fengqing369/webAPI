/**
 * Created by Bruce on 2017/12/20.
 */

/*
  ���ܣ���ȡָ���ڵ�����ָ����ʽ����ֵ
  ������
    node  �ڵ����
    pName ��ʽ������ string
*/
function myGetStyle(node,pName){
  var styleObj; //���Ի�ȡ��ʽ����ֵ�Ķ���
  if(node.currentStyle==undefined){ //�ڷ�IE�������ʹ��
    styleObj = getComputedStyle(node,null);
  }else { //��IE�������ʹ��
    styleObj = node.currentStyle;
  }
  //���Ҫ��ĳ��������������������ʱ��Ҫ�õ�ķ�ʽ������ѡ����������
  return styleObj[pName];
}
