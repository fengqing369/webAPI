/**
 * Created by Bruce on 2017/12/26.
 */

/*
 ���ܣ�����
 ������
 node �˶�˭��  �ڵ����
 targetValue   Ŀ��ֵ
 */
function animate(node,targetValue){
  //var flag
  //ʱ�䣺��ʱ��
  //״̬������div��״̬������leftֵ��
  //�����ť�����һ���µĶ�ʱ�����µĶ�ʱ������֮ǰ����֮ǰ�Ķ�ʱ��ֹͣ�ˡ�
  if(node.flag!=undefined){ //��ÿһ���˶�������� һ��flag���Ա�ʾ����˶�����Ķ�ʱ����ʶ
    clearInterval(node.flag); //��֮ǰ�Ķ�ʱ��ֹͣ�ˡ�
  }
  //��ÿһ���˶��������һ����ʱ����ʶ
  node.flag = setInterval(function(){

    //ԭ�е�leftֵ
    var currentValue = node.offsetLeft;
    //����
    var step;
    //�жϲ�������5 ����-5
    //targetValue ��b   currentValue��a

    if(currentValue>targetValue){
      step = -5;
    }else if(currentValue<targetValue){
      step = 5;
    }

    //�ж��Ƿ񵽴�Ŀ��
    if(currentValue==targetValue){ //����Ŀ��
      clearInterval(node.flag);//������ʱ��,��һʱ���ʱ������ִ��
      
      return;//����������ִ��
    }
    node.style.left = currentValue + step + 'px';
  },30);
}
