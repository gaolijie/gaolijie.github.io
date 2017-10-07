function bookDel(){
	$('.right').find('#mainFrame').attr('src','bookDel.html');
}
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