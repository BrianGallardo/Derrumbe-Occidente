var wms_layers = [];


        var lyr_ESRISatelliteArcGISWorld_Imagery_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_GoogleSatelliteHybrid_1 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Cuencas_2 = new ol.format.GeoJSON();
var features_Cuencas_2 = format_Cuencas_2.readFeatures(json_Cuencas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuencas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_2.addFeatures(features_Cuencas_2);
var lyr_Cuencas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuencas_2, 
                style: style_Cuencas_2,
                interactive: true,
    title: 'Cuencas<br />\
    <img src="styles/legend/Cuencas_2_0.png" /> Rio Lempa<br />\
    <img src="styles/legend/Cuencas_2_1.png" /> Rio Ulua<br />'
        });
var format_SubcuencasHonduras_3 = new ol.format.GeoJSON();
var features_SubcuencasHonduras_3 = format_SubcuencasHonduras_3.readFeatures(json_SubcuencasHonduras_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubcuencasHonduras_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SubcuencasHonduras_3.addFeatures(features_SubcuencasHonduras_3);
var lyr_SubcuencasHonduras_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SubcuencasHonduras_3, 
                style: style_SubcuencasHonduras_3,
                interactive: true,
                title: '<img src="styles/legend/SubcuencasHonduras_3.png" /> Subcuencas Honduras'
            });
var format_MicrocuencasProtegidasICF_4 = new ol.format.GeoJSON();
var features_MicrocuencasProtegidasICF_4 = format_MicrocuencasProtegidasICF_4.readFeatures(json_MicrocuencasProtegidasICF_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicrocuencasProtegidasICF_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicrocuencasProtegidasICF_4.addFeatures(features_MicrocuencasProtegidasICF_4);
var lyr_MicrocuencasProtegidasICF_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicrocuencasProtegidasICF_4, 
                style: style_MicrocuencasProtegidasICF_4,
                interactive: true,
                title: '<img src="styles/legend/MicrocuencasProtegidasICF_4.png" /> Microcuencas Protegidas ICF'
            });
var format_Ros_5 = new ol.format.GeoJSON();
var features_Ros_5 = format_Ros_5.readFeatures(json_Ros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ros_5.addFeatures(features_Ros_5);
var lyr_Ros_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ros_5, 
                style: style_Ros_5,
                interactive: true,
                title: '<img src="styles/legend/Ros_5.png" /> Ríos'
            });
var format_Deslizamientos_6 = new ol.format.GeoJSON();
var features_Deslizamientos_6 = format_Deslizamientos_6.readFeatures(json_Deslizamientos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Deslizamientos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Deslizamientos_6.addFeatures(features_Deslizamientos_6);
var lyr_Deslizamientos_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Deslizamientos_6, 
                style: style_Deslizamientos_6,
                interactive: true,
                title: '<img src="styles/legend/Deslizamientos_6.png" /> Deslizamientos'
            });
var format_reasIntervenidas_7 = new ol.format.GeoJSON();
var features_reasIntervenidas_7 = format_reasIntervenidas_7.readFeatures(json_reasIntervenidas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reasIntervenidas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reasIntervenidas_7.addFeatures(features_reasIntervenidas_7);
var lyr_reasIntervenidas_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reasIntervenidas_7, 
                style: style_reasIntervenidas_7,
                interactive: true,
                title: '<img src="styles/legend/reasIntervenidas_7.png" /> Áreas Intervenidas'
            });
var format_Curvas100mts_8 = new ol.format.GeoJSON();
var features_Curvas100mts_8 = format_Curvas100mts_8.readFeatures(json_Curvas100mts_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Curvas100mts_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Curvas100mts_8.addFeatures(features_Curvas100mts_8);
var lyr_Curvas100mts_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Curvas100mts_8, 
                style: style_Curvas100mts_8,
                interactive: true,
                title: '<img src="styles/legend/Curvas100mts_8.png" /> Curvas 100mts'
            });
var format_SanJuan_9 = new ol.format.GeoJSON();
var features_SanJuan_9 = format_SanJuan_9.readFeatures(json_SanJuan_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanJuan_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanJuan_9.addFeatures(features_SanJuan_9);
var lyr_SanJuan_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SanJuan_9, 
                style: style_SanJuan_9,
                interactive: true,
                title: '<img src="styles/legend/SanJuan_9.png" /> San Juan'
            });

lyr_ESRISatelliteArcGISWorld_Imagery_0.setVisible(true);lyr_GoogleSatelliteHybrid_1.setVisible(true);lyr_Cuencas_2.setVisible(false);lyr_SubcuencasHonduras_3.setVisible(false);lyr_MicrocuencasProtegidasICF_4.setVisible(false);lyr_Ros_5.setVisible(true);lyr_Deslizamientos_6.setVisible(false);lyr_reasIntervenidas_7.setVisible(true);lyr_Curvas100mts_8.setVisible(true);lyr_SanJuan_9.setVisible(true);
var layersList = [lyr_ESRISatelliteArcGISWorld_Imagery_0,lyr_GoogleSatelliteHybrid_1,lyr_Cuencas_2,lyr_SubcuencasHonduras_3,lyr_MicrocuencasProtegidasICF_4,lyr_Ros_5,lyr_Deslizamientos_6,lyr_reasIntervenidas_7,lyr_Curvas100mts_8,lyr_SanJuan_9];
lyr_Cuencas_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'TIPO': 'TIPO', 'CUENCA': 'CUENCA', 'SQ_MILES': 'SQ_MILES', 'SQ_KM': 'SQ_KM', 'ACRES': 'ACRES', 'HECTARES': 'HECTARES', });
lyr_SubcuencasHonduras_3.set('fieldAliases', {'CUENCAS': 'CUENCAS', 'SUBCUENCAS': 'SUBCUENCAS', 'NUMERO': 'NUMERO', 'AREAHA': 'AREAHA', });
lyr_MicrocuencasProtegidasICF_4.set('fieldAliases', {'ID': 'ID', 'HECTARES_': 'HECTARES_', 'AREA_': 'AREA_', 'PERIMETER_': 'PERIMETER_', 'ID_': 'ID_', 'NOM_MICRO_': 'NOM_MICRO_', 'MUNICIPIO_': 'MUNICIPIO_', 'AREA_HAS__': 'AREA_HAS__', 'DEPTO_': 'DEPTO_', 'AñO_': 'AñO_', 'AREA_2': 'AREA_2', 'TENENCIA': 'TENENCIA', 'NO_AC': 'NO_AC', 'POB_BENF': 'POB_BENF', 'TIPO': 'TIPO', 'USO': 'USO', 'COLOR_H2O': 'COLOR_H2O', 'TURBIDEZ': 'TURBIDEZ', 'VIDA__ACU�': 'VIDA__ACU�', 'PROF_SUELO': 'PROF_SUELO', 'TEXTURA': 'TEXTURA', 'RIESGO_ERO': 'RIESGO_ERO', 'ANIMALES_': 'ANIMALES_', 'VIVIENDAS_': 'VIVIENDAS_', 'INCENDIOS_': 'INCENDIOS_', 'OBSERVACI�': 'OBSERVACI�', 'Q_M3_MIN': 'Q_M3_MIN', 'REGIONAL': 'REGIONAL', 'NO_COMUNID': 'NO_COMUNID', 'MUNIC_GEOG': 'MUNIC_GEOG', 'DECLARATOR': 'DECLARATOR', 'REGISTRO_E': 'REGISTRO_E', 'CON_ACUERD': 'CON_ACUERD', 'Q_M3_MIN_1': 'Q_M3_MIN_1', 'Q_GLN_MIN': 'Q_GLN_MIN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'COMUNIDAD_': 'COMUNIDAD_', 'USO_SUELO': 'USO_SUELO', 'INSTIT_PRE': 'INSTIT_PRE', 'PRECIP__MM': 'PRECIP__MM', 'HECTARES': 'HECTARES', 'INSTITUCI�': 'INSTITUCI�', 'PLAN_DE_MA': 'PLAN_DE_MA', 'CUENCA_MAY': 'CUENCA_MAY', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Ros_5.set('fieldAliases', {'ID': 'ID', 'NOMBRE': 'NOMBRE', 'SOURCETHM': 'SOURCETHM', 'LENGTH': 'LENGTH', 'TIPO': 'TIPO', });
lyr_Deslizamientos_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'GEO_GEOL_': 'GEO_GEOL_', 'GEO_GEOL_I': 'GEO_GEOL_I', 'TYPE': 'TYPE', 'UNIT': 'UNIT', 'BED_SURF': 'BED_SURF', 'LITHOLOGY': 'LITHOLOGY', 'ERA': 'ERA', 'SYSTEM': 'SYSTEM', 'ROCKGROUP': 'ROCKGROUP', 'ENVIRON': 'ENVIRON', 'LANDSLIDES': 'LANDSLIDES', 'ACRES': 'ACRES', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_reasIntervenidas_7.set('fieldAliases', {'id': 'id', 'Area Ha': 'Area Ha', 'Area m2': 'Area m2', });
lyr_Curvas100mts_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FNODE_': 'FNODE_', 'TNODE_': 'TNODE_', 'LPOLY_': 'LPOLY_', 'RPOLY_': 'RPOLY_', 'LENGTH_FEE': 'LENGTH_FEE', 'N_': 'N_', 'N_ID': 'N_ID', 'ALTITUD': 'ALTITUD', 'SOURCETHM': 'SOURCETHM', 'LENGTH': 'LENGTH', 'Shape_Leng': 'Shape_Leng', });
lyr_SanJuan_9.set('fieldAliases', {'GEOCODIGO': 'GEOCODIGO', 'NOMBRE': 'NOMBRE', 'HECTARES': 'HECTARES', 'SQ_KM': 'SQ_KM', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_AREA': 'SHAPE_AREA', 'COD_DEPTO': 'COD_DEPTO', });
lyr_Cuencas_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'TIPO': 'TextEdit', 'CUENCA': 'TextEdit', 'SQ_MILES': 'TextEdit', 'SQ_KM': 'TextEdit', 'ACRES': 'TextEdit', 'HECTARES': 'TextEdit', });
lyr_SubcuencasHonduras_3.set('fieldImages', {'CUENCAS': 'TextEdit', 'SUBCUENCAS': 'TextEdit', 'NUMERO': 'TextEdit', 'AREAHA': 'TextEdit', });
lyr_MicrocuencasProtegidasICF_4.set('fieldImages', {'ID': '', 'HECTARES_': '', 'AREA_': '', 'PERIMETER_': '', 'ID_': 'Range', 'NOM_MICRO_': 'TextEdit', 'MUNICIPIO_': 'TextEdit', 'AREA_HAS__': 'TextEdit', 'DEPTO_': 'TextEdit', 'AñO_': 'TextEdit', 'AREA_2': 'TextEdit', 'TENENCIA': 'TextEdit', 'NO_AC': 'TextEdit', 'POB_BENF': 'Range', 'TIPO': 'TextEdit', 'USO': 'TextEdit', 'COLOR_H2O': 'TextEdit', 'TURBIDEZ': 'TextEdit', 'VIDA__ACU�': '', 'PROF_SUELO': 'TextEdit', 'TEXTURA': 'TextEdit', 'RIESGO_ERO': 'TextEdit', 'ANIMALES_': 'TextEdit', 'VIVIENDAS_': 'TextEdit', 'INCENDIOS_': 'TextEdit', 'OBSERVACI�': '', 'Q_M3_MIN': 'TextEdit', 'REGIONAL': 'TextEdit', 'NO_COMUNID': 'Range', 'MUNIC_GEOG': 'TextEdit', 'DECLARATOR': 'TextEdit', 'REGISTRO_E': 'TextEdit', 'CON_ACUERD': 'TextEdit', 'Q_M3_MIN_1': 'TextEdit', 'Q_GLN_MIN': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'COMUNIDAD_': 'TextEdit', 'USO_SUELO': 'TextEdit', 'INSTIT_PRE': 'TextEdit', 'PRECIP__MM': 'TextEdit', 'HECTARES': 'TextEdit', 'INSTITUCI�': '', 'PLAN_DE_MA': 'DateTime', 'CUENCA_MAY': 'DateTime', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Ros_5.set('fieldImages', {'ID': 'Range', 'NOMBRE': 'TextEdit', 'SOURCETHM': 'TextEdit', 'LENGTH': 'TextEdit', 'TIPO': 'TextEdit', });
lyr_Deslizamientos_6.set('fieldImages', {'OBJECTID': 'Range', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'GEO_GEOL_': 'TextEdit', 'GEO_GEOL_I': 'TextEdit', 'TYPE': 'TextEdit', 'UNIT': 'TextEdit', 'BED_SURF': 'TextEdit', 'LITHOLOGY': 'TextEdit', 'ERA': 'TextEdit', 'SYSTEM': 'TextEdit', 'ROCKGROUP': 'TextEdit', 'ENVIRON': 'TextEdit', 'LANDSLIDES': 'TextEdit', 'ACRES': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_reasIntervenidas_7.set('fieldImages', {'id': '', 'Area Ha': '', 'Area m2': '', });
lyr_Curvas100mts_8.set('fieldImages', {'OBJECTID': 'Range', 'FNODE_': 'TextEdit', 'TNODE_': 'TextEdit', 'LPOLY_': 'TextEdit', 'RPOLY_': 'TextEdit', 'LENGTH_FEE': 'TextEdit', 'N_': 'TextEdit', 'N_ID': 'TextEdit', 'ALTITUD': 'TextEdit', 'SOURCETHM': 'TextEdit', 'LENGTH': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_SanJuan_9.set('fieldImages', {'GEOCODIGO': 'TextEdit', 'NOMBRE': 'TextEdit', 'HECTARES': 'TextEdit', 'SQ_KM': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'COD_DEPTO': 'TextEdit', });
lyr_Cuencas_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'TIPO': 'no label', 'CUENCA': 'inline label', 'SQ_MILES': 'no label', 'SQ_KM': 'no label', 'ACRES': 'no label', 'HECTARES': 'no label', });
lyr_SubcuencasHonduras_3.set('fieldLabels', {'CUENCAS': 'no label', 'SUBCUENCAS': 'inline label', 'NUMERO': 'no label', 'AREAHA': 'no label', });
lyr_MicrocuencasProtegidasICF_4.set('fieldLabels', {'ID': 'no label', 'HECTARES_': 'inline label', 'AREA_': 'inline label', 'PERIMETER_': 'no label', 'ID_': 'no label', 'NOM_MICRO_': 'inline label', 'MUNICIPIO_': 'no label', 'AREA_HAS__': 'no label', 'DEPTO_': 'no label', 'AñO_': 'no label', 'AREA_2': 'inline label', 'TENENCIA': 'no label', 'NO_AC': 'no label', 'POB_BENF': 'no label', 'TIPO': 'no label', 'USO': 'no label', 'COLOR_H2O': 'no label', 'TURBIDEZ': 'no label', 'VIDA__ACU�': 'no label', 'PROF_SUELO': 'no label', 'TEXTURA': 'inline label', 'RIESGO_ERO': 'inline label', 'ANIMALES_': 'no label', 'VIVIENDAS_': 'no label', 'INCENDIOS_': 'no label', 'OBSERVACI�': 'no label', 'Q_M3_MIN': 'no label', 'REGIONAL': 'no label', 'NO_COMUNID': 'no label', 'MUNIC_GEOG': 'no label', 'DECLARATOR': 'no label', 'REGISTRO_E': 'no label', 'CON_ACUERD': 'no label', 'Q_M3_MIN_1': 'no label', 'Q_GLN_MIN': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'COMUNIDAD_': 'inline label', 'USO_SUELO': 'no label', 'INSTIT_PRE': 'no label', 'PRECIP__MM': 'no label', 'HECTARES': 'no label', 'INSTITUCI�': 'no label', 'PLAN_DE_MA': 'no label', 'CUENCA_MAY': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Ros_5.set('fieldLabels', {'ID': 'no label', 'NOMBRE': 'inline label', 'SOURCETHM': 'no label', 'LENGTH': 'no label', 'TIPO': 'no label', });
lyr_Deslizamientos_6.set('fieldLabels', {'OBJECTID': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'GEO_GEOL_': 'no label', 'GEO_GEOL_I': 'no label', 'TYPE': 'no label', 'UNIT': 'no label', 'BED_SURF': 'inline label', 'LITHOLOGY': 'inline label', 'ERA': 'inline label', 'SYSTEM': 'inline label', 'ROCKGROUP': 'inline label', 'ENVIRON': 'inline label', 'LANDSLIDES': 'no label', 'ACRES': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'inline label', });
lyr_reasIntervenidas_7.set('fieldLabels', {'id': 'no label', 'Area Ha': 'inline label', 'Area m2': 'inline label', });
lyr_Curvas100mts_8.set('fieldLabels', {'OBJECTID': 'no label', 'FNODE_': 'no label', 'TNODE_': 'no label', 'LPOLY_': 'no label', 'RPOLY_': 'no label', 'LENGTH_FEE': 'no label', 'N_': 'no label', 'N_ID': 'no label', 'ALTITUD': 'inline label', 'SOURCETHM': 'no label', 'LENGTH': 'no label', 'Shape_Leng': 'no label', });
lyr_SanJuan_9.set('fieldLabels', {'GEOCODIGO': 'no label', 'NOMBRE': 'inline label', 'HECTARES': 'no label', 'SQ_KM': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_AREA': 'no label', 'COD_DEPTO': 'no label', });
lyr_SanJuan_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});