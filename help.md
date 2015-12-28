# 下拉刷新
## 使用方法
打开index.html页面，即可体验下拉刷新，其中的index.js为插件源码和使用方法案例。该下拉插件是作为jquery的插件来实现的。
1、 引入css文件，
```css
@keyframes myfirst
{
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);}
	25%   {
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-o-transform: rotate(90deg);}
	50%  {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);}
	75%  {
		-webkit-transform: rotate(270deg);
		-moz-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		-o-transform: rotate(270deg);}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);}
}

@-moz-keyframes myfirst /* Firefox */
{
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);}
	25%   {
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-o-transform: rotate(90deg);}
	50%  {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);}
	75%  {
		-webkit-transform: rotate(270deg);
		-moz-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		-o-transform: rotate(270deg);}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);}
	25%   {
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-o-transform: rotate(90deg);}
	50%  {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);}
	75%  {
		-webkit-transform: rotate(270deg);
		-moz-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		-o-transform: rotate(270deg);}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);}
}

@-o-keyframes myfirst /* Opera */
{
	0% {
		-webkit-transform: rotate(0deg);
		-moz-transform: rotate(0deg);
		-ms-transform: rotate(0deg);
		-o-transform: rotate(0deg);}
	25%   {
		-webkit-transform: rotate(90deg);
		-moz-transform: rotate(90deg);
		-ms-transform: rotate(90deg);
		-o-transform: rotate(90deg);}
	50%  {
		-webkit-transform: rotate(180deg);
		-moz-transform: rotate(180deg);
		-ms-transform: rotate(180deg);
		-o-transform: rotate(180deg);}
	75%  {
		-webkit-transform: rotate(270deg);
		-moz-transform: rotate(270deg);
		-ms-transform: rotate(270deg);
		-o-transform: rotate(270deg);}
	100% {
		-webkit-transform: rotate(360deg);
		-moz-transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		-o-transform: rotate(360deg);}
}

.visc_pullUpIcon{
	background: url(../images/pull-icon@2x.png) 0 0 no-repeat;
    background-size: 40px 80px;
    display: inline-block;
    min-width: 40px;
    min-height: 40px;

transition: transform 0.2s;
-moz-transition: transform 0.2s; /* Firefox 4 */
-webkit-transition: transform 0.2s; /* Safari 和 Chrome */
-o-transition: transform 0.2s; /* Opera */
}

#wx_pullDown{
	height: 40px;
	text-align: center;
}

.visc_pullUpDiv{
    text-align: center;
    display: inline-block;
    line-height: 36px;
    vertical-align: top;
    height: 40px;
}

.wx_pullLoading{
	z-index: -1; 
	width: 100%; 
	position: absolute; 
}

.wx_refresh{
    transform:rotate(180deg);
-ms-transform:rotate(180deg); 	/* IE 9 */
-moz-transform:rotate(180deg); 	/* Firefox */
-webkit-transform:rotate(180deg); /* Safari 和 Chrome */
-o-transform:rotate(180deg); 	/* Opera */

}

.wx_loading{
    background-position-y:-40px;
    
    animation: myfirst 1s linear 0s infinite normal
	/* Firefox: */
	-moz-animation: myfirst 1s linear 0s infinite normal;
	/* Safari 和 Chrome: */
	-webkit-animation: myfirst 1s linear 0s infinite normal;
	/* Opera: */
	-o-animation: myfirst 1s linear 0s infinite normal;
}
```
下面是页面文件的布局（外面的布局保持不变）：
``` html
<div class="wx_pullLoading">
    <div id="wx_pullDown" style="padding-top:0.44rem"><span class="visc_pullUpIcon"></span><div class="visc_pullUpDiv"><span class="visc_pullUpLabel">下拉刷新</span></div></div>
	<div class="qlbg" style="position:static">
    	<!--里面放需要下拉刷新的区域-->
    </div>
</div>
```
2、 引入js文件
引入js文件后就可以用下面的代码来使用下拉刷新：
```js
$(".wx_pullLoading").wx_refresh({pullDown:function(initLoading){
        console.log("pullDownFunction");
        
        //数据获取完毕后调用pullDown的参数（initLoading）来通知下拉插件
        setTimeout(initLoading,5000);
    }});
```
其中pullDown为下拉通知的回调函数，用户可以在里面进行数据获取等操作，当数据处理完之后，调用改回调函数的传参来初始化下拉刷新的样式（相当于刷新完成的通知）。
## 已知问题
1、 qq浏览器下不能从下拉刷新状态切换到向下滚动的状态。
## 联系我
邮箱：<ivanwonder@outlook.com>