/**
 * Created by Bruce on 2017/12/24.
 */

/*
  ���ܣ����¼�
  ������
      node �¼�Դ, �ڵ����
      eventName �¼���, �ַ��� ����on     click
      handler �¼�������� ������
*/
function myAddEvent(node,eventName,handler){
  //��׼���¼�Դ.addEventListener(�¼�����,�¼��������);
  //IE���¼�Դ.attachEvent(�¼�����,�¼��������);i
  if(node.addEventListener==undefined){
    //IE
    node.attachEvent('on' + eventName,handler);
  }else {
    //��׼
    node.addEventListener(eventName,handler);
  }
}

/*
 ���ܣ�����¼�
 ������
 node �¼�Դ, �ڵ����
 eventName �¼���, �ַ��� ����on     click
 handler �¼�������� ������
 */
function myRemoveEvent(node,eventName,handler){
  //��׼���¼�Դ.removeEventListener(�¼�����,�¼��������);
  //IE���¼�Դ.detachEvent(�¼�����,�¼��������);i
  if(node.removeEventListener==undefined){
    //IE
    node.detachEvent('on' + eventName,handler);
  }else {
    //��׼
    node.removeEventListener(eventName,handler);
  }
}
