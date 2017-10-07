//驾车路线规划
function searchRoad3(start3, end3, resultPanel) {
	var driving = new BMap.DrivingRoute(map, {
		renderOptions: {
			map: map,
			panel: resultPanel,
			autoViewport: true
		}
	});
	driving.search(start3, end3, resultPanel);
}

//步行路线规划
function searchRoad(start1, end2, resultPanel) {
	var walking = new BMap.WalkingRoute(map, {
		renderOptions: {
			map: map,
			panel: resultPanel,
			autoViewport: true
		}
	});
	walking.search(start1, end2, resultPanel);
}

//公交路线规划
function searchRoad2(start2, end2, resultPanel) {
	var transit = new BMap.TransitRoute(map, {
		renderOptions: {
			map: map,
			panel: resultPanel
		}
	});
	transit.search(start2, end2, resultPanel);
}

//鼠标拖拽
function drag(obj) {
	var move = false; //移动标记 
	var _x, _y; //鼠标离控件左上角的相对位置 
	$(obj).mousedown(function(e) {
		move = true;
		_x = e.pageX - parseInt($(obj).css("left"));
		_y = e.pageY - parseInt($(obj).css("top"));
	});
	$(document).mousemove(function(e) {
		if(move) {
			var x = e.pageX - _x; //控件左上角到屏幕左上角的相对位置 
			var y = e.pageY - _y;
			$(obj).css({
				"top": y,
				"left": x
			});
		}
	}).mouseup(function() {
		move = false;
	});
}
//关键字搜索
function keyWordSearch(keyword,resultPanel){
	var local = new BMap.LocalSearch(map, {
		renderOptions: {map: map, panel: resultPanel}
	});
	local.search(keyword);
}

function zishiying(who){
	var pingmukuan = $(window).width();
	var pingmugao = $(window).height();
	$(who).width(pingmukuan);
	$(who).height(pingmugao);
	
	$(window).resize(function(){
		var pingmukuan = $(window).width();
		var pingmugao = $(window).height();
		$(who).width(pingmukuan);
		$(who).height(pingmugao);
	})
}