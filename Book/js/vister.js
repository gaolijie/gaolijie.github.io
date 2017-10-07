/*函数初始化工作*/
$(function(){
	widAndHei('.main'); //页面自适应屏幕
	currentTime(); //当前时间
	shouCang('.shoucang'); //收藏本站
	updown(); //上拉下拉图标
});

function widAndHei(obj){
	/*初始宽高*/
	$(obj).width($(window).width());
	$(obj).height($(window).height());
	
	/*窗口变化时大小*/
	$(window).resize(function(){
		$(obj ).width($(window).width());
		$(obj).height($(window).height());
	});
}

//获取当前的时间
function currentTime(){
	var today=new Date();//获取时间对象
	
	var y=today.getFullYear();//年
	var mo=today.getMonth()+1; //月
	var d=today.getDate();  //日
	
	var h=today.getHours(); //小时
	var m=today.getMinutes(); //分钟
	var s=today.getSeconds(); //秒
											//显示到id为currentTime上面
	document.getElementById('currentTime').innerHTML=mo+"月"+d+"日"+h+":"+m+":"+s;
	setTimeout('currentTime()',1000); //1秒刷新一次
}

//加入收藏页
function shouCang(obj){
	$(obj).click(function(){
		alert('亲爱的书友\n为了您的便利，请使用Ctrl+D进行添加');
	});
}

//左侧上拉下拉图标切换
function updown(){
	$(".tools-s").click(function(){
		if($('.tools-s-1').is(':visible')){
			$('.tools-s-2').show();
	    	$('.tools-s-1').hide();
	    	$('.tools-x').slideDown();
		}else{
	    	$('.tools-s-1').show();
	    	$('.tools-s-2').hide();
	    	$('.tools-x').slideUp();
		}
	});
}

//打印屏幕
function print(){
	$(".main").jqprint();
}

function zslx(){
	$('.right').find('#mainFrame').attr('src','rodeMap.html');
}
function weather(){
	$('.right').find('#mainFrame').attr('src','weater.html');
}
function bookSearch(){
	$('.right').find('#mainFrame').attr('src','bookSearch.html');
}
function douBan(){
	$('.right').find('#mainFrame').attr('src','douBan.html');
}
function history(){
	$('.right').find('#mainFrame').attr('src','history.html');
}
function message(){
	$('.right').find('#mainFrame').attr('src','leaveMessage.html');
}
function bookAdd(){
	$('.right').find('#mainFrame').attr('src','bookAdd.html');
}