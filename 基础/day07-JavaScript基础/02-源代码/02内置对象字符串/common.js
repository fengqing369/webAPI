/**
 * Created by Bruce on 2017/12/17.
 */

/*
  功能：排序
  参数：
    sz 一个数组  Array
    callback 一个函数  用来定义排序的规则（从小到大或从大到小）
  返回值：没有
*/
function mySort(sz){
  var arr = sz;
  //外层循环控制趟数
  for(var tang = 1;tang<arr.length;tang++){
    //内层循环控制每趟比较的次数
    for(var count = 1;count<=arr.length-tang;count++){
      //判断交换
      if(arr[count-1]>arr[count]){
        var temp = arr[count];
        arr[count] = arr[count-1];
        arr[count-1] = temp;
      }
    }
  }
}

function mySort2(sz,callback){
  var arr = sz;
  //外层循环控制趟数
  for(var tang = 1;tang<arr.length;tang++){
    //内层循环控制每趟比较的次数
    for(var count = 1;count<=arr.length-tang;count++){
      //arr[count-1] a  和 arr[count] b

      //判断交换
      var v = callback(arr[count-1],arr[count]); //调用
      if(v>0){//大于0  等于0  小于0
        var temp = arr[count];
        arr[count] = arr[count-1];
        arr[count-1] = temp;
      }
    }
  }
}