  var map = L.map('map').setView([42.338, -71.103], 12);

  var icons = {
    constr: L.icon({
      iconUrl: './assets/img/construction.png',
      iconSize: [27, 31],
      iconAnchor: [13.5, 17.5],
      popupAnchor: [0, -11],
    })
  };

  //L.esri.basemapLayer('Streets').addTo(map);
  var mapquestOSM = L.tileLayer("//{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png", {
	  maxZoom: 19,
	  subdomains: ["otile1", "otile2", "otile3", "otile4"],
	  attribution: 'Tiles courtesy of <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> <img src="http://developer.mapquest.com/content/osm/mq_logo.png">. Map data (c) <a href="http://www.openstreetmap.org/" target="_blank">OpenStreetMap</a> contributors, CC-BY-SA.'
	});
	mapquestOSM.addTo(map);

// styled with the 0 boston layer
/*
  L.esri.featureLayer({
    url: 'http://gis.cityofboston.gov/arcgis/rest/services/Live/Waze/MapServer/0',
    pointToLayer: function (geojson, latlng) {
      return L.marker(latlng, {
        icon: icons.constr
      });
    },
  }).addTo(map);
  */
 
 //non-styled with the 3 layer
  var bostonRSS3 =  L.esri.featureLayer({
    url: '//gis.cityofboston.gov/arcgis/rest/services/Live/Waze/MapServer/3'
  })
  bostonRSS3.addTo(map);
  
  bostonRSS3.bindPopup(function (features) {
  	
  	//console.log(features);
  	console.log(features.feature.properties);
  		var pophtml = 'Street: ' + features.feature.properties.street + '<\/br>';
  		pophtml += 'Type: <strong>' + features.feature.properties.type + '<\/strong><\/br>';
  		pophtml += 'Subtype: ' + features.feature.properties.subtype + '<\/br>';
  		pophtml += 'Start Time: ' + features.feature.properties.starttime;
      return pophtml
  });