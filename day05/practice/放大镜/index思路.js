/**
 * Created by Bruce on 2017/12/24.
 */
/*
  第一件事：实现隐藏和显示
*/
//① 获取要操作的节点对象 div.leftBox  div.tool  div.rightBox  img#_bImg大图片
//② 给div.leftBox 绑定鼠标进入和离开事件（onmouseenter onmouseleave）
//③ 在onmouseenter事件中，显示小黄盒子div.tool 和 右侧大的盒子 div.rightBox （加类名 active）

//④ 在onmouseleave事件中，隐藏小黄盒子div.tool 和 右侧大的盒子 div.rightBox （去掉类名 active）


/*
  第二件事：实现小黄盒子div.tool跟着鼠标移动
*/
//⑤ 给div.leftBox 绑定一个鼠标移动事件onmosuemove

//⑥ 在鼠标移动事件中，根据鼠标的移动获取鼠标相对于浏览器的的坐标，根据当前鼠标的坐标，计算出小黄盒子的位置


/*
  第三件事情：小黄盒子移动的时候，右侧大盒子中大图片应当向相反的方向走2倍的间距
    关键：比例问题
    小图片和大图片： 1比2
    小黄盒子和右侧大盒子： 1比2
*/
//⑦ 在移动事件中，更改谁大图片的left 和 top值

