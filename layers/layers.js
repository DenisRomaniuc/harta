var wms_layers = [];


        var lyr_EsriTopographic_0 = new ol.layer.Tile({
            'title': 'Esri Topographic',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_frontiera_ro_1 = new ol.format.GeoJSON();
var features_frontiera_ro_1 = format_frontiera_ro_1.readFeatures(json_frontiera_ro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_frontiera_ro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_frontiera_ro_1.addFeatures(features_frontiera_ro_1);
var lyr_frontiera_ro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_frontiera_ro_1, 
                style: style_frontiera_ro_1,
                popuplayertitle: "frontiera_ro",
                interactive: false,
                title: '<img src="styles/legend/frontiera_ro_1.png" /> frontiera_ro'
            });
var format_XYSiguranta_seg_f_2 = new ol.format.GeoJSON();
var features_XYSiguranta_seg_f_2 = format_XYSiguranta_seg_f_2.readFeatures(json_XYSiguranta_seg_f_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XYSiguranta_seg_f_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XYSiguranta_seg_f_2.addFeatures(features_XYSiguranta_seg_f_2);
var lyr_XYSiguranta_seg_f_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XYSiguranta_seg_f_2, 
                style: style_XYSiguranta_seg_f_2,
                popuplayertitle: "XYSiguranta_seg_f",
                interactive: true,
                title: '<img src="styles/legend/XYSiguranta_seg_f_2.png" /> XYSiguranta_seg_f'
            });
var format_XYSiguranta_seg_i_3 = new ol.format.GeoJSON();
var features_XYSiguranta_seg_i_3 = format_XYSiguranta_seg_i_3.readFeatures(json_XYSiguranta_seg_i_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XYSiguranta_seg_i_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XYSiguranta_seg_i_3.addFeatures(features_XYSiguranta_seg_i_3);
var lyr_XYSiguranta_seg_i_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XYSiguranta_seg_i_3, 
                style: style_XYSiguranta_seg_i_3,
                popuplayertitle: "XYSiguranta_seg_i",
                interactive: true,
                title: '<img src="styles/legend/XYSiguranta_seg_i_3.png" /> XYSiguranta_seg_i'
            });
var format_XYLinii_final_4 = new ol.format.GeoJSON();
var features_XYLinii_final_4 = format_XYLinii_final_4.readFeatures(json_XYLinii_final_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XYLinii_final_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XYLinii_final_4.addFeatures(features_XYLinii_final_4);
var lyr_XYLinii_final_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XYLinii_final_4, 
                style: style_XYLinii_final_4,
                popuplayertitle: "XYLinii_final",
                interactive: true,
                title: '<img src="styles/legend/XYLinii_final_4.png" /> XYLinii_final'
            });
var format_Segmentedeliniicufinanareextern_5 = new ol.format.GeoJSON();
var features_Segmentedeliniicufinanareextern_5 = format_Segmentedeliniicufinanareextern_5.readFeatures(json_Segmentedeliniicufinanareextern_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Segmentedeliniicufinanareextern_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Segmentedeliniicufinanareextern_5.addFeatures(features_Segmentedeliniicufinanareextern_5);
var lyr_Segmentedeliniicufinanareextern_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Segmentedeliniicufinanareextern_5, 
                style: style_Segmentedeliniicufinanareextern_5,
                popuplayertitle: "Segmente de linii cu finanțare externă",
                interactive: true,
    title: 'Segmente de linii cu finanțare externă<br />\
    <img src="styles/legend/Segmentedeliniicufinanareextern_5_0.png" /> finalizat, în garanție<br />\
    <img src="styles/legend/Segmentedeliniicufinanareextern_5_1.png" /> în derulare<br />\
    <img src="styles/legend/Segmentedeliniicufinanareextern_5_2.png" /> în pregătire<br />'
        });
var format_SegmenteSIGcufinanareextern_6 = new ol.format.GeoJSON();
var features_SegmenteSIGcufinanareextern_6 = format_SegmenteSIGcufinanareextern_6.readFeatures(json_SegmenteSIGcufinanareextern_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SegmenteSIGcufinanareextern_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SegmenteSIGcufinanareextern_6.addFeatures(features_SegmenteSIGcufinanareextern_6);
var lyr_SegmenteSIGcufinanareextern_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SegmenteSIGcufinanareextern_6, 
                style: style_SegmenteSIGcufinanareextern_6,
                popuplayertitle: "Segmente SIG cu finanțare externă",
                interactive: true,
    title: 'Segmente SIG cu finanțare externă<br />\
    <img src="styles/legend/SegmenteSIGcufinanareextern_6_0.png" /> în pregătire<br />'
        });
var format_Poduriitunelecufinanareextern_7 = new ol.format.GeoJSON();
var features_Poduriitunelecufinanareextern_7 = format_Poduriitunelecufinanareextern_7.readFeatures(json_Poduriitunelecufinanareextern_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Poduriitunelecufinanareextern_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poduriitunelecufinanareextern_7.addFeatures(features_Poduriitunelecufinanareextern_7);
var lyr_Poduriitunelecufinanareextern_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poduriitunelecufinanareextern_7, 
                style: style_Poduriitunelecufinanareextern_7,
                popuplayertitle: "Poduri și tunele cu finanțare externă",
                interactive: true,
    title: 'Poduri și tunele cu finanțare externă<br />\
    <img src="styles/legend/Poduriitunelecufinanareextern_7_0.png" /> finalizat, în garanție<br />\
    <img src="styles/legend/Poduriitunelecufinanareextern_7_1.png" /> în derulare<br />\
    <img src="styles/legend/Poduriitunelecufinanareextern_7_2.png" /> în pregătire<br />'
        });
var format_SiguranaPCTcufinanareextern_8 = new ol.format.GeoJSON();
var features_SiguranaPCTcufinanareextern_8 = format_SiguranaPCTcufinanareextern_8.readFeatures(json_SiguranaPCTcufinanareextern_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiguranaPCTcufinanareextern_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiguranaPCTcufinanareextern_8.addFeatures(features_SiguranaPCTcufinanareextern_8);
var lyr_SiguranaPCTcufinanareextern_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiguranaPCTcufinanareextern_8, 
                style: style_SiguranaPCTcufinanareextern_8,
                popuplayertitle: "Siguranța PCT cu finanțare externă",
                interactive: true,
    title: 'Siguranța PCT cu finanțare externă<br />\
    <img src="styles/legend/SiguranaPCTcufinanareextern_8_0.png" /> finalizat, în garantie<br />'
        });
var format_Staiicufinanareextern_9 = new ol.format.GeoJSON();
var features_Staiicufinanareextern_9 = format_Staiicufinanareextern_9.readFeatures(json_Staiicufinanareextern_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Staiicufinanareextern_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Staiicufinanareextern_9.addFeatures(features_Staiicufinanareextern_9);
var lyr_Staiicufinanareextern_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Staiicufinanareextern_9, 
                style: style_Staiicufinanareextern_9,
                popuplayertitle: "Stații cu finanțare externă",
                interactive: true,
    title: 'Stații cu finanțare externă<br />\
    <img src="styles/legend/Staiicufinanareextern_9_0.png" /> în pregătire<br />'
        });
var format_Trecerilanivelcufinanareaextern_10 = new ol.format.GeoJSON();
var features_Trecerilanivelcufinanareaextern_10 = format_Trecerilanivelcufinanareaextern_10.readFeatures(json_Trecerilanivelcufinanareaextern_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trecerilanivelcufinanareaextern_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trecerilanivelcufinanareaextern_10.addFeatures(features_Trecerilanivelcufinanareaextern_10);
var lyr_Trecerilanivelcufinanareaextern_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trecerilanivelcufinanareaextern_10, 
                style: style_Trecerilanivelcufinanareaextern_10,
                popuplayertitle: "Treceri la nivel cu finanțarea externă",
                interactive: true,
    title: 'Treceri la nivel cu finanțarea externă<br />\
    <img src="styles/legend/Trecerilanivelcufinanareaextern_10_0.png" /> în pregătire<br />'
        });

lyr_EsriTopographic_0.setVisible(true);lyr_frontiera_ro_1.setVisible(true);lyr_XYSiguranta_seg_f_2.setVisible(true);lyr_XYSiguranta_seg_i_3.setVisible(true);lyr_XYLinii_final_4.setVisible(true);lyr_Segmentedeliniicufinanareextern_5.setVisible(true);lyr_SegmenteSIGcufinanareextern_6.setVisible(true);lyr_Poduriitunelecufinanareextern_7.setVisible(true);lyr_SiguranaPCTcufinanareextern_8.setVisible(true);lyr_Staiicufinanareextern_9.setVisible(true);lyr_Trecerilanivelcufinanareaextern_10.setVisible(true);
var layersList = [lyr_EsriTopographic_0,lyr_frontiera_ro_1,lyr_XYSiguranta_seg_f_2,lyr_XYSiguranta_seg_i_3,lyr_XYLinii_final_4,lyr_Segmentedeliniicufinanareextern_5,lyr_SegmenteSIGcufinanareextern_6,lyr_Poduriitunelecufinanareextern_7,lyr_SiguranaPCTcufinanareextern_8,lyr_Staiicufinanareextern_9,lyr_Trecerilanivelcufinanareaextern_10];
lyr_frontiera_ro_1.set('fieldAliases', {'OID_': 'OID_', });
lyr_XYSiguranta_seg_f_2.set('fieldAliases', {'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', 'Tip_proiec': 'Tip_proiec', 'Stadiu_in': 'Stadiu_in', 'Denumire_p': 'Denumire_p', 'Denumire_o': 'Denumire_o', 'Localizare': 'Localizare', 'Nr__Linie': 'Nr__Linie', 'Sec_ia_de': 'Sec_ia_de', 'Lot': 'Lot', 'Lungime__k': 'Lungime__k', 'De_la_poz': 'De_la_poz', 'Pana_la_po': 'Pana_la_po', 'Antrepreno': 'Antrepreno', 'Data_înce': 'Data_înce', 'Data_final': 'Data_final', 'Stadiu_fiz': 'Stadiu_fiz', 'Stadiu__fi': 'Stadiu__fi', 'Observa_ii': 'Observa_ii', 'Latitudi_1': 'Latitudi_1', 'Longitud_1': 'Longitud_1', 'Latitudi_2': 'Latitudi_2', 'Longitud_2': 'Longitud_2', 'Latitudi_3': 'Latitudi_3', 'Longitud_3': 'Longitud_3', 'Latitudi_4': 'Latitudi_4', 'Longitud_4': 'Longitud_4', 'Detalii_pr': 'Detalii_pr', });
lyr_XYSiguranta_seg_i_3.set('fieldAliases', {'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', 'Tip_proiec': 'Tip_proiec', 'Stadiu_in': 'Stadiu_in', 'Denumire_p': 'Denumire_p', 'Denumire_o': 'Denumire_o', 'Localizare': 'Localizare', 'Nr__Linie': 'Nr__Linie', 'Sec_ia_de': 'Sec_ia_de', 'Lot': 'Lot', 'Lungime__k': 'Lungime__k', 'De_la_poz': 'De_la_poz', 'Pana_la_po': 'Pana_la_po', 'Antrepreno': 'Antrepreno', 'Data_înce': 'Data_înce', 'Data_final': 'Data_final', 'Stadiu_fiz': 'Stadiu_fiz', 'Stadiu__fi': 'Stadiu__fi', 'Observa_ii': 'Observa_ii', 'Latitudi_1': 'Latitudi_1', 'Longitud_1': 'Longitud_1', 'Latitudi_2': 'Latitudi_2', 'Longitud_2': 'Longitud_2', 'Latitudi_3': 'Latitudi_3', 'Longitud_3': 'Longitud_3', 'Latitudi_4': 'Latitudi_4', 'Longitud_4': 'Longitud_4', 'Detalii_pr': 'Detalii_pr', });
lyr_XYLinii_final_4.set('fieldAliases', {'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', 'Tip_proiec': 'Tip_proiec', 'Stadiu_in': 'Stadiu_in', 'Denumire_p': 'Denumire_p', 'Denumire_o': 'Denumire_o', 'Localizare': 'Localizare', 'Nr__Linie': 'Nr__Linie', 'Sec_ia_de': 'Sec_ia_de', 'Lot': 'Lot', 'Lungime__k': 'Lungime__k', 'De_la_poz': 'De_la_poz', 'Pana_la_po': 'Pana_la_po', 'Antrepreno': 'Antrepreno', 'Data_înce': 'Data_înce', 'Data_final': 'Data_final', 'Stadiu_fiz': 'Stadiu_fiz', 'Stadiu__fi': 'Stadiu__fi', 'Observa_ii': 'Observa_ii', 'Detalii_pr': 'Detalii_pr', });
lyr_Segmentedeliniicufinanareextern_5.set('fieldAliases', {'LATITUDINE': 'LATITUDINE', 'LONGITUDIN': 'LONGITUDIN', 'TIP_PRO': 'TIP_PRO', 'STADIU': 'STADIU', 'DEN_PRO': 'DEN_PRO', 'DEN_OB': 'DEN_OB', 'LOCALIZARE': 'LOCALIZARE', 'NR_LINIE': 'NR_LINIE', 'SECTIA': 'SECTIA', 'LOT': 'LOT', 'LUNGIME_KM': 'LUNGIME_KM', 'DE_LA_KM': 'DE_LA_KM', 'LA_KM': 'LA_KM', 'ANTREPRENO': 'ANTREPRENO', 'TERM_INCEP': 'TERM_INCEP', 'TERM_FINAL': 'TERM_FINAL', 'STADIU_FIZ': 'STADIU_FIZ', 'STADIU_FIN': 'STADIU_FIN', 'OBSERVATII': 'OBSERVATII', 'LATITUDI_F': 'LATITUDI_F', 'LONGITUD_F': 'LONGITUD_F', 'DETALII_PR': 'DETALII_PR', 'SHAPE_LEN': 'SHAPE_LEN', 'DATA_INCEP': 'DATA_INCEP', 'DATA_FINAL': 'DATA_FINAL', });
lyr_SegmenteSIGcufinanareextern_6.set('fieldAliases', {'LATITUDINE': 'LATITUDINE', 'LONGITUDIN': 'LONGITUDIN', 'TIP_PRO': 'TIP_PRO', 'STADIU': 'STADIU', 'DEN_PRO': 'DEN_PRO', 'DEN_OB': 'DEN_OB', 'LOCALIZARE': 'LOCALIZARE', 'NR_LINIE': 'NR_LINIE', 'SECTIA': 'SECTIA', 'LOT': 'LOT', 'LUNGIME_KM': 'LUNGIME_KM', 'DE_LA_KM': 'DE_LA_KM', 'LA_KM': 'LA_KM', 'ANTREPRENO': 'ANTREPRENO', 'DATA_INCEP': 'DATA_INCEP', 'TERM_FINAL': 'TERM_FINAL', 'STADIU_FIZ': 'STADIU_FIZ', 'STADIU_FIN': 'STADIU_FIN', 'OBSERVATII': 'OBSERVATII', 'LATITUDI_F': 'LATITUDI_F', 'LONGITUD_F': 'LONGITUD_F', 'DETALII_PR': 'DETALII_PR', 'SHAPE_LEN': 'SHAPE_LEN', 'TERM_INCEP': 'TERM_INCEP', 'DATA_FINAL': 'DATA_FINAL', });
lyr_Poduriitunelecufinanareextern_7.set('fieldAliases', {'Latitudine': 'Latitudine', 'Longitudin': 'Longitudin', 'Tip_pro': 'Tip_pro', 'Stadiu': 'Stadiu', 'Den_pro': 'Den_pro', 'Den_ob': 'Den_ob', 'Localizare': 'Localizare', 'Nr_Linie': 'Nr_Linie', 'Sectia': 'Sectia', 'Lot': 'Lot', 'Lungime_km': 'Lungime_km', 'De_la_km': 'De_la_km', 'La_km': 'La_km', 'Antrepreno': 'Antrepreno', 'Data_incep': 'Data_incep', 'Term_final': 'Term_final', 'Stadiu_fiz': 'Stadiu_fiz', 'Stadiu_fin': 'Stadiu_fin', 'Observatii': 'Observatii', 'Detalii_pr': 'Detalii_pr', 'Data_final': 'Data_final', 'Term_incep': 'Term_incep', });
lyr_SiguranaPCTcufinanareextern_8.set('fieldAliases', {'Longitudin': 'Longitudin', 'Latitudine': 'Latitudine', 'Tip_pro': 'Tip_pro', 'Stadiu': 'Stadiu', 'Den_pro': 'Den_pro', 'Den_ob': 'Den_ob', 'Localizare': 'Localizare', 'Nr_Linie': 'Nr_Linie', 'Sectia': 'Sectia', 'Lot': 'Lot', 'Lungime_km': 'Lungime_km', 'De_la_km': 'De_la_km', 'La_km': 'La_km', 'Antrepreno': 'Antrepreno', 'Data_incep': 'Data_incep', 'Term_final': 'Term_final', 'Stadiu_fiz': 'Stadiu_fiz', 'Stadiu_fin': 'Stadiu_fin', 'Observatii': 'Observatii', 'Detalii_pr': 'Detalii_pr', 'Data_final': 'Data_final', 'Term_incep': 'Term_incep', });
lyr_Staiicufinanareextern_9.set('fieldAliases', {'Longitudin': 'Longitudin', 'Latitudine': 'Latitudine', 'Tip_pro': 'Tip_pro', 'Stadiu': 'Stadiu', 'Den_pro': 'Den_pro', 'Den_ob': 'Den_ob', 'Localizare': 'Localizare', 'Nr_Linie': 'Nr_Linie', 'Sectia': 'Sectia', 'Lot': 'Lot', 'Lungime_km': 'Lungime_km', 'De_la_km': 'De_la_km', 'La_km': 'La_km', 'Antrepreno': 'Antrepreno', 'Term_incep': 'Term_incep', 'Term_final': 'Term_final', 'Stadiu_fiz': 'Stadiu_fiz', 'Stadiu_fin': 'Stadiu_fin', 'Observatii': 'Observatii', 'Detalii_pr': 'Detalii_pr', 'Data_incep': 'Data_incep', 'Data_final': 'Data_final', });
lyr_Trecerilanivelcufinanareaextern_10.set('fieldAliases', {'Lat': 'Lat', 'Long': 'Long', 'Tip_pro': 'Tip_pro', 'Stadiu': 'Stadiu', 'Den_pro': 'Den_pro', 'Den_ob': 'Den_ob', 'Localizare': 'Localizare', 'Nr_Linie': 'Nr_Linie', 'Sectia': 'Sectia', 'Lot': 'Lot', 'Lungime_km': 'Lungime_km', 'De_la_km': 'De_la_km', 'La_km': 'La_km', 'Antrepreno': 'Antrepreno', 'Data_incep': 'Data_incep', 'Term_incep': 'Term_incep', 'Term_final': 'Term_final', 'Stadiu_fiz': 'Stadiu_fiz', 'Stadiu_fin': 'Stadiu_fin', 'Observatii': 'Observatii', 'Detalii_pr': 'Detalii_pr', 'Data_final': 'Data_final', });
lyr_frontiera_ro_1.set('fieldImages', {'OID_': 'TextEdit', });
lyr_XYSiguranta_seg_f_2.set('fieldImages', {'Latitudine': '', 'Longitudin': '', 'Tip_proiec': '', 'Stadiu_in': '', 'Denumire_p': '', 'Denumire_o': '', 'Localizare': '', 'Nr__Linie': '', 'Sec_ia_de': '', 'Lot': '', 'Lungime__k': '', 'De_la_poz': '', 'Pana_la_po': '', 'Antrepreno': '', 'Data_înce': '', 'Data_final': '', 'Stadiu_fiz': '', 'Stadiu__fi': '', 'Observa_ii': '', 'Latitudi_1': '', 'Longitud_1': '', 'Latitudi_2': '', 'Longitud_2': '', 'Latitudi_3': '', 'Longitud_3': '', 'Latitudi_4': '', 'Longitud_4': '', 'Detalii_pr': '', });
lyr_XYSiguranta_seg_i_3.set('fieldImages', {'Latitudine': '', 'Longitudin': '', 'Tip_proiec': '', 'Stadiu_in': '', 'Denumire_p': '', 'Denumire_o': '', 'Localizare': '', 'Nr__Linie': '', 'Sec_ia_de': '', 'Lot': '', 'Lungime__k': '', 'De_la_poz': '', 'Pana_la_po': '', 'Antrepreno': '', 'Data_înce': '', 'Data_final': '', 'Stadiu_fiz': '', 'Stadiu__fi': '', 'Observa_ii': '', 'Latitudi_1': '', 'Longitud_1': '', 'Latitudi_2': '', 'Longitud_2': '', 'Latitudi_3': '', 'Longitud_3': '', 'Latitudi_4': '', 'Longitud_4': '', 'Detalii_pr': '', });
lyr_XYLinii_final_4.set('fieldImages', {'Latitudine': '', 'Longitudin': '', 'Tip_proiec': '', 'Stadiu_in': '', 'Denumire_p': '', 'Denumire_o': '', 'Localizare': '', 'Nr__Linie': '', 'Sec_ia_de': '', 'Lot': '', 'Lungime__k': '', 'De_la_poz': '', 'Pana_la_po': '', 'Antrepreno': '', 'Data_înce': '', 'Data_final': '', 'Stadiu_fiz': '', 'Stadiu__fi': '', 'Observa_ii': '', 'Detalii_pr': '', });
lyr_Segmentedeliniicufinanareextern_5.set('fieldImages', {'LATITUDINE': 'TextEdit', 'LONGITUDIN': 'TextEdit', 'TIP_PRO': 'TextEdit', 'STADIU': 'TextEdit', 'DEN_PRO': 'TextEdit', 'DEN_OB': 'TextEdit', 'LOCALIZARE': 'TextEdit', 'NR_LINIE': 'TextEdit', 'SECTIA': 'TextEdit', 'LOT': 'TextEdit', 'LUNGIME_KM': 'TextEdit', 'DE_LA_KM': 'TextEdit', 'LA_KM': 'TextEdit', 'ANTREPRENO': 'TextEdit', 'TERM_INCEP': 'TextEdit', 'TERM_FINAL': 'TextEdit', 'STADIU_FIZ': 'TextEdit', 'STADIU_FIN': 'TextEdit', 'OBSERVATII': 'TextEdit', 'LATITUDI_F': 'TextEdit', 'LONGITUD_F': 'TextEdit', 'DETALII_PR': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'DATA_INCEP': 'DateTime', 'DATA_FINAL': 'DateTime', });
lyr_SegmenteSIGcufinanareextern_6.set('fieldImages', {'LATITUDINE': 'TextEdit', 'LONGITUDIN': 'TextEdit', 'TIP_PRO': 'TextEdit', 'STADIU': 'TextEdit', 'DEN_PRO': 'TextEdit', 'DEN_OB': 'TextEdit', 'LOCALIZARE': 'TextEdit', 'NR_LINIE': 'TextEdit', 'SECTIA': 'TextEdit', 'LOT': 'TextEdit', 'LUNGIME_KM': 'TextEdit', 'DE_LA_KM': 'TextEdit', 'LA_KM': 'TextEdit', 'ANTREPRENO': 'TextEdit', 'DATA_INCEP': 'DateTime', 'TERM_FINAL': 'TextEdit', 'STADIU_FIZ': 'TextEdit', 'STADIU_FIN': 'TextEdit', 'OBSERVATII': 'TextEdit', 'LATITUDI_F': 'TextEdit', 'LONGITUD_F': 'TextEdit', 'DETALII_PR': 'TextEdit', 'SHAPE_LEN': 'TextEdit', 'TERM_INCEP': 'TextEdit', 'DATA_FINAL': 'DateTime', });
lyr_Poduriitunelecufinanareextern_7.set('fieldImages', {'Latitudine': 'TextEdit', 'Longitudin': 'TextEdit', 'Tip_pro': 'TextEdit', 'Stadiu': 'TextEdit', 'Den_pro': 'TextEdit', 'Den_ob': 'TextEdit', 'Localizare': 'TextEdit', 'Nr_Linie': 'TextEdit', 'Sectia': 'TextEdit', 'Lot': 'TextEdit', 'Lungime_km': 'TextEdit', 'De_la_km': 'TextEdit', 'La_km': 'TextEdit', 'Antrepreno': 'TextEdit', 'Data_incep': 'TextEdit', 'Term_final': 'TextEdit', 'Stadiu_fiz': 'TextEdit', 'Stadiu_fin': 'TextEdit', 'Observatii': 'TextEdit', 'Detalii_pr': 'TextEdit', 'Data_final': 'TextEdit', 'Term_incep': 'TextEdit', });
lyr_SiguranaPCTcufinanareextern_8.set('fieldImages', {'Longitudin': 'TextEdit', 'Latitudine': 'TextEdit', 'Tip_pro': 'TextEdit', 'Stadiu': 'TextEdit', 'Den_pro': 'TextEdit', 'Den_ob': 'TextEdit', 'Localizare': 'TextEdit', 'Nr_Linie': 'TextEdit', 'Sectia': 'TextEdit', 'Lot': 'TextEdit', 'Lungime_km': 'TextEdit', 'De_la_km': 'TextEdit', 'La_km': 'TextEdit', 'Antrepreno': 'TextEdit', 'Data_incep': 'DateTime', 'Term_final': 'TextEdit', 'Stadiu_fiz': 'TextEdit', 'Stadiu_fin': 'TextEdit', 'Observatii': 'TextEdit', 'Detalii_pr': 'TextEdit', 'Data_final': 'DateTime', 'Term_incep': 'TextEdit', });
lyr_Staiicufinanareextern_9.set('fieldImages', {'Longitudin': 'TextEdit', 'Latitudine': 'TextEdit', 'Tip_pro': 'TextEdit', 'Stadiu': 'TextEdit', 'Den_pro': 'TextEdit', 'Den_ob': 'TextEdit', 'Localizare': 'TextEdit', 'Nr_Linie': 'TextEdit', 'Sectia': 'TextEdit', 'Lot': 'TextEdit', 'Lungime_km': 'TextEdit', 'De_la_km': 'TextEdit', 'La_km': 'TextEdit', 'Antrepreno': 'TextEdit', 'Term_incep': 'TextEdit', 'Term_final': 'TextEdit', 'Stadiu_fiz': 'TextEdit', 'Stadiu_fin': 'TextEdit', 'Observatii': 'TextEdit', 'Detalii_pr': 'TextEdit', 'Data_incep': 'DateTime', 'Data_final': 'DateTime', });
lyr_Trecerilanivelcufinanareaextern_10.set('fieldImages', {'Lat': 'Hidden', 'Long': 'Hidden', 'Tip_pro': 'Hidden', 'Stadiu': 'TextEdit', 'Den_pro': 'TextEdit', 'Den_ob': 'TextEdit', 'Localizare': 'TextEdit', 'Nr_Linie': 'TextEdit', 'Sectia': 'TextEdit', 'Lot': 'TextEdit', 'Lungime_km': 'TextEdit', 'De_la_km': 'TextEdit', 'La_km': 'TextEdit', 'Antrepreno': 'TextEdit', 'Data_incep': 'TextEdit', 'Term_incep': 'TextEdit', 'Term_final': 'TextEdit', 'Stadiu_fiz': 'TextEdit', 'Stadiu_fin': 'TextEdit', 'Observatii': 'TextEdit', 'Detalii_pr': 'TextEdit', 'Data_final': 'TextEdit', });
lyr_frontiera_ro_1.set('fieldLabels', {'OID_': 'inline label - always visible', });
lyr_XYSiguranta_seg_f_2.set('fieldLabels', {'Latitudine': 'inline label - always visible', 'Longitudin': 'inline label - always visible', 'Tip_proiec': 'inline label - always visible', 'Stadiu_in': 'inline label - always visible', 'Denumire_p': 'inline label - always visible', 'Denumire_o': 'inline label - always visible', 'Localizare': 'inline label - always visible', 'Nr__Linie': 'inline label - always visible', 'Sec_ia_de': 'inline label - always visible', 'Lot': 'inline label - always visible', 'Lungime__k': 'inline label - always visible', 'De_la_poz': 'inline label - always visible', 'Pana_la_po': 'inline label - always visible', 'Antrepreno': 'inline label - always visible', 'Data_înce': 'inline label - always visible', 'Data_final': 'inline label - always visible', 'Stadiu_fiz': 'inline label - always visible', 'Stadiu__fi': 'inline label - always visible', 'Observa_ii': 'inline label - always visible', 'Latitudi_1': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Latitudi_2': 'inline label - always visible', 'Longitud_2': 'inline label - always visible', 'Latitudi_3': 'inline label - always visible', 'Longitud_3': 'inline label - always visible', 'Latitudi_4': 'inline label - always visible', 'Longitud_4': 'inline label - always visible', 'Detalii_pr': 'inline label - always visible', });
lyr_XYSiguranta_seg_i_3.set('fieldLabels', {'Latitudine': 'inline label - always visible', 'Longitudin': 'inline label - always visible', 'Tip_proiec': 'inline label - always visible', 'Stadiu_in': 'inline label - always visible', 'Denumire_p': 'inline label - always visible', 'Denumire_o': 'inline label - always visible', 'Localizare': 'inline label - always visible', 'Nr__Linie': 'inline label - always visible', 'Sec_ia_de': 'inline label - always visible', 'Lot': 'inline label - always visible', 'Lungime__k': 'inline label - always visible', 'De_la_poz': 'inline label - always visible', 'Pana_la_po': 'inline label - always visible', 'Antrepreno': 'inline label - always visible', 'Data_înce': 'inline label - always visible', 'Data_final': 'inline label - always visible', 'Stadiu_fiz': 'inline label - always visible', 'Stadiu__fi': 'inline label - always visible', 'Observa_ii': 'inline label - always visible', 'Latitudi_1': 'inline label - always visible', 'Longitud_1': 'inline label - always visible', 'Latitudi_2': 'inline label - always visible', 'Longitud_2': 'inline label - always visible', 'Latitudi_3': 'inline label - always visible', 'Longitud_3': 'inline label - always visible', 'Latitudi_4': 'inline label - always visible', 'Longitud_4': 'inline label - always visible', 'Detalii_pr': 'inline label - always visible', });
lyr_XYLinii_final_4.set('fieldLabels', {'Latitudine': 'inline label - always visible', 'Longitudin': 'inline label - always visible', 'Tip_proiec': 'inline label - always visible', 'Stadiu_in': 'inline label - always visible', 'Denumire_p': 'inline label - always visible', 'Denumire_o': 'inline label - always visible', 'Localizare': 'inline label - always visible', 'Nr__Linie': 'inline label - always visible', 'Sec_ia_de': 'inline label - always visible', 'Lot': 'inline label - always visible', 'Lungime__k': 'inline label - always visible', 'De_la_poz': 'inline label - always visible', 'Pana_la_po': 'inline label - always visible', 'Antrepreno': 'inline label - always visible', 'Data_înce': 'inline label - always visible', 'Data_final': 'inline label - always visible', 'Stadiu_fiz': 'inline label - always visible', 'Stadiu__fi': 'inline label - always visible', 'Observa_ii': 'inline label - always visible', 'Detalii_pr': 'inline label - always visible', });
lyr_Segmentedeliniicufinanareextern_5.set('fieldLabels', {'LATITUDINE': 'inline label - always visible', 'LONGITUDIN': 'inline label - always visible', 'TIP_PRO': 'inline label - always visible', 'STADIU': 'inline label - always visible', 'DEN_PRO': 'inline label - always visible', 'DEN_OB': 'inline label - always visible', 'LOCALIZARE': 'inline label - always visible', 'NR_LINIE': 'inline label - always visible', 'SECTIA': 'inline label - always visible', 'LOT': 'inline label - always visible', 'LUNGIME_KM': 'inline label - always visible', 'DE_LA_KM': 'inline label - always visible', 'LA_KM': 'inline label - always visible', 'ANTREPRENO': 'inline label - always visible', 'TERM_INCEP': 'inline label - always visible', 'TERM_FINAL': 'inline label - always visible', 'STADIU_FIZ': 'inline label - always visible', 'STADIU_FIN': 'inline label - always visible', 'OBSERVATII': 'inline label - always visible', 'LATITUDI_F': 'inline label - always visible', 'LONGITUD_F': 'inline label - always visible', 'DETALII_PR': 'inline label - always visible', 'SHAPE_LEN': 'inline label - always visible', 'DATA_INCEP': 'inline label - always visible', 'DATA_FINAL': 'inline label - always visible', });
lyr_SegmenteSIGcufinanareextern_6.set('fieldLabels', {'LATITUDINE': 'inline label - always visible', 'LONGITUDIN': 'inline label - always visible', 'TIP_PRO': 'inline label - always visible', 'STADIU': 'inline label - always visible', 'DEN_PRO': 'inline label - always visible', 'DEN_OB': 'inline label - always visible', 'LOCALIZARE': 'inline label - always visible', 'NR_LINIE': 'inline label - always visible', 'SECTIA': 'inline label - always visible', 'LOT': 'inline label - always visible', 'LUNGIME_KM': 'inline label - always visible', 'DE_LA_KM': 'inline label - always visible', 'LA_KM': 'inline label - always visible', 'ANTREPRENO': 'inline label - always visible', 'DATA_INCEP': 'inline label - always visible', 'TERM_FINAL': 'inline label - always visible', 'STADIU_FIZ': 'inline label - always visible', 'STADIU_FIN': 'inline label - always visible', 'OBSERVATII': 'inline label - always visible', 'LATITUDI_F': 'inline label - always visible', 'LONGITUD_F': 'inline label - always visible', 'DETALII_PR': 'inline label - always visible', 'SHAPE_LEN': 'inline label - always visible', 'TERM_INCEP': 'inline label - always visible', 'DATA_FINAL': 'inline label - always visible', });
lyr_Poduriitunelecufinanareextern_7.set('fieldLabels', {'Latitudine': 'inline label - always visible', 'Longitudin': 'inline label - always visible', 'Tip_pro': 'inline label - always visible', 'Stadiu': 'inline label - always visible', 'Den_pro': 'inline label - always visible', 'Den_ob': 'inline label - always visible', 'Localizare': 'inline label - always visible', 'Nr_Linie': 'inline label - always visible', 'Sectia': 'inline label - always visible', 'Lot': 'inline label - always visible', 'Lungime_km': 'inline label - always visible', 'De_la_km': 'inline label - always visible', 'La_km': 'inline label - always visible', 'Antrepreno': 'inline label - always visible', 'Data_incep': 'inline label - always visible', 'Term_final': 'inline label - always visible', 'Stadiu_fiz': 'inline label - always visible', 'Stadiu_fin': 'inline label - always visible', 'Observatii': 'inline label - always visible', 'Detalii_pr': 'inline label - always visible', 'Data_final': 'inline label - always visible', 'Term_incep': 'inline label - always visible', });
lyr_SiguranaPCTcufinanareextern_8.set('fieldLabels', {'Longitudin': 'inline label - always visible', 'Latitudine': 'inline label - always visible', 'Tip_pro': 'inline label - always visible', 'Stadiu': 'inline label - always visible', 'Den_pro': 'inline label - always visible', 'Den_ob': 'inline label - always visible', 'Localizare': 'inline label - always visible', 'Nr_Linie': 'inline label - always visible', 'Sectia': 'inline label - always visible', 'Lot': 'inline label - always visible', 'Lungime_km': 'inline label - always visible', 'De_la_km': 'inline label - always visible', 'La_km': 'inline label - always visible', 'Antrepreno': 'inline label - always visible', 'Data_incep': 'inline label - always visible', 'Term_final': 'inline label - always visible', 'Stadiu_fiz': 'inline label - always visible', 'Stadiu_fin': 'inline label - always visible', 'Observatii': 'inline label - always visible', 'Detalii_pr': 'inline label - always visible', 'Data_final': 'inline label - always visible', 'Term_incep': 'inline label - always visible', });
lyr_Staiicufinanareextern_9.set('fieldLabels', {'Longitudin': 'inline label - always visible', 'Latitudine': 'inline label - always visible', 'Tip_pro': 'inline label - always visible', 'Stadiu': 'inline label - always visible', 'Den_pro': 'inline label - always visible', 'Den_ob': 'inline label - always visible', 'Localizare': 'inline label - always visible', 'Nr_Linie': 'inline label - always visible', 'Sectia': 'inline label - always visible', 'Lot': 'inline label - always visible', 'Lungime_km': 'inline label - always visible', 'De_la_km': 'inline label - always visible', 'La_km': 'inline label - always visible', 'Antrepreno': 'inline label - always visible', 'Term_incep': 'inline label - always visible', 'Term_final': 'inline label - always visible', 'Stadiu_fiz': 'inline label - always visible', 'Stadiu_fin': 'inline label - always visible', 'Observatii': 'inline label - always visible', 'Detalii_pr': 'inline label - always visible', 'Data_incep': 'inline label - always visible', 'Data_final': 'inline label - always visible', });
lyr_Trecerilanivelcufinanareaextern_10.set('fieldLabels', {'Stadiu': 'inline label - always visible', 'Den_pro': 'inline label - always visible', 'Den_ob': 'inline label - always visible', 'Localizare': 'inline label - always visible', 'Nr_Linie': 'inline label - always visible', 'Sectia': 'inline label - always visible', 'Lot': 'inline label - always visible', 'Lungime_km': 'inline label - always visible', 'De_la_km': 'inline label - always visible', 'La_km': 'inline label - always visible', 'Antrepreno': 'inline label - always visible', 'Data_incep': 'inline label - always visible', 'Term_incep': 'inline label - always visible', 'Term_final': 'inline label - always visible', 'Stadiu_fiz': 'inline label - always visible', 'Stadiu_fin': 'inline label - always visible', 'Observatii': 'inline label - always visible', 'Detalii_pr': 'inline label - always visible', 'Data_final': 'inline label - always visible', });
lyr_Trecerilanivelcufinanareaextern_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});