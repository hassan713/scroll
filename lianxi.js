/*
⚠️ ⚠️ ⚠️ 
- 当满足 : 滚动区域的高度 - 垂直滚动的距离 == 元素的可见高度
  scrollHeight - scrollTop == clientHeight ;
  这个事件 意味着 滚动条 滚动到底 ;

- element.clientWidth
- element.clientheight
  这两个属性可以获取 当前 元素的 可见 高度和宽度 ;
  包括内容区 和 内边距 ; 但是 不包括 边框 border ; 
  这些 属性都不带 px;返回都是一个数字;可以进行计算 ;
  这些 属性 只能读 ，不能 修改 ;
- element.offsetWidth
- element.offsetHeight
  这两个属性可以获取 元素的 整个 高度和宽度 ;
  包括内容区 和 内边距 边框 border ;
- element.offsetParent
  可以用来 获取 当前元素的 定位 父元素 ;
  会获取到离当前元素最近的开启了 定位(position)的祖先元素 ;
  如果 所有的祖先元素没有开启定位，它返回的是 body  ;
- element.offsetLeft;
  当前元素相对于其 定位(position)元素的 水平 偏移量 ;
- element.offsetTop ;
  当前元素相对于其 定位(position)元素的 垂直 偏移量 ;
⚠️ ⚠️ ⚠️
- element.scrollWidth;
  element.scrollHeight;
  可以获取 元素的 整个滚动 区域的 高度，宽度
- element.scrollLeft;
  可以获取 水平滚动条 滚动的距离 ;
  element.scrollTop;
  可以获取 垂直 滚动条 滚动的距离 ;

*/

window.onload = function () {

	var uqur01 = document.getElementById("uqur");
	var input01 = document.getElementsByTagName("input");
	uqur01.onscroll = function () {
		/*
		查看(判断)垂直滚动条是否 滚动到底 ;
		uqur01 == this 
		*/
		if(uqur01.scrollHeight - uqur01.scrollTop == uqur01.clientHeight){
			//alert("滚到底儿了")
			/*
			disabled 属性可以设置一个元素 是否 禁用 ;
			设置为 true  则 元素 禁用 ;
			设置为 false 则 元素 可用 ; 
			*/
			input01[0].disabled = false;
			input01[1].disabled = false;
			input01[1].style.backgroundColor = "green";
			input01[1].style.width = "100px";
			
		}

	}
}