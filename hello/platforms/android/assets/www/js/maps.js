(function (scope) {
    // konfigurierbar
    
	window.Map = {};

	window.Map.init = function(lat, lng){
		var zoom = 18;
        var latView = lat || 48.808530;
        var longView = lng || 9.179300;
        var latMarker = lat || 48.808520;
        var longMarker = lng|| 9.180595;

        // 'boilerplate'
        var map = new OpenLayers.Map("basicMap");
        var mapnik = new OpenLayers.Layer.OSM();
        var fromProjection = new OpenLayers.Projection("EPSG:4326");   // Transform from WGS 1984
        var toProjection = new OpenLayers.Projection("EPSG:900913"); // to Spherical Mercator Projection
        var positionView = new OpenLayers.LonLat(longView, latView).transform(fromProjection, toProjection);

        map.addLayer(mapnik);
        map.setCenter(positionView, zoom);

        // Marker
        var positionMarker = new OpenLayers.LonLat(longMarker, latMarker).transform(fromProjection, toProjection);
        var markers = new OpenLayers.Layer.Markers("Markers");
        markers.addMarker(new OpenLayers.Marker(positionMarker));

        map.addLayer(markers);

        // Popup
        var popup = new OpenLayers.Popup.FramedCloud("Popup", positionMarker, new OpenLayers.Size(200,200),
        '<a href="http://mwaysolutions.com" target="_blank">We</a> are here', null, true);
    	map.addPopup(popup);
    }
    
	
})();