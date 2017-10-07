
var map = null;
var layer = null;
var pointLayer, lineLayer, polygonLayer;
var drawpoint, drawline, drawpolygon;
var option = null; zoomBox = null; dragPan = null; measure = null;


$(document).ready(function () {
    map = new OpenLayers.Map('controlMap', {
        numZoomLevels: 10,
        maxExtent: new OpenLayers.Bounds(15124747.660844397, 4778843.008389218, 15146761.524990527, 4795964.9027251),
        maxResolution: 20,
        controls: [new OpenLayers.Control.Navigation(), new OpenLayers.Control.LayerSwitcher()]
    });
    layer = new Zondy.Map.Doc('许昌市图书分享信息', '许昌市图书分享信息', { ip: "127.0.0.1" });
    pointLayer = new OpenLayers.Layer.Vector("pointLayer"); //画点层
    lineLayer = new OpenLayers.Layer.Vector("lineLayer"); //画线层
    polygonLayer = new OpenLayers.Layer.Vector("polygonLayer"); //画区层

    map.addLayers([layer, pointLayer, lineLayer, polygonLayer]);

    drawpoint = new OpenLayers.Control.DrawFeature(pointLayer, OpenLayers.Handler.Point);
    drawpoint.featureAdded = callpoint;
    map.addControl(drawpoint);

    drawline = new OpenLayers.Control.DrawFeature(lineLayer, OpenLayers.Handler.Path);
    drawline.featureAdded = callline;
    map.addControl(drawline);

    drawpolygon = new OpenLayers.Control.DrawFeature(polygonLayer, OpenLayers.Handler.Polygon);
    drawpolygon.featureAdded = callpolygon;
    map.addControl(drawpolygon);

    map.setCenter(new OpenLayers.LonLat(0, 0), 2.5);

    $("#controlMap").contextmenu(option); //设置地图容器的右键菜单

});
function callpoint(feature) {

    var addpoint = $("#addpointvalue").val();   //获取input的值
    var addpointSub = addpoint.split("，");      //用中文逗号分隔

    var pointObj = new Zondy.Object.Point2D();
    pointObj.setByOL(feature.geometry);
    var gpoint = new Zondy.Object.GPoint();
    gpoint.setDot(pointObj);
    var fGeom = new Zondy.Object.FeatureGeometry({ PntGeom: [gpoint] });
    var graphicInfo = new Zondy.Object.WebGraphicsInfo({ InfoType: 1, PntInfo: new Zondy.Object.CPointInfo({ Angle: 0, Color: 23, Space: 0, SymHeight: 2, SymID: 425, SymWidth: 2 }) });
    var newfeature = new Zondy.Object.Feature({ fGeom: fGeom, GraphicInfo: graphicInfo });
    newfeature.setAttValues(addpointSub); //设置属性值
    newfeature.setFType(1);

    var newFeatureSet = new Zondy.Object.FeatureSet();
    newFeatureSet.clear();
    var CAttStruct = new Zondy.Object.CAttStruct({ FldName: ["书名", "作者", "分类", "联系方式","发布日期", "mpLayer"], FldNumber: 6, FldType: ["Fldstring", "Fldstring", "Fldstring", "Fldstring", "Fldstring", "Fldlong"] });
    newFeatureSet.AttStruct = CAttStruct;
    newFeatureSet.addFeature(newfeature);

    var editService = new Zondy.Service.EditDocFeature("许昌市图书分享信息", 1, { ip: "127.0.0.1" });  //创建要素编辑服务
    editService.add(newFeatureSet, success); //执行添加要素服务 
}

function callline(feature) {

    var addline = $("#addlinevalue").val(); //获取input的值
    var addlineSub = addline.split("，"); //用中文逗号分隔


    var len = feature.geometry.components.length;
    var pointObj = new Array();
    for (var i = 0; i < len; i++) {
        pointObj[i] = new Zondy.Object.Point2D();
        pointObj[i].setByOL(feature.geometry.components[i]);
    }
    var gline = new Zondy.Object.GLine(new Zondy.Object.AnyLine([new Zondy.Object.Arc(pointObj)]));
    var fGeom = new Zondy.Object.FeatureGeometry({ LinGeom: [gline] });
    var graphicInfo = new Zondy.Object.WebGraphicsInfo({ InfoType: 2, LinInfo: new Zondy.Object.CLineInfo({ "Color": 23, "LinStyleID": 0, "LinStyleID2": 1, "LinWidth": 0.800000011920929, "Xscale": 10, "Yscale": 10 }) });
    var newfeature = new Zondy.Object.Feature({ fGeom: fGeom, GraphicInfo: graphicInfo });
    newfeature.setAttValues(addlineSub);
    newfeature.setFType(2);

    var newFeatureSet = new Zondy.Object.FeatureSet();
    newFeatureSet.clear();
    var CAttStruct = new Zondy.Object.CAttStruct({ FldName: ["线路编号", "描述", "mpLayer"], FldNumber: 2, FldType: ["Fldstring", "Fldstring", "Fldlong"] });
    newFeatureSet.AttStruct = CAttStruct;
    newFeatureSet.addFeature(newfeature);
    var editService = new Zondy.Service.EditDocFeature("许昌市图书分享信息", 4, { ip: "127.0.0.1" });
    editService.add(newFeatureSet, success);
}


function callpolygon(feature) {

    var addqu = $("#addquvalue").val();
    var addquSub = addqu.split("，");

    var len = feature.geometry.components[0].components.length;
    var pointObj = new Array();
    for (var i = 0; i < len; i++) {
        pointObj[i] = new Zondy.Object.Point2D();
        pointObj[i].setByOL(feature.geometry.components[0].components[i]);
    }
    var gregion = new Zondy.Object.GRegion([new Zondy.Object.AnyLine([new Zondy.Object.Arc(pointObj)])]);
    var fGeom = new Zondy.Object.FeatureGeometry({ RegGeom: [gregion] });
    var graphicInfo = new Zondy.Object.WebGraphicsInfo({ InfoType: 3, RegInfo: new Zondy.Object.CRegionInfo({ "EndColor": 1, "FillColor": 2, "FillMode": 0, "OutPenWidth": 1, "OverMethod": 0, "PatAngle": 1, "PatColor": 1, "PatHeight": 1, "PatID": 27, "PatWidth": 1 }) });
    var newFeature = new Zondy.Object.Feature({ fGeom: fGeom, GraphicInfo: graphicInfo }); //实例化要素对象
    newFeature.setAttValues(addquSub);
    newFeature.setFType(3); //"Zondy.Enum.FeatureType"，点：1，线：2，区：3

    var newFeatureSet = new Zondy.Object.FeatureSet(); //创建要素集
    newFeatureSet.clear(); //还原当前对象的属性设置
    var CAttStruct = new Zondy.Object.CAttStruct({ FldName: ["小区编号", "小区描述", "其他", "mpLayer"], FldNumber: 3, FldType: ["Fldstring", "Fldstring", "Fldstring", "Fldlong"] });
    newFeatureSet.AttStruct = CAttStruct; //设置属性结构
    newFeatureSet.addFeature(newFeature); //添加新要素

    var editService = new Zondy.Service.EditDocFeature("许昌市图书分享信息", 3, { ip: "127.0.0.1" });  //创建要素编辑服务
    editService.add(newFeatureSet, success); //执行添加要素服务 
}

function success(rlt) {
    var result = rlt;
    if (result == true) {
        alert("添加要素成功！");
    }
    else alert("添加要素失败！");
}
function addControl(type) {
    switch (type) {
        case "point":
            drawline.deactivate();
            drawpolygon.deactivate();
            drawpoint.activate();
            break;
        case "line":
            drawpolygon.deactivate();
            drawpoint.deactivate();
            drawline.activate();
            break;
        default:
            drawpoint.deactivate();
            drawline.deactivate();
            drawpolygon.activate();
            break;
    }
}
function stop() {
    drawpoint.deactivate();
    drawline.deactivate();
    drawpolygon.deactivate();
    pointLayer.destroyFeatures();
    lineLayer.destroyFeatures();
    polygonLayer.destroyFeatures();
}


