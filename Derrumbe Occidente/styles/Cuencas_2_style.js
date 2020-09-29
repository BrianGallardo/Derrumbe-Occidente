var size = 0;
var placement = 'point';
function categories_Cuencas_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'Rio Lempa':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,27,161,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(110,229,54,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(131,131,131,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(195,169,89,0.4196078431372549)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rio Ulua':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,27,161,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2}),fill: new ol.style.Fill({color: 'rgba(106,45,180,0.396078431372549)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    }),new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(131,131,131,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}),fill: new ol.style.Fill({color: 'rgba(234,204,104,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Cuencas_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("CUENCA");
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
    
var style = categories_Cuencas_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
