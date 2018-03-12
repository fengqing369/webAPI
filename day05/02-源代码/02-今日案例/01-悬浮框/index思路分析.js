/**
 * Created by Bruce on 2017/12/24.
 */

//① 获取今日团box2 div节点对象
//② 获取在今日团没有定位之前距离文档顶部间距  今日团div.offsetTop
//③ 给window绑定滚动条滚动事件 onscroll
//④ 在滚动事件中，做判断。当前被卷去的距离  和 今日团div.offsetTop比较    如果当前被卷去的距离 >=今日团div.offsetTop 让今日团这个div固定定位（加active类名）。否则恢复今日团原有的样式（去掉active）

