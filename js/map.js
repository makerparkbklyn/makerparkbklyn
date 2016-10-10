function initMap() {
	var makerParkLatLng = {lat: 40.725139, lng: -73.961377}
	var mapDiv = document.getElementById('map');
	var options = {
		mapTypeControlOptions: {
			mapTypeIds: ['Maker Park']
		},
		center: new google.maps.LatLng(40.724829, -73.960555),
		zoom: 15,
		mapTypeId: 'Maker Park',
		scrollwheel: false,
	};
	var styles = [
		{
			featureType: 'all',
			stylers: [
				// { saturation: -80 }
				{ saturation: 0 }
			]
		},
		{
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{color: '#CCBFFF'}]
        },
		{
			featureType: 'landscape',
			elementType: 'geometry',
			stylers: [
				{color: '#F3F0FF'},
				// { saturation: 80}
			]
		},
		{
			featureType: 'administrative',
			elementType: 'geometry',
			stylers: [
				{color: '#CCBFFF'},
			]
		},
		{
			featureType: 'road',
			elementType: 'all',
			stylers: [
				{ color: '#E7E0FF' },
				{ saturation: 0 }
			]
		},
		{
			featureType: 'road',
			elementType: 'labels',
			stylers: [
				{visibility: 'off'},
				{ color: '#1F005C' },
				{ saturation: 0 }
			]
		},
		{
			featureType: 'transit',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off'},
				// { color: '#1F005C' },
			]
		},
		{
			featureType: 'poi.business',
			elementType: 'labels',
			stylers: [
				{ visibility: 'off' }
			]
		},{
			featureType: 'water',
			elementType: 'geometry.fill',
			stylers: [
				{ color: '#A48CFF'},
				{ saturation: 0 },
			]
		}
	];
	var map = new google.maps.Map(mapDiv, options);
	var styledMapType = new google.maps.StyledMapType(styles, { name: 'Maker Park' });
	map.mapTypes.set('Maker Park', styledMapType);
	var icon = {
	    url: "images/logo.svg", // url
	    scaledSize: new google.maps.Size(57, 50), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor
	};
	var marker = new google.maps.Marker({
		position: makerParkLatLng,
		map:map,
		icon: icon,
		title: 'Maker Park'
	});
};
