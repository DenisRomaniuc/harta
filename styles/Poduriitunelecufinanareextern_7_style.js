var size = 0;
var placement = 'point';
function categories_Poduriitunelecufinanareextern_7(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'finalizat, �n garantie':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.4 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(50,158,41,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(43,153,34,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'in derulare':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.4 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(240,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(245,24,20,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'in pregatire':
                    return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 4.800000000000001 + size, points: 5,
            stroke: new ol.style.Stroke({color: 'rgba(152,152,152,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.0}), fill: new ol.style.Fill({color: 'rgba(250,188,34,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Poduriitunelecufinanareextern_7 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Stadiu");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_Poduriitunelecufinanareextern_7(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
