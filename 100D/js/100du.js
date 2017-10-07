$(function(){
	$(".search-1-txt").focus(function(){
		var txt_value = $(this).val();
		if(txt_value=="例如：樱花日本料理"){
			$(this).val("");
		}
	});
	$(".search-1-txt").blur(function(){
		var txt_value = $(this).val();
		if(txt_value==""){
			$(this).val("例如：樱花日本料理");
		}
	});
	
	$(".know-l-5 input").focus(function(){
		var txt_value = $(this).val();
		if(txt_value==this.defaultValue){
			$(this).val("");
		}
	});
	$(".know-l-5 input").blur(function(){
		var txt_value = $(this).val();
		if(txt_value==""){
			$(this).val(this.defaultValue);
		}
	});
	$(".trans-r-b ul li:even")
		.css("background","#F1F1F1")
		
	$(".search-top-but input").click(function(){
		$(this).addClass("selected").siblings().removeClass("selected");
		var index = $(".search-top-but input").index(this);
		$(".search-mid>div").eq(index).show().siblings().hide();
	})
	$(".hot-m a").click(function(){
		$(this).addClass("hot-select").siblings().removeClass("hot-select");
		var index = $(".hot-m a").index(this);
		$(".hot-m-b>div").eq(index).show().siblings().hide();
	})
	$(".active-right-1-2 h5").click(function(){
		$(this).addClass("active-right-select").siblings().removeClass("active-right-select");
		var index = $(".active-right-1-2 h5").index(this);
		$(".active-right-content div").eq(index).show().siblings().hide();
	})
});
