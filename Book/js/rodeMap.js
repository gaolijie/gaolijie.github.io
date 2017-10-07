
$(function(){
	
	var map = new BMap.Map("rodeMap");             //初始化地图
    map.centerAndZoom(new BMap.Point(113.8322981268311, 34.01992773309634), 13);
    map.enableScrollWheelZoom(true); //地图缩放功能
    var navigationControl = new BMap.NavigationControl({    //地图的左上角放大，缩小尺子
        anchor: BMAP_ANCHOR_TOP_LEFT,
        type: BMAP_NAVIGATION_CONTROL_LARGE,
        enableGeolocation: true
    });
    map.addControl(navigationControl);
    var geolocationControl = new BMap.GeolocationControl();
	
	$('.zslxgj').click(function(){
		$('#zslxBody1').show().siblings().hide();
		var transit = new BMap.TransitRoute(map, {renderOptions: { map: map, panel: "zslxBody1" , autoViewport: true}});
        transit.search($('.zslxqd').val(), $('.zslxzd').val());
	});
	$('.zslxjc').click(function(){
		$('#zslxBody2').show().siblings().hide();
		var driving = new BMap.DrivingRoute(map, { renderOptions: { map: map, panel: "zslxBody2", autoViewport: true} });
        driving.search($('.zslxqd').val(), $('.zslxzd').val());
	});
	$('.zslxbx').click(function(){
		$('#zslxBody3').show().siblings().hide();
		var walking = new BMap.WalkingRoute(map, { renderOptions: { map: map, panel: "zslxBody3", autoViewport: true} });
        walking.search($('.zslxqd').val(), $('.zslxzd').val());
	});
	
	$('.zslxHead').find('img').click(function(){
		$('.zslx').fadeOut(300);
	});
	$('.zslx').draggable({handle:'.zslxHead' })
});

