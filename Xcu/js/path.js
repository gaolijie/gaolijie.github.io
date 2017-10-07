$(function(){
	//		地图初始化
		var map = new BMap.Map("allmap");    // 创建Map实例
		map.centerAndZoom(new BMap.Point(113.83531246,34.02673959), 14);  // 初始化地图,设置中心点坐标和地图级别
		map.addControl(new BMap.MapTypeControl());   //添加地图类型控件
		map.setCurrentCity("许昌");          // 设置地图显示的城市 此项是必须设置的
		map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
		map.setDefaultCursor("url('bird.cur')");   //设置地图默认的鼠标指针样式
	
	//鼠标拖拽
	drag('.route')
	
	bus()
})

	
//		路线规划
		//公交路线规划
	function bus(){
		$('#bus').click(function() {
			$('#r-result').html('')
			var str = $('#start').val();
			var end = $('#end').val();
			searchRoad2(str, end,'r-result');
		})
	}
	

	//步行路线规划
	$('#walk').click(function() {
		$('#r-result').html('')
		var str = $('#start').val();
		var end = $('#end').val();
		searchRoad(str, end,'r-result');
	})

	//驾车路线规划
	$("#car").click(function() {
		$('#r-result').html('')
		var str = $('#start').val();
		var end = $('#end').val();
		searchRoad3(str, end,'r-result');
	})