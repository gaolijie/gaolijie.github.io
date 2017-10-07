$(function(){	
	widAndHei('.body');
	/*鼠标悬浮搜索按钮*/
	$('#search').hover(function(){
		$(this).css('background','#3498DB');
	},function(){
		$(this).css('background','#ccc');
	});
	
	$('#search').click(function(){
		
		$("#main").html("");
	 	var gjz = $('#gjz').val();
	 	var num = $('#num').val();
	 	
	 	if(gjz==''){
	 		alert('请输入关键字！');
	 	}else{
	 		$.ajax({	
				type:"GET",
				dataType: "jsonp",
				url:"https://api.douban.com/v2/book/search?q="+gjz+"&count="+num+"",
				
				/*发送请求前执行loading效果*/
				beforeSend:function(){
					$('#preloader').show();
				},
				
				success:function(data){
					$('#preloader').hide(); //关闭loading效果
					var html = '';
					for(i=0;i<num;i++){
						//$('<img src='+data.books[i].images.medium+'><br/><a href='+data.books[i].alt+'><i>'+"书名: "+data.books[i].title+'</i></a><br/><br/>').appendTo('#main');
						
						html += '<div class="doubanDiv"><img src='+data.books[i].images.medium+'><p><a  target="_blank" class="aLink" data='+i+'><i>'+"书名: "+data.books[i].title+'</i></a></p></div>';
						$('#main').html(html);
						$('.aLink').attr('href',data.books[i].alt);
					}
				},
				error:function(data){
					alert("加载出错了");
				}
			})
	 		
	 	}
	 	
	});
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