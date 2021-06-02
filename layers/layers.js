var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PrimtreduSBV4R_1 = new ol.format.GeoJSON();
var features_PrimtreduSBV4R_1 = format_PrimtreduSBV4R_1.readFeatures(json_PrimtreduSBV4R_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimtreduSBV4R_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrimtreduSBV4R_1.addFeatures(features_PrimtreduSBV4R_1);
var lyr_PrimtreduSBV4R_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrimtreduSBV4R_1, 
                style: style_PrimtreduSBV4R_1,
                interactive: true,
                title: '<img src="styles/legend/PrimtreduSBV4R_1.png" /> Périmètre du SBV4R'
            });
var format_Liste1_2 = new ol.format.GeoJSON();
var features_Liste1_2 = format_Liste1_2.readFeatures(json_Liste1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liste1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liste1_2.addFeatures(features_Liste1_2);
var lyr_Liste1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Liste1_2, 
                style: style_Liste1_2,
                interactive: true,
                title: '<img src="styles/legend/Liste1_2.png" /> Liste 1'
            });
var format_Liste2_3 = new ol.format.GeoJSON();
var features_Liste2_3 = format_Liste2_3.readFeatures(json_Liste2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liste2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Liste2_3.addFeatures(features_Liste2_3);
var lyr_Liste2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Liste2_3, 
                style: style_Liste2_3,
                interactive: true,
                title: '<img src="styles/legend/Liste2_3.png" /> Liste 2'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PrimtreduSBV4R_1.setVisible(true);lyr_Liste1_2.setVisible(true);lyr_Liste2_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_PrimtreduSBV4R_1,lyr_Liste1_2,lyr_Liste2_3];
lyr_PrimtreduSBV4R_1.set('fieldAliases', {'insee': 'insee', 'nom': 'nom', 'wikipedia': 'wikipedia', 'surf_ha': 'surf_ha', 'chp_commun': 'chp_commun', });
lyr_Liste1_2.set('fieldAliases', {'CodeNatZon': 'CodeNatZon', 'TypeZone': 'TypeZone', 'CodeEuZone': 'CodeEuZone', 'NomZone': 'NomZone', 'DateCreati': 'DateCreati', 'DateMajZon': 'DateMajZon', 'StZone': 'StZone', 'ListeClass': 'ListeClass', 'CommentCla': 'CommentCla', 'ThemeSegHy': 'ThemeSegHy', 'PkAmontSeg': 'PkAmontSeg', 'PkAvalSegH': 'PkAvalSegH', 'CoordXNoeu': 'CoordXNoeu', 'CoordYNoeu': 'CoordYNoeu', 'CoordXNo_1': 'CoordXNo_1', 'CoordYNo_1': 'CoordYNo_1', 'SRSNoeudsA': 'SRSNoeudsA', 'JeuDonnees': 'JeuDonnees', 'VersionJeu': 'VersionJeu', 'CritereCla': 'CritereCla', 'NumTexRegl': 'NumTexRegl', 'gid': 'gid', });
lyr_Liste2_3.set('fieldAliases', {'CodeNatZon': 'CodeNatZon', 'TypeZone': 'TypeZone', 'CodeEuZone': 'CodeEuZone', 'NomZone': 'NomZone', 'DateCreati': 'DateCreati', 'DateMajZon': 'DateMajZon', 'StZone': 'StZone', 'ListeClass': 'ListeClass', 'CommentCla': 'CommentCla', 'ThemeSegHy': 'ThemeSegHy', 'PkAmontSeg': 'PkAmontSeg', 'PkAvalSegH': 'PkAvalSegH', 'CoordXNoeu': 'CoordXNoeu', 'CoordYNoeu': 'CoordYNoeu', 'CoordXNo_1': 'CoordXNo_1', 'CoordYNo_1': 'CoordYNo_1', 'SRSNoeudsA': 'SRSNoeudsA', 'JeuDonnees': 'JeuDonnees', 'VersionJeu': 'VersionJeu', 'CritereCla': 'CritereCla', 'NumTexRegl': 'NumTexRegl', 'gid': 'gid', });
lyr_PrimtreduSBV4R_1.set('fieldImages', {'insee': 'TextEdit', 'nom': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_ha': 'TextEdit', 'chp_commun': 'Range', });
lyr_Liste1_2.set('fieldImages', {'CodeNatZon': 'TextEdit', 'TypeZone': 'TextEdit', 'CodeEuZone': 'TextEdit', 'NomZone': 'TextEdit', 'DateCreati': 'DateTime', 'DateMajZon': 'DateTime', 'StZone': 'TextEdit', 'ListeClass': 'TextEdit', 'CommentCla': 'TextEdit', 'ThemeSegHy': 'TextEdit', 'PkAmontSeg': 'TextEdit', 'PkAvalSegH': 'TextEdit', 'CoordXNoeu': 'TextEdit', 'CoordYNoeu': 'TextEdit', 'CoordXNo_1': 'TextEdit', 'CoordYNo_1': 'TextEdit', 'SRSNoeudsA': 'TextEdit', 'JeuDonnees': 'TextEdit', 'VersionJeu': 'TextEdit', 'CritereCla': 'TextEdit', 'NumTexRegl': 'TextEdit', 'gid': 'TextEdit', });
lyr_Liste2_3.set('fieldImages', {'CodeNatZon': 'TextEdit', 'TypeZone': 'TextEdit', 'CodeEuZone': 'TextEdit', 'NomZone': 'TextEdit', 'DateCreati': 'DateTime', 'DateMajZon': 'DateTime', 'StZone': 'TextEdit', 'ListeClass': 'TextEdit', 'CommentCla': 'TextEdit', 'ThemeSegHy': 'TextEdit', 'PkAmontSeg': 'TextEdit', 'PkAvalSegH': 'TextEdit', 'CoordXNoeu': 'TextEdit', 'CoordYNoeu': 'TextEdit', 'CoordXNo_1': 'TextEdit', 'CoordYNo_1': 'TextEdit', 'SRSNoeudsA': 'TextEdit', 'JeuDonnees': 'TextEdit', 'VersionJeu': 'TextEdit', 'CritereCla': 'TextEdit', 'NumTexRegl': 'TextEdit', 'gid': 'TextEdit', });
lyr_PrimtreduSBV4R_1.set('fieldLabels', {'insee': 'no label', 'nom': 'no label', 'wikipedia': 'no label', 'surf_ha': 'no label', 'chp_commun': 'no label', });
lyr_Liste1_2.set('fieldLabels', {'CodeNatZon': 'no label', 'TypeZone': 'no label', 'CodeEuZone': 'no label', 'NomZone': 'no label', 'DateCreati': 'no label', 'DateMajZon': 'no label', 'StZone': 'no label', 'ListeClass': 'no label', 'CommentCla': 'no label', 'ThemeSegHy': 'no label', 'PkAmontSeg': 'no label', 'PkAvalSegH': 'no label', 'CoordXNoeu': 'no label', 'CoordYNoeu': 'no label', 'CoordXNo_1': 'no label', 'CoordYNo_1': 'no label', 'SRSNoeudsA': 'no label', 'JeuDonnees': 'no label', 'VersionJeu': 'no label', 'CritereCla': 'no label', 'NumTexRegl': 'no label', 'gid': 'no label', });
lyr_Liste2_3.set('fieldLabels', {'CodeNatZon': 'no label', 'TypeZone': 'no label', 'CodeEuZone': 'no label', 'NomZone': 'no label', 'DateCreati': 'no label', 'DateMajZon': 'no label', 'StZone': 'no label', 'ListeClass': 'no label', 'CommentCla': 'no label', 'ThemeSegHy': 'no label', 'PkAmontSeg': 'no label', 'PkAvalSegH': 'no label', 'CoordXNoeu': 'no label', 'CoordYNoeu': 'no label', 'CoordXNo_1': 'no label', 'CoordYNo_1': 'no label', 'SRSNoeudsA': 'no label', 'JeuDonnees': 'no label', 'VersionJeu': 'no label', 'CritereCla': 'no label', 'NumTexRegl': 'no label', 'gid': 'no label', });
lyr_Liste2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});